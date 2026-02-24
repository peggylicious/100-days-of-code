import {Component, computed, signal} from '@angular/core';
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

@Component({
  selector: 'app-playground',
  imports: [
    Pitch,
    PlayerEvents,
    PlayerCard,
    DataTable
  ],
  templateUrl: './playground.html',
  styleUrl: './playground.scss'
})
export class Playground {
  public PLAYER_EVENTS = signal(footballEventsGoogleSet)
  public MATCHDAY_CONFIG = signal(matchDayConfig)
  public query = signal('')
  public selectedPlayerData = signal<Partial<MatchEventLogEntry>>({})
  public matchLogEntry = signal<MatchEventLogEntry[]>([])
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

  updatePlayerEntry(zone: MatchingZone) {
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
}
