import { Widget, IWidget } from "./Widget";

enum EStatus {
  LOADING = "LOADING",
  SUCCESS = "FAILURE",
  ERROR = "ERROR"
}
interface IValueWidget extends IWidget {
  value: number;
}
export class ValueWidget extends Widget implements IValueWidget {
  constructor(props: IValueWidget) {
    super(props);
    this.value = props.value;
  }
  public value: number;
}
