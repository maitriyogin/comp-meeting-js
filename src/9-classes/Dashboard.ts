import Widget, { IWidget } from "./Widget";
import Utils from "./Utils";

interface IDashboard {
  name: string;
  widgets: IWidget[];
}

class Dashboard extends Utils {
  constructor({ widgets, name }: IDashboard) {
    super();
    this.widgets = widgets;
    this.name = name;
  }
  public widgets: IWidget[];
  public name: string;
}

export default Dashboard;
