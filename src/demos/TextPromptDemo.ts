import { Color } from "../Color";
import { ITextLayerProps, TextLayer } from "../TextLayer";
import { BaseDemo, IBaseDemoProps } from "./BaseDemo";

export class TextPromptDemo extends BaseDemo {
  private textLayer: TextLayer;
  
  constructor(props: IBaseDemoProps) {
    super(props);
    this.panel.render();

    this.textLayer = this.panel.createLayer<TextLayer, ITextLayerProps>("TextLayer");

    this.textLayer.prompt("Input: ", 0, 1, Color.LIGHTBLUE, 10, this.promptCallback.bind(this));
  }

  public promptCallback(value: string) {
    console.log("rcvd:" + value);
    this.textLayer.clearLength(0, 5, 40);
    this.textLayer.writeText("Last Input:", 0, 5, Color.LIGHTBLUE);
    this.textLayer.writeText(value, 13, 5, Color.WHITE);
    
    this.textLayer.prompt("Input: ", 0, 1, Color.LIGHTBLUE, 10, this.promptCallback.bind(this));
  }
}
