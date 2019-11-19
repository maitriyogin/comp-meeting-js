interface IWidget {
  id: number;
  name: string;
  _description?: string;
}
export class Widget implements IWidget {
  constructor({ id, name }: IWidget) {
    this.id = id;
    this.name = name;
  }
  public id: number;
  public name: string;
  public _description: string;

  set description(description: string) {
    this._description = description;
  }

  get description() {
    return this._description;
  }

  public toJSONString() {
    return JSON.stringify(this);
  }
}
