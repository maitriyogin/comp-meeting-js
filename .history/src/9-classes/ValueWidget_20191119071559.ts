interface IValueWidget extends IWidget {
  value: number;
}
export class ValueWidget extends Widget {
  constructor(props) {
    super(props);
  }
}
