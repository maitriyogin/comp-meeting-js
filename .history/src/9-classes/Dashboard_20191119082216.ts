import Widget from "./Widget";

interface IDashboard {
  name: string;
  widgets: Widget[];
}
class Dashboard {
  constructor({ widgets, name }: IDashboard) {}
}
