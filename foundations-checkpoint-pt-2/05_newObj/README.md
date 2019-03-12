### The newObj Function

#### 4 Points

Create the function "newObj" that takes a constructor function as an argument and returns an empty object that has an internal prototype linked to the constructor functions `.prototype` object.

<hr>

The object returned should have the following characteristics:

- the object is empty (it doesn't have any key/value pairs)
- the object's internal prototype is linked to the constructor functions `.prototype` object. The "constructor function" is the argument passed to `newObj`
- Note: The goal is to create a relationship where the new object created from `newObj` has a specific internal prototype, not the default internal prototype for an object.

**Note: Do NOT use .\_\_proto\_\_ in your solution**

```
// Hello is a constructor function
function Hello() {
  this.hello = "hello";
}

Hello.prototype.sayHello = function() {
  return 'Hello!'
};

// the argument passed to newObj is the Hello constructor function
let obj = newObj(Hello);

// obj === {}; // the object returned from newObj is an empty object

// Object.getPrototypeOf(obj) === Hello.prototype
// Note: the .getPrototypeOf method returns the internal prototype of an object.

*/

```
