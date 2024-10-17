## Important Object Methods
- `Object.keys():` Returns an array of a given object's property names.

- `Object.values():` Returns an array of a given object's property values.

- `Object.entries(): `Returns an array of a given object's own enumerable property [key, value] pairs.

- `Object.assign(): `Copies the values of all enumerable own properties from one or more source objects to a target object.

- `Object.freeze():` Freezes an object, preventing new properties from being added and existing properties from being removed or changed.

- `Object.seal():` Prevents new properties from being added to an object, but allows modification of existing properties.

Handling Nested Objects and Arrays
Now, let's see how to access and manipulate elements within nested objects and arrays.

### Example with Nested Objects and Arrays
```javascript
const data = {
  person: {
    name: "Alice",
    age: 30,
    address: {
      city: "Wonderland",
      zip: "12345"
    },
    scores: [100, 95, 90]
  }
};

// Accessing nested properties
console.log(data.person.name); // Alice
console.log(data.person.address.city); // Wonderland
console.log(data.person.scores[1]); // 95
```
### Iterating Over Object Properties & Using Object.keys() and forEach():

```javascript
const person = {
  name: "Bob",
  age: 25,
  job: "Developer"
};

Object.keys(person).forEach(key => {
  console.log(`${key}: ${person[key]}`);
});
// name: Bob, age: 25, job: Developer
```
### Using Object.entries() & Transforming object properties into an array:

```javascript
const person = {
  name: "Bob",
  age: 25,
  job: "Developer"
};

Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
// name: Bob, age: 25, job: Developer
```
### Merging Objects & Using Object.assign():
```javascript
const person = {
  name: "Bob",
  age: 25
};
const jobDetails = {
  job: "Developer",
  company: "Tech Co."
};

const merged = Object.assign({}, person, jobDetails);
console.log(merged);
// { name: 'Bob', age: 25, job: 'Developer', company: 'Tech Co.' }
```
### Freezing Objects & Preventing modifications:
```javascript
const person = {
  name: "Bob",
  age: 25
};

Object.freeze(person);
person.age = 30; // This will not change the age property
console.log(person.age); ```