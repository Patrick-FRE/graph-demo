interface EdgeData {
  foreignKeyRefs: [
    {
      id: number;
      name: string;
      from: string;
      to: string;
    }
  ];
}

export default class Edge {
  constructor(
    public data: EdgeData,
    public label: string,
    public source: number,
    public target: number,
    public id: string
  ) {}
}
