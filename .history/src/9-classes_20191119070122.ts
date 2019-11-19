interface IWidget {
  id: number;
  name: string;
  description?: string;
}
class Widget implements IWidget {
  constructor({ id, name }) {
    this.id = id;
    this.name = name;
  }
  private id: number;
  private name: string;

  get id() {
    return this.id;
  }

  set id(id) {
    this.id = id;
  }
}
