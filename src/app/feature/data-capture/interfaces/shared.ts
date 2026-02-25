export type CssClass = "success" | "warning" | "info"

export interface AlertProp {
  cssClass?: CssClass;
  duration?: number;
  message: string
}
