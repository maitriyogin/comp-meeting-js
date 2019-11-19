interface IWidget {
  _id: number;
  _name: string;
  _description?: string;
}
class Widget implements IWidget {
  constructor({ id, name }) {
    this._id = id;
    this._name = name;
  }
  private _id: number;
  private _name: string;
}
