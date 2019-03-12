### Stack

#### X Points

Create the class `Stack` that mimics the behavior of a Stack.

A Stack is a common data structure that describes the behavior of a structure that:

- Holds multiple items
- When an item is **added** to the structure, the item is **added to the end (back) of the structure**
- Whe an item is **removed**, the **last item** (the item at the end of the structure) **is removed**
- The ordering is commonly referred to as LIFO (Last In, First Out) OR FILO (First in, Last Out)

A great way to visualize a stack is to think of an array. With an array you can push items into the array and pop items out of the array.

<hr>

Here is an overview of the `Stack` Class:

- an instance created by the stack class has the a property on the instance called `store`. The value assigned to `store` is an empty array.
- each instance of the stack class should have access to the following methods (via the prototype chain)
  - **`getStack`** - returns the `store`
  - **`add`** - accepts a value as an argument and adds the value to the `store`. It adds the value to the end (back) of the `store`
  - **`remove`** - removes the last item in the `store` and returns the `item`

```js
const firstStack = new Stack();

firstStack.getStack(); // returns: [];

firstStack.add(443);
firstStack.add('react.js');

firstStack.getStack(); // returns: [443, 'react.js'] // react.js is the last item in the stack since it was the last item added.

firstStack.remove(); // returns: 'react.js'

firstStack.getStack(); // returns: [443];
```

This is a general overview of the `Stack` Class and its behavior, there are more details about the `Stack` Class in the test specs!
