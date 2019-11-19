import { Widget, IWidget } from "./Widget";

enum EStatus {
  LOADING = "LOADING",
  SUCCESS = "FAILURE",
  ERROR = "ERROR"
}
interface IValueWidget extends IWidget {
  value: number;
  status: EStatus;
}
export class ValueWidget extends Widget implements IValueWidget {
  constructor({ value, status, ...widget }: IValueWidget) {
    super(widget);
    this.value = value;
    this.status = status;
  }
  public value: number;
  public status: EStatus;
}

export default ValueWidget;
