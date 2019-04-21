import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    red: string,
    light_gray: string,
    ui_text: string,
    ui_icon: string,
    panel_border: string,
    br: string,
    box_shadow: string,
    transition_in: string,
    transition_out: string,
  }
}
