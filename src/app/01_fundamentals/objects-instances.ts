class Dog {
  barkMsg = 'wof wof';

  barks(): string {
    return this.barkMsg;
  }
}

const dog = new Dog();

export { Dog, dog };
