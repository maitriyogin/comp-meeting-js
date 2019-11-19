import Widget, { IWidget } from "./Widget";

export enum EStatus {
  LOADING = "LOADING",
  SUCCESS = "FAILURE",
  ERROR = "ERROR"
}
interface IGaugeWidget extends IWidget {
  value: number;
  range: {
    start: number;
    end: number;
  };
}
class GaugeWidget extends Widget {
  constructor({ value, range:{start:0, end:99}, ...widget }: IGaugeWidget) {
    super(widget);
    this.value = value;
    this.status = status;
  }
  public value: number;
  public status: EStatus;
}

export default ValueWidget;
