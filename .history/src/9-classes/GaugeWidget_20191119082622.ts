import Widget, { IWidget } from "./Widget";

export enum EStatus {
  LOADING = "LOADING",
  SUCCESS = "FAILURE",
  ERROR = "ERROR"
}
interface IValueWidget extends IWidget {
  value: number;
  range: {
    start: number;
    end: number;
  };
}
class ValueWidget extends Widget {
  constructor({ value, status = EStatus.LOADING, ...widget }: IValueWidget) {
    super(widget);
    this.value = value;
    this.status = status;
  }
  public value: number;
  public status: EStatus;
}

export default ValueWidget;
