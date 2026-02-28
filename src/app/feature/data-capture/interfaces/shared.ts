export type CssClass = "success" | "warning" | "info"

export interface AlertProp {
  cssClass?: CssClass;
  duration?: number;
  message: string
}

export enum YoutubePlayerState {
  UNSTARTED = -1,
  ENDED = 0,
  PLAYING = 1,
  PAUSED = 2,
  BUFFERING = 3,
  CUED = 5
}
