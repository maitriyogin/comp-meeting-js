interface IWidget {
  id: number;
  name: string;
  description?: string;
}
class Widget implements IWidget {
  constructor({ id, name });
}
