/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('newObj function', () => {
  function LittleMouse(color) {
    this.sound = 'Squeak!';
    this.color = color;
  }

  LittleMouse.prototype.makeSound = function() {
    console.log(this.sound.toUpperCase());
  };
  it('returns an empty object', () => {
    let obj = newObj(LittleMouse);
    expect(typeof obj).toBe('object');
    expect(Object.keys(obj).length).toBe(0);
  });

  it('the internal prototype ( aka the __proto__) of the object returned from `newObj` is linked to the  LittleMouse.prototype object', () => {
    let obj = newObj(LittleMouse);
    expect(Object.getPrototypeOf(obj)).toEqual(LittleMouse.prototype);
    // Documentation for Object.getPrototypeOf(): https://mzl.la/2b3ohlm .
  });
  it('calls Object.create', () => {
    spyOn(Object, 'create').and.callThrough();

    newObj(LittleMouse);

    expect(Object.create).toHaveBeenCalled();
  });
});
