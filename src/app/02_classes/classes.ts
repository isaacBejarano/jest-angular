class Bird {
  private name = '';

  constructor() {}

  // access/mutate

  set setName(name: string) {
    this.name = name;
  }

  get getName(): string {
    return this.name;
  }
}

export { Bird };
