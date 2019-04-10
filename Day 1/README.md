## Stretch

### Pick

Write a `function` called **pick**. This `function` should be able to retrieve `keys` from the `object` it is attached to. If there is no `value` for that `key`, then return `null`.

```javascript 1.8
const partyPeople = {
  homer: 'simpson',
  bart: 'simpson',
};

partyPeople.pick = pick;

const pickedValue = partyPeople.pick('homer');

console.log(pickedValue); // => 'simpson'

const pickNonValue = partyPeople.pick('marge');

console.log(pickNonValue); // => null
```

### Solutions

```javascript 1.8
// Benson Leong
function pick(key) {
  if (this.hasOwnProperty(key)) {
    return this[key];
  }
  return null;
}

// ****************************

// Roy Rodriguez
const pick = str => {
  if (str in this) return this.str;

  return null;
};

// ****************************

// mark bae

Object.prototype.pick = function(key) {
  if (this[key]) {
    return this[key];
  }
  return null;
};

// ****************************

//Regina Kang

function pick(key) {
  if (!this.hasOwnProperty(key)) {
    return null;
  } else {
    return this.key;
  }
}

// ****************************

// Ashton Schneider

function pick(val) {
  return this[key];
}

// ****************************

//dylan levene

function pick(key) {
  return this.hasOwnProperty(key) ? this[key] : null;
}

// ****************************

// Kevin Yu

function pick(name) {
  return partyPeople[name];
}

// ****************************

//drew mitchell
function pick(name) {
  let retStr;
  for (let key in this) {
    if (key === name) {
      retStr = this[key];
    }
  }
  return retStr;
}

// ****************************

// Naimun Siraj
function pick(keyVal) {
  if (this[keyVal]) {
    return this[keyVal];
  } else {
    return null;
  }
}

// ****************************

// Ryan Jasinski
function pick(key) {
  if (this.key) {
    return this['key'];
  } else {
    return null;
  }
}

// ****************************

// Sonal

function pick(obj) {
  for (let key in this) {
    return function() {
      if (key === undefined) {
        return null;
      } else {
        return key;
      }
    };
  }
}

// ****************************

// palak tyagi
function(keyValue) {
  if (this[keyValue]) {
    return this[keyValue];
  }
  else {
    return null;
  }
}
```
