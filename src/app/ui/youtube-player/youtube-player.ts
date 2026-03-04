import {Component, computed, effect, ElementRef, input, linkedSignal, output, signal, viewChild} from '@angular/core';
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
  public videoId = input<string>('')
  public timeSelected = output<{yt: number, system: Date}>();
  public playerStopped = output<boolean>();
  private videoIdComp = linkedSignal({
    source: this.videoId,
    computation: () => {
      return this.getVideoId(this.videoId()) ?? 'M7lc1UVf-VE'
    }
  })
  // private videoIdComp = computed(() => this.videoId() ?? 'M7lc1UVf-VE')
  constructor() {
    effect(() => {
      const time = this.userSelectedTime();
      if(time){
        this.seekToTime(time);
      }
    });

    effect(() => {
      if(this.videoId()){
        this.player.cueVideoById(this.videoIdComp());
      }
    })
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
      videoId: this.videoIdComp(),
      height: '100%',
      width: '100%',
      events: {
        'onStateChange': (event: any) => this.onPlayerStateChange(event),
        'onReady': (event: any) => {
          // this.playerStopped.emit(true)
        },
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
    console.log("Not player stopped for player", event.data)
    if (event.data !== (window as any)['YT'].PlayerState.PLAYING) {
      console.log("player stopped for player", event.data)
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

  getVideoId(url: string): string | null {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }
}
