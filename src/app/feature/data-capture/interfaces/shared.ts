export type CssClass = "success" | "warning" | "info" | "dark" | "light"

export interface AlertProp {
  cssClass?: CssClass;
  duration?: number;
  position?: 'top' | 'bottom'
  message: string;
  type?: 'commentary'
}

export enum YoutubePlayerState {
  UNSTARTED = -1,
  ENDED = 0,
  PLAYING = 1,
  PAUSED = 2,
  BUFFERING = 3,
  CUED = 5
}
export interface ViewState {
  isOpen: boolean;
  isShowHeatMap: boolean;
  commentaryOn: boolean;
  isShowTable: boolean;
  showSelectBoxes: boolean;
  isPlayerPaused: boolean;
}
