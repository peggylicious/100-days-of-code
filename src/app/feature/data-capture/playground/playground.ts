import {Component, signal} from '@angular/core';
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
