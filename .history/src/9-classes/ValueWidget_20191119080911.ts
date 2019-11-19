import { Widget, IWidget } from "./Widget";

enum EStatus {
  LOADING = "LOADING",
  SUCCESS = "FAILURE",
  ERROR = "ERROR"
}
interface IValueWidget {
  value: number;
  status: EStatus;
}
class ValueWidget extends Widget implements IValueWidget {
  constructor(props: IValueWidget) {
    super(props);
    this.value = props.value;
    this.status = props.status;
  }
  public value: number;
  public status: EStatus;
}

export default ValueWidget;
