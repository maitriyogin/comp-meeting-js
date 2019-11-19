import Widget, { IWidget } from "./Widget";

export interface IRange {
  start: number;
  end: number;
}

export interface IGaugeWidget extends IWidget {
  value: number;
  range: IRange;
}
class GaugeWidget extends Widget {
  constructor({
    value,
    range = { start: 0, end: 99 },
    ...widget
  }: IGaugeWidget) {
    super(widget);
    this.value = value;
    this.range = range;
  }
  public value: number;
  public range: IRange;
}

export default GaugeWidget;
