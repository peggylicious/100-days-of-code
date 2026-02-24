import {Component, computed, signal} from '@angular/core';
import {Pitch} from '../../../ui/pitch/pitch';
import {MatchingZone} from '../interfaces/pitch';
import {PlayerEvents} from '../../../ui/player-events/player-events';
import {footballEventsGoogleSet} from '../constants/player-events';
import {PlayerCard} from '../../../ui/player-card/player-card';
import {matchDayConfig} from '../constants/match';
import {Player} from '../interfaces/player';
import {MatchConfig, Team, TeamSide} from '../interfaces/team';

@Component({
  selector: 'app-playground',
  imports: [
    Pitch,
    PlayerEvents,
    PlayerCard
  ],
  templateUrl: './playground.html',
  styleUrl: './playground.scss'
})
export class Playground {
  public PLAYER_EVENTS = signal(footballEventsGoogleSet)
  public MATCHDAY_CONFIG = signal(matchDayConfig)
  public query = signal('')

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

  updatePlayerEntry($event: MatchingZone) {
    console.log('updatePlayerEntry', $event);
  }

  selectPlayer(selectedPlayer: Player, teamSide: TeamSide) {
    this.MATCHDAY_CONFIG.update(state => {
      return {
        ...state,
        home: this.updateSelectedPlayer(selectedPlayer, state.home, teamSide === 'home'),
        away: this.updateSelectedPlayer(selectedPlayer, state.away, teamSide === 'away')
      }
    })
  }

  updateSelectedPlayer(selectedPlayer: Player, team: Team, isTargetTeam: boolean){
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
}
