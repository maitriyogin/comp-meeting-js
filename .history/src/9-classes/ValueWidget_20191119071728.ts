import { Widget, IWidget } from "./Widget";

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
