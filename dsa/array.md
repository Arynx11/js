## Important Array Methods
- `map():` Creates a new array with the results of calling a provided function on every element.

- `filter():` Creates a new array with all elements that pass the test implemented by the provided function.

- `reduce():` Executes a reducer function on each element, resulting in a single output value.

- `find():` Returns the value of the first element that satisfies the provided testing function.

- `some():` Tests whether at least one element in the array passes the test implemented by the provided function.

## Handling Nested Arrays and Objects


  ### Example with Nested Arrays and Objects
```javascript
const data = [
  { name: "Alice", scores: [85, 92, 78] },
  { name: "Bob", scores: [79, 95, 88] },
  { name: "Charlie", scores: [90, 85, 93] }
];

// Accessing elements
data.forEach(person => {
  console.log(`${person.name}: ${person.scores}`);
  person.scores.forEach(score => {
    console.log(score);
  });
});
```
### Using map(); Transforming nested arrays or objects.
```javascript
const updatedData = data.map(person => ({
  ...person,
  averageScore: person.scores.reduce((sum, score) => sum + score, 0) / person.scores.length
}));
console.log(updatedData);
```
### Using filter(); Filtering based on nested properties.

```javascript
const highScorers = data.filter(person => 
  person.scores.some(score => score > 90)
);
console.log(highScorers);
```
### Using reduce() for Nested Structures
Combining nested objects and arrays.
```javascript
const totalScores = data.reduce((acc, person) => {
  person.scores.forEach(score => {
    acc.push(score);
  });
  return acc;
}, []);
console.log(totalScores); // [85, 92, 78, 79, 95, 88, 90, 85, 93]
```
### Accessing Nested Properties
```javascript
const findPerson = data.find(person => person.name === "Alice");
console.log(findPerson.scores); // [85, 92, 78]
```
### Using some() to Test Nested Values
```javascript
const hasHighScores = data.some(person => 
  person.scores.every(score => score > 80)
);
console.log(hasHighScores); 
```