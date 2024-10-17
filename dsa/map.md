## Important Map Methods
- `set(key, value):` Adds or updates an element.

- `get(key):` Retrieves the value associated with the key.

- `has(key): `Checks if a key exists.

- `delete(key):` Removes an element by key.

- `clear():` Removes all elements.

- `size:` Returns the number of elements.

- `forEach(callback):` Iterates over each key-value pair.

### Comparing Two Maps
To check if two maps are equal, you need to compare their size and then iterate over their entries to see if every key-value pair matches.
```javascript
function areMapsEqual(map1, map2) {
  if (map1.size !== map2.size) return false;

  for (let [key, value] of map1) {
    if (!map2.has(key) || map2.get(key) !== value) return false;
  }
  return true;
}

const map1 = new Map([['a', 1], ['b', 2]]);
const map2 = new Map([['a', 1], ['b', 2]]);
console.log(areMapsEqual(map1, map2)); // true
```
### Mapping Values to an Array
To convert the values of a Map into an array, you can use the Array.from() method or the spread operator.
<br> Same for map.keys()
```javascript
const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
const valuesArray = Array.from(map.values());
console.log(valuesArray); // [1, 2, 3]
Using the spread operator:

javascript

Copy
const valuesArray = [...map.values()];
console.log(valuesArray); // [1, 2, 3]
```

### Example Putting It All Together & Comparing two maps and converting their values to arrays:

```javascript
const map1 = new Map([['a', 1], ['b', 2]]);
const map2 = new Map([['a', 1], ['b', 2]]);

function areMapsEqual(map1, map2) {
  if (map1.size !== map2.size) return false;

  for (let [key, value] of map1) {
    if (!map2.has(key) || map2.get(key) !== value) return false;
  }
  return true;
}

console.log(areMapsEqual(map1, map2)); // true

const valuesArray = [...map1.values()];
console.log(valuesArray); // [1, 2]
```













## Handling Nested Maps
You can nest maps, arrays, and objects inside each other and still access and manipulate them efficiently.

### Example of Nested Maps and Arrays
```javascript
const map = new Map();
map.set('first', [new Map([['a', 1], ['b', 2]]), new Map([['c', 3], ['d', 4]])]);
map.set('second', [new Map([['e', 5], ['f', 6]]), new Map([['g', 7], ['h', 8]])]);

// Accessing nested elements
map.forEach((array, key) => {
  console.log(`Key: ${key}`);
  array.forEach(nestedMap => {
    nestedMap.forEach((value, nestedKey) => {
      console.log(`Nested Key: ${nestedKey}, Value: ${value}`);
    });
  });
});
```
### Updating Nested Values & To update values within a nested structure:
```javascript
const map = new Map();
map.set('first', [new Map([['a', 1], ['b', 2]]), new Map([['c', 3], ['d', 4]])]);

// Update value
const nestedArray = map.get('first');
nestedArray[0].set('a', 10);

console.log(map.get('first')[0].get('a')); // 10
```
### Adding New Nested Elements & Adding new elements within nested structures:
```javascript
const map = new Map();
map.set('first', [new Map([['a', 1], ['b', 2]])]);

// Add new element
const nestedArray = map.get('first');
nestedArray.push(new Map([['e', 5]]));

console.log(map.get('first')[1].get('e')); // 5
```
### Deleting Nested Elements & Removing elements within nested structures:
```javascript
const map = new Map();
map.set('first', [new Map([['a', 1], ['b', 2]]), new Map([['c', 3], ['d', 4]])]);

// Delete nested element
const nestedArray = map.get('first');
nestedArray[1].delete('c');

console.log(nestedArray[1].has('c')); // false
```
These methods provide a strong foundation for handling and manipulating nested maps and arrays in JavaScript. Anything else you’re curious about?



