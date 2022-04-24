import { C64Panel, IC64PanelProps } from "../C64Panel";

export interface IBaseDemoProps extends IC64PanelProps {
  targetElement: HTMLElement;
  fpsElement?: HTMLElement;
}

export class BaseDemo {
  private _panel: C64Panel;
  
  constructor(props: IBaseDemoProps) {
    this._panel = new C64Panel(props);
  }
  
  public get panel(): C64Panel { return this._panel; }

  togglePause() {
    this._panel.setPaused(!this._panel.isPaused());
  }
}