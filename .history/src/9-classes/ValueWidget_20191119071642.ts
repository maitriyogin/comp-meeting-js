interface IValueWidget extends IWidget {
  value: number;
}
export class ValueWidget extends Widget implements IValueWidget {
  constructor(props: IValueWidget) {
    super(props);
  }
}
