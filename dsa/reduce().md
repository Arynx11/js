## Sum of an Array
```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15
```
### Flatten an Array & Flatten nested arrays.
```javascript
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flatArray = nestedArray.reduce((acc, curr) => acc.concat(curr), []);
console.log(flatArray); // [1, 2, 3, 4, 5, 6]
```
### Count Occurrences & Track how many times each word appears.
```javascript
const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
const wordCount = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});
console.log(wordCount); // { apple: 3, banana: 2, orange: 1 }
```
### Grouping Objects & Group objects by a property.
```javascript
const people = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 23 },
  { name: "Alice", age: 25 },
];
const groupedByName = people.reduce((acc, person) => {
  const { name } = person;
  acc[name] = acc[name] || [];
  acc[name].push(person);
  return acc;
}, {});
console.log(groupedByName);
// { Alice: [{ name: 'Alice', age: 21 }, { name: 'Alice', age: 25 }], Bob: [{ name: 'Bob', age: 23 }] }

```

### Transform into Objects & Convert an array of pairs into an object.
```javascript
const pairs = [['name', 'Alice'], ['age', 25], ['job', 'developer']];
const obj = pairs.reduce((acc, [key, value]) => {
  acc[key] = value;
  return acc;
}, {});
console.log(obj); // { name: 'Alice', age: 25, job: 'developer' }
```
### Compose Functions & Chain multiple functions together.
```javascript
const add = x => x + 1;
const multiply = x => x * 2;
const compose = (...funcs) => x => funcs.reduce((acc, func) => func(acc), x);
const addAndMultiply = compose(add, multiply);
console.log(addAndMultiply(5)); // 12
```
### Remove Duplicates & Remove duplicate elements from an array.
```javascript
const numbers = [1, 2, 3, 4, 4, 5, 5, 6];
const uniqueNumbers = numbers.reduce((acc, num) => {
  if (!acc.includes(num)) {
    acc.push(num);
  }
  return acc;
}, []);
console.log(uniqueNumbers); // [1, 2, 3, 4, 5, 6]
```

### Absolutely, reduce() is a powerhouse. Here’s a mix of practical and creative examples:
