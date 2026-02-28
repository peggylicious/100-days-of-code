import {Component, effect, ElementRef, input, linkedSignal, output, signal, viewChild} from '@angular/core';
import {YoutubePlayerState} from '../../feature/data-capture/interfaces/shared';

@Component({
  selector: 'app-youtube-player',
  imports: [],
  templateUrl: './youtube-player.html',
  styleUrl: './youtube-player.scss',
})
export class YoutubePlayer {
  private youtubePlayer = viewChild<ElementRef>('youtubePlayer')
  private lastState = signal<YoutubePlayerState>(YoutubePlayerState.UNSTARTED)
  private player: any;

  public userSelectedTime = input<number | null>(0)
  public timeSelected = output<{yt: number, system: Date}>();
  public playerStopped = output<boolean>();

  constructor() {
    effect(() => {
      const time = this.userSelectedTime();
      if(time){
        this.seekToTime(time);
      }
    });
  }

  ngAfterViewInit() {
    if((window as any).YT && (window as any).YT.Player) {
      this.initPlayer()
    } else {
      (window as any)['onYouTubeIframeAPIReady'] = () => this.initPlayer();
    }
  }

  private initPlayer() {
    this.player = new (window as any)['YT'].Player(this.youtubePlayer()?.nativeElement, {
      videoId: 'M7lc1UVf-VE',
      height: '100%',
      width: '100%',
      events: {
        'onStateChange': (event: any) => this.onPlayerStateChange(event)
      }
    });
  }

  private onPlayerStateChange(event: any) {
    // YT.PlayerState.PLAYING usually triggers after a user finishes scrubbing/selecting a time
    if (event.data === (window as any)['YT'].PlayerState.PLAYING) {
      this.playerStopped.emit(false)
      if (this.lastState() === (window as any)['YT'].PlayerState.BUFFERING || this.lastState() === (window as any)['YT'].PlayerState.PAUSED) {
        this.emitCurrentTime();
      }
    }
    if (event.data !== (window as any)['YT'].PlayerState.PLAYING) {
      this.playerStopped.emit(true)
    }
    this.lastState.set(event.data);
  }

  private emitCurrentTime() {
    if (this.player && this.player.getCurrentTime) {
      const currentTime = Math.floor(this.player.getCurrentTime());
      this.timeSelected.emit({yt: currentTime, system: new Date()});
    }
  }

  public seekToTime(seconds: number) {
    if (this.player && this.player.seekTo) {
      // 1. Jump to the time
      this.player.seekTo(seconds, true);

      // 2. Optional: Automatically start playing if it was paused
      this.player.playVideo();

      // Update your local signal so the UI stays in sync
      // this.lastTime.set(seconds);
    }
  }
}
