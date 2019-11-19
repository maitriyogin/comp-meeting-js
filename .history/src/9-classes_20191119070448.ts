interface IWidget {
  id: number;
  name: string;
  _description?: string;
}
class Widget implements IWidget {
  constructor({ id, name }: IWidget) {
    this.id = id;
    this.name = name;
  }
  public id: number;
  public name: string;
}
