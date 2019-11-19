import Widget from "./Widget";
import Utils from "./Utils";

interface IDashboard {
  name: string;
  widgets: Widget[];
}
class Dashboard extends Utils {
  constructor({ widgets, name }: IDashboard) {
    super();
    this.widgets = widgets;
    this.name = name;
  }
  public widgets: Widget[];
  public name: string;
}

export default Dashboard;
