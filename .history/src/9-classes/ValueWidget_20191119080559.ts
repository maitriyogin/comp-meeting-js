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
    super(props);
    this.value = props.value;
  }
  public value: number;
}
