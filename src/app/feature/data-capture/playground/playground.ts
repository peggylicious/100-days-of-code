import {Component, computed, HostListener, inject, linkedSignal, signal} from '@angular/core';
import {Pitch} from '../../../ui/pitch/pitch';
import { PitchConfig} from '../interfaces/pitch';
import {PlayerEvents} from '../../../ui/player-events/player-events';
import {footballEventsGoogleSet} from '../constants/player-events';
import {PlayerCard} from '../../../ui/player-card/player-card';
import {matchDayConfig} from '../constants/match';
import {MatchEventLogEntry, Player} from '../interfaces/player';
import {MatchConfig, Team, TeamSide} from '../interfaces/team';
import {DataTable} from '../../../ui/data-table/data-table';
import {EventOutcome, FootballItem} from '../interfaces/player-events';
import {Alert} from '../../../ui/alert/alert';
import {Snackbar} from '../../../services/snackbar';
import {YoutubePlayer} from '../../../ui/youtube-player/youtube-player';
import {POSITIONS} from '../constants/player';
import {AddPlayer} from '../../../ui/add-player/add-player';
import {getOutcomeCommentary} from '../constants/events-commentary';
interface DraftTerm {
  isPlayerSelected: boolean;
  isEventSelected: boolean;
  isCoordinateSelected: boolean;
}
@Component({
  selector: 'app-playground',
  imports: [
    Pitch,
    PlayerEvents,
    PlayerCard,
    DataTable,
    Alert,
    YoutubePlayer,
    AddPlayer
  ],
  templateUrl: './playground.html',
  styleUrl: './playground.scss'
})
export class Playground {

  @HostListener('window:keydown.space', ['$event'])
  handleKeyDown(event: Event) {
    const kbEvt = event as KeyboardEvent;
    console.log('Escape pressed!', event, kbEvt);
    this.commentaryOn.set(!this.commentaryOn())
    this.snackbarService.updateAlert({message: "Commentary turned " + (this.commentaryOn() ? 'ON' : 'OFF') + "!", cssClass: "info", duration: 1500})
    // this.closeModal();
  }
  private snackbarService = inject(Snackbar)
  public PLAYER_EVENTS = signal(footballEventsGoogleSet)
  private CONFIG_TAG = 'MATCHDAY_CONFIG'
  private EVENT_TAG = 'MATCHDAY_EVENT'
  private MATCHDAY_CONFIG = linkedSignal(() => {
    const storageData = localStorage.getItem(this.CONFIG_TAG);
    const savedEvents = JSON.parse(storageData ?? '{}') as MatchConfig
    const isEmpty = Object.keys(savedEvents).length === 0;
    return isEmpty ? matchDayConfig : JSON.parse(storageData ?? '{}') as MatchConfig ?? matchDayConfig
  })
  public alerts = this.snackbarService.alerts
  public query = signal('')
  private selectedPlayerData = signal<Partial<MatchEventLogEntry>>(this.getSavedSelectedPlayer()) //Gets active player data
  private matchLogEntry = linkedSignal<MatchEventLogEntry[]>(() => {
    const storageEvents = localStorage.getItem(this.EVENT_TAG);
    const savedEvents = JSON.parse(storageEvents ?? '[]') as MatchEventLogEntry[]
    const isEmpty = savedEvents.length === 0;
    return isEmpty ? [] : JSON.parse(storageEvents ?? '[]') as MatchEventLogEntry[]
  })
  public eventsTable = computed(() => {
    const logs = this.matchLogEntry()
    localStorage.setItem(this.EVENT_TAG, JSON.stringify(logs));
    return this.matchLogEntry()
  })
  private draft = signal<DraftTerm>({
    isPlayerSelected: false,
    isEventSelected: false,
    isCoordinateSelected: false,
  })
  filteredPlayersList = computed(()=> {
    const searchTerm = this.query().toLowerCase();
    const state = this.MATCHDAY_CONFIG();
    if(!searchTerm)  {
      localStorage.setItem(this.CONFIG_TAG, JSON.stringify(state));
      return state
    }
    return {
      ...state,
      home: {
        ...state.home,
        players: state.home.players.filter(player => player.name.toLowerCase().includes(searchTerm.toLowerCase())),
      },
      away: {
        ...state.away,
        players: state.away.players.filter(player => player.name.toLowerCase().includes(searchTerm.toLowerCase())),
      }
    }
  })
  public isShowTable = signal<boolean>(false)
  highlightedCoordinate = signal<{ x: number, y: number } | undefined>(undefined);
  selectedTableItem = signal<MatchEventLogEntry | null>(null)
  latestPlayTime = signal<{yt: number, system: Date} | null>(null)
  isPlayerPaused = signal<boolean>(true)
  seekTime = signal<number>(0)
  removePlayerList = signal<{ home: string[], away: string[]}>({home: [], away: []})
  showSelectBoxes = signal<boolean>(false)
  public videoUrl = signal('')
  defaultPlayer: Player =   { id: 'a1', name: 'P1', jersey_no: '1', status: 'ready', position: POSITIONS.find(p => p.key === 'GK')! }
  isOpen = signal<boolean>(false);
  commentaryOn = signal<boolean>(false)
  selectPitchPosition(zone: PitchConfig) {
    this.selectedPlayerData.update(state => {
      return {
        ...state,
        coordinates: zone.zoneConfig,
        offset: zone.offsetConfig
      }
    })
    if(zone.zoneConfig.x){
      this.updateDraft({isCoordinateSelected: true})
    }
  }

  selectPlayer(selectedPlayer: Player, teamSide: TeamSide) {
    this.MATCHDAY_CONFIG.update(state => {
      return {
        ...state,
        home: this.updateSelectedPlayerStatus(selectedPlayer, state.home, teamSide === 'home'),
        away: this.updateSelectedPlayerStatus(selectedPlayer, state.away, teamSide === 'away')
      }
    })
    this.selectedPlayerData.update(state => {
      return {
        ...state,
        playerId: selectedPlayer.id,
        playerName: selectedPlayer.name,
      }
    })
    if(selectedPlayer.id){
      this.updateDraft({isPlayerSelected: true})
    }
  }

  updateSelectedPlayerStatus(selectedPlayer: Player, team: Team, isTargetTeam: boolean){
    const updatedPlayersList =  team.players.map((player) => {
      return {
        ...player,
        status: isTargetTeam && player.id === selectedPlayer.id ? 'active' : 'ready',
      }
    })
    return {
      ...team,
      players: updatedPlayersList
    }
  }

  updatePlayerEvent(data: { item: FootballItem; outcome: EventOutcome }) {
    // if (this.isPlayerPaused() || (!this.isPlayerPaused && !this.latestPlayTime()?.yt)){
    if (this.isPlayerPaused()){
      this.snackbarService.updateAlert({message: "You will need to start match before logging player events!", cssClass: "warning", duration: 2000})
      return;
    }
    if(!this.checkDraftSelection()){
      return
    }
    this.selectedPlayerData.update(state => {
      const {item, outcome} = data;
      return {
        ...state,
        matchTime: this.getPlayerTimeAtAction(),
        outcome: outcome,
        eventTypeId: item.id,
        eventTypeName: item.name,
        categoryType: item.categoryType,
        timeStamp: new Date()
      }
    })
    this.matchLogEntry.update(state => {
      return[...state, this.selectedPlayerData()  as MatchEventLogEntry];
    })
    this.draft.update(state => ({...state, isEventSelected: false, isCoordinateSelected: false}))
    if (this.commentaryOn()){
      this.snackbarService.updateAlert(
        {
          message: getOutcomeCommentary(
            this.selectedPlayerData().playerName!,
            this.selectedPlayerData().eventTypeId!,
            this.selectedPlayerData().outcome?.id!,
            this.selectedPlayerData().coordinates?.zone.name!
          ),
          duration: 1000,
          position: 'bottom',
          cssClass: 'light',
          type: 'commentary',
        },
        this.selectedPlayerData().playerName
      )
    }
    this.selectedPlayerData.update(state => ({...{}, playerId: state.playerId, playerName: state.playerName}))
  }

  private updateDraft(term: Partial<DraftTerm>) {
    this.draft.update(state => ({...state, ...term}))
  }
  private checkDraftSelection(){
    if(!this.draft().isCoordinateSelected){
      this.snackbarService.updateAlert({message: "No coordinate selected", cssClass: "warning", duration: 2000})
      return false
    }
    if(!this.draft().isPlayerSelected && !this.selectedPlayerData().playerId){
      this.snackbarService.updateAlert({message: "No player selected", cssClass: "info", duration: 2000})
      return false
    }
    return true;
  }

  removeAlert(id: string){
    this.snackbarService.removeAlert(id)
  }

  showTable() {
    this.isShowTable.set(!this.isShowTable());
  }
  showSelectedCoordinate(event: MatchEventLogEntry | null){
    this.selectedTableItem.set(event)
  }
  seek(time: number){
      this.seekTime.set(time)
  }

  logSelectedTime($event: {yt: number, system: Date}) {
    console.log("log ", $event)
    const {yt, system} = $event
    this.latestPlayTime.set({yt, system})
  }

  getPlayerTimeAtAction(){
    const msElapsed = Date.now() - (this.latestPlayTime()?.system.getTime() ?? 0);
    const secondsElapsed = msElapsed / 1000;
    console.log(this.latestPlayTime())
    return  Math.floor((this.latestPlayTime()?.yt ?? 0) + secondsElapsed);
  }

  stopPlay(event: boolean) {
    console.log(event)
    this.isPlayerPaused.set(event)
  }

  public setVideoUrl(val: HTMLInputElement) {
    this.videoUrl.set(val.value)
  }

  updatePlayer($event: Player, id: string, side: TeamSide) {
    this.MATCHDAY_CONFIG.update(state => {
      return {
        ...state,
        [side]: {
          ...state[side],
          players: state[side].players.map(player => {
            if(player.id === $event.id){
              return {
                ...player,
                ...$event
              };
            }
            return player
          })
        }
      }
    })
    this.updateLogs($event)
  }

  updateLogs(player: Player){
    this.matchLogEntry.update((state) => {
      return state.map(log => {
        if(log.playerId === player.id){
          return {
            ...log,
            playerName: player.name,
          }
        }
        return log
      })
    })
  }

  getSavedSelectedPlayer(){
    const storageData = localStorage.getItem(this.CONFIG_TAG);
    const savedConfig = JSON.parse(storageData ?? '{}') as MatchConfig
    const grpdPlayers: Player[] = []
    if(savedConfig.home && savedConfig.home.players){
      grpdPlayers.push(...savedConfig.home.players)
    }
    if(savedConfig.away && savedConfig.away.players){
      grpdPlayers.push(...savedConfig.away.players)
    }
    const player = grpdPlayers.find(player => player.status === 'active')
    if(player){
      return {
        playerId: player.id,
        playerName: player.name
      }
    }
    return {}
  }

  selectForDeletion(id: string, side: TeamSide) {
    if (side === 'home'){
      this.removePlayerList.update(state => ({...state, home: [...state.home, id]}))
    }
    if (side === 'away'){
      this.removePlayerList.update(state => ({...state, away: [...state.away, id]}))
    }
  }

  removePlayers() {
    this.MATCHDAY_CONFIG.update(state => {
      return {
        ...state,
        home: {
          ...state.home,
          players: state.home.players.filter(player => !this.removePlayerList().home.includes(player.id))
        },
        away: {
          ...state.away,
          players: state.away.players.filter(player => !this.removePlayerList().away.includes(player.id))
        }
      }
    })
    this.showSelectBoxes.set(false)
  }

  addPlayer(player: Player, teamSide: TeamSide) {
      this.MATCHDAY_CONFIG.update(state => {
        return {
          ...state,
          [teamSide]: {
            ...state[teamSide],
            players: [...state[teamSide].players, player]
          }
        }
      })
    this.closePlayerModal()
  }

  showPlayerModal(teamSide: TeamSide) {
    if (this.MATCHDAY_CONFIG()[teamSide].players.length === 11){
      this.snackbarService.updateAlert({message: "Cannot exceed 11 players", cssClass: "warning", duration: 2000})
      return
    }
    this.isOpen.set(true)
  }
  closePlayerModal() {
    this.isOpen.set(false)
  }
}
