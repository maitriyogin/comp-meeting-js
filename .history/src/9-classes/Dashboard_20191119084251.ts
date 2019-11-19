import Widget from "./Widget";

interface IDashboard {
  name: string;
  widgets: Widget[];
}
class Dashboard extends Utils {
  constructor({ widgets, name }: IDashboard) {
    this.widgets = widgets;
    this.name = name;
  }
  public widgets: Widget[];
  public name: string;
}

export default Dashboard;
