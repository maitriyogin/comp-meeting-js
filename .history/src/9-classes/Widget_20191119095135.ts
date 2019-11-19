import Utils from "./Utils";

export interface IWidget {
  id: number;
  name: string;
  _description?: string;
}
class Widget extends Utils implements IWidget {
  constructor(id: number, name: string) {
    super();
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
}
export default Widget;
