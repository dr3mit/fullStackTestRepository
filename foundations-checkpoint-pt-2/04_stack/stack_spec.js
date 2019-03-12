/* global Stack */
/* eslint-env jasmine */

describe('A stack class', () => {
  let stack;
  beforeEach(() => {
    // Note: Stack should be defined using Class syntax
    stack = new Stack();
  });

  it('each instance of the Stack class has a `store` property', () => {
    const keysOnStackInstance = Object.keys(stack);

    expect(keysOnStackInstance).toEqual(['store']);
  });

  it('`getStack` returns the value assigned to the `store` property', () => {
    expect(stack.getStack()).toEqual([]);
  });
  it('the add method adds an item to the `store`', () => {
    stack.add('react.js');
    expect(stack.getStack()).toEqual(['react.js']);
  });

  it('the add method adds items to the back of the `store`', () => {
    stack.add(6);
    stack.add('react.js');

    expect(stack.getStack()).toEqual([6, 'react.js']); // note: react.js is at the end of "stack"
  });

  it('the add method adds multiple items', () => {
    stack.add(55);
    stack.add('react.js');
    stack.add('vue.js');
    stack.add('angular.js');

    expect(stack.getStack()).toEqual([55, 'react.js', 'vue.js', 'angular.js']);
  });

  // Note: the spec labeled EXTRA CREDIT SPEC is extra credit. You will receive extra points for getting
  // this spec correct, if you skip the spec or choose not to complete, nothing will count against you.

  // Tip: Do not "break" the add method trying to complete this spec.
  it('EXTRA CREDIT SPEC: the `add` method supports method chaining', () => {
    stack
      .add('react.js')
      .add('vue.js')
      .add('angular.js')
      .add('backbone.js');

    expect(stack.getStack()).toEqual([
      'react.js',
      'vue.js',
      'angular.js',
      'backbone.js',
    ]);
  });

  it('the remove method removes an item from the `store` and returns the item removed', () => {
    stack.add('react.js');
    expect(stack.remove()).toBe('react.js');
    expect(stack.getStack()).toEqual([]);
  });

  it('the remove method always removes the last item (the item at the end) in the `store`', () => {
    stack.add('react.js');
    stack.add('vue.js');
    stack.add('angular.js');
    stack.add('backbone.js');

    expect(stack.remove()).toBe('backbone.js');
    expect(stack.remove()).toBe('angular.js');
    expect(stack.remove()).toBe('vue.js');
    expect(stack.getStack()).toEqual(['react.js']);
  });

  it('the remove method returns `undefined` if `remove` is called when 0 items are in the `store`', () => {
    expect(stack.remove()).toBe(undefined);
    stack.add('react.js');
    expect(stack.remove()).toBe('react.js');
    expect(stack.remove()).toBe(undefined);
  });

  it('can handle interspersed add and remove', function() {
    stack.add(1);
    expect(stack.remove()).toBe(1);
    stack.add(2);
    stack.add(3);
    expect(stack.remove()).toBe(3);
    stack.add(4);
    expect(stack.remove()).toBe(4);
    expect(stack.remove()).toBe(2);
    expect(stack.remove()).toBe(undefined);
  });
  it('has an the `add`, `remove`, and `getStack` methods defined via the prototype chain, not directly on the instance', () => {
    expect(stack.hasOwnProperty('add')).toBe(false);
    expect(stack.hasOwnProperty('remove')).toBe(false);
    expect(stack.hasOwnProperty('getStack')).toBe(false);
  });
});
