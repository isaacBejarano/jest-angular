/* A */

const myMock = jest.fn();

const a = new myMock(); // instance 1
const b = {};
const bound = myMock.bind(b); // instance 2
bound();

xdescribe('JEST mocks instances', () => {
  it('Mocking Instances --> mock.instances', () => {
    console.log(myMock.mock.instances);

    // This function was instantiated exactly twice
    expect(myMock.mock.instances.length).toBe(2);
  });
});

/* B */

import { Bird } from './classes';

jest.mock('./classes');
// jest.mock() to mock CLASSES
// That's why we don't assign the import to a const

let magpie: Bird, crow: Bird;

beforeAll(() => {
  magpie = new Bird();
  crow = new Bird();

  // actions
  magpie.setName = 'Magie';
  crow.setName = 'Fiddle';
});

// We use beforaAll() => to not instantiate infinitely (toHaveBeenCalledTimes(infinite))

xdescribe('JEST mocks classes', () => {
  it('number of instances', () => {
    expect(Bird).toHaveBeenCalled();
    expect(Bird).toHaveBeenCalledTimes(2);

    console.log(crow);
    console.log(magpie);
  });

  it('methods are called', () => {
    expect(magpie.setName).toEqual('Magie');
  });
});
