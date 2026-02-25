import {Component, computed, inject, signal} from '@angular/core';
import {Pitch} from '../../../ui/pitch/pitch';
import {MatchingZone} from '../interfaces/pitch';
import {PlayerEvents} from '../../../ui/player-events/player-events';
import {footballEventsGoogleSet} from '../constants/player-events';
import {PlayerCard} from '../../../ui/player-card/player-card';
import {matchDayConfig} from '../constants/match';
import {MatchEventLogEntry, Player} from '../interfaces/player';
import {MatchConfig, Team, TeamSide} from '../interfaces/team';
import {DataTable} from '../../../ui/data-table/data-table';
import {EventOutcome, FootballItem} from '../interfaces/player-events';
import {Alert} from '../../../ui/alert/alert';
import {AlertProp} from '../interfaces/shared';
import {Snackbar} from '../../../services/snackbar';
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
    Alert
  ],
  templateUrl: './playground.html',
  styleUrl: './playground.scss'
})
export class Playground {
  private snackbarService = inject(Snackbar)
  public PLAYER_EVENTS = signal(footballEventsGoogleSet)
  public MATCHDAY_CONFIG = signal(matchDayConfig)
  public alerts = this.snackbarService.alerts
  public query = signal('')
  public selectedPlayerData = signal<Partial<MatchEventLogEntry>>({})
  public matchLogEntry = signal<MatchEventLogEntry[]>([])
  private draft = signal<DraftTerm>({
    isPlayerSelected: false,
    isEventSelected: false,
    isCoordinateSelected: false,
  })
  filteredPlayersList = computed(()=> {
    const searchTerm = this.query().toLowerCase();
    const state = this.MATCHDAY_CONFIG();
    if(!searchTerm)  return state
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

  selectPitchPosition(zone: MatchingZone) {
    this.selectedPlayerData.update(state => {
      return {
        ...state,
        coordinates: {
          ...state.coordinates,
          x: zone.x,
          y: zone.y
        }
      }
    })
    if(zone.x){
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
    if(!this.checkDraftSelection()){
      return
    }
    this.selectedPlayerData.update(state => {
      const {item, outcome} = data;
      return {
        ...state,
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
    this.selectedPlayerData.set({})
  }

  private updateDraft(term: Partial<DraftTerm>) {
    this.draft.update(state => ({...state, ...term}))
  }
  private checkDraftSelection(){
    if(!this.draft().isCoordinateSelected){
      this.snackbarService.updateAlert({message: "No coordinate selected", cssClass: "warning", duration: 7000})
      return false
    }
    if(!this.draft().isPlayerSelected){
      this.snackbarService.updateAlert({message: "No player selected", cssClass: "info", duration: 7000})
      return false
    }
    return true;
  }

  removeAlert(id: string){
    this.snackbarService.removeAlert(id)
  }
}
