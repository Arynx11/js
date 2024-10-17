**Array change karne se pehle track karo with temp variable**



### Hash Maps and Hash Sets serve different purposes:

- Hash Map:
    - Stores key-value pairs.

    - Allows you to associate values with keys.

    - Example: {a: 1, b: 2, c: 3}

    - Useful when you need to access, add, or check values by a specific key.
        

- Hash Set:

    - Stores unique values.

    - Does not allow duplicate entries.

    - Example: {1, 2, 3}

    - Useful when you need to keep track of items without duplicates.

- For Tracking Occurrences:

  - Best to use a Hash Map, because you can keep a count of how many times each item appears.

- For Checking Anagrams:

  - Use a Hash Map to count the frequency of each character in both strings and then compare the maps. If they match, the strings are anagrams.


## Conversion of String to diff type.
### Details
String methods do indeed work by temporarily converting the primitive string into a String object to perform operations, then back into a primitive string. Here are some must-know string methods:
### string to array by default
- `split()` breaks a string into an array of substrings based on a specified separator.

- `join()` merges all elements of an array into a string.
### extract using string only
- `slice()` extracts a section of a string and returns it as a new string.

- `replace()` replaces occurrences of a substring with a new substring.

- `includes()`checks if a string contains a specific substring.


## convert (SINGLE WORD) to Diff Form
BEST TO USE FOREACH METHOD TO ACCESS KEY, VALUE OR ITERATE
``` javascript
array.forEach(function(value, index, array) {
  // your code here
});
```
But if you need both the key (index) and value (character), you'd do:
```javascript 
const str = "word";
[...str].forEach(function(value, index) {
  console.log(`Index: ${index}, Value: ${value}`);
});
```
For a single word, the best loop method depends on your needs:
- Use `for of` for simplicity when you need only the values.
    ```javascript 
    const str = "word";
    const array = [];
    for (const char of str) {
    array.push(char);
    }
    console.log(array); // ['w', 'o', 'r', 'd']`
    ```
- Use `for in` if you need to iterate through indices but don't mind extra object syntax.
    ```javascript 
    const str = "word";
    const obj = {};
    for (const index in str) {
    obj[index] = str[index];
    }
    console.log(obj); // { '0': 'w', '1': 'o', '2': 'r', '3': 'd' }
    ```
- Use `.forEach()` if you're working with an array of characters and need to access both index and value.
    ```javascript
    const str = "word";
    const map = new Map();
    [...str].forEach((char, index) => {
    map.set(index, char);
    });
    console.log(map); // Map { 0 => 'w', 1 => 'o', 2 => 'r', 3 => 'd' }
    ```



## convert (Sentence) to diff, Tracking Word
`split():` Breaks a sentence into words.

`join():` Joins elements back into a sentence.

`slice():` Extracts a section of a string.

### Iterate of word
- For of Loop
    ```javascript
    const sentence = "this is a sentence";
    const wordsArray = [];
    for (const word of sentence.split(" ")) {
    wordsArray.push(word);
    }
    console.log(wordsArray); // ['this', 'is', 'a', 'sentence']
    ```
- For in Loop
    ```javascript
    const sentence = "this is a sentence";
    const words = sentence.split(" ");
    const wordObj = {};
    for (const index in words) {
    wordObj[index] = words[index];
    }
    console.log(wordObj); // { '0': 'this', '1': 'is', '2': 'a', '3': 'sentence' }
    ```
- For Each Loop
    ```javascript
    const sentence = "this is a sentence";
    const wordMap = new Map();
    sentence.split(" ").forEach((word, index) => {
    wordMap.set(index, word);
    });
    console.log(wordMap); // Map { 0 => 'this', 1 => 'is', 2 => 'a', 3 => 'sentence' }
    ```
## Tracking Word Occurance
```javascript
const sentence = "this is a sentence and this is a test sentence";
const wordCount = new Map();
sentence.split(" ").forEach(word => {
  const count = wordCount.get(word) || 0;
  wordCount.set(word, count + 1);
});
console.log(wordCount); // Map { 'this' => 2, 'is' => 2, 'a' => 2, 'sentence' => 2, 'and' => 1, 'test' => 1 }
```

## convert (Sentence) to diff, Tracking Character
### For Of Loop Example
   - words -> char to track object is used
```javascript
const sentence = "this is a sentence";
const charMap = {};
for (const word of sentence.split(" ")) {
  const charArray = [];
  for (const char of word) {
    charArray.push(char);
  }
  charMap[word] = charArray;
}
console.log(charMap); 
// { 'this': ['t', 'h', 'i', 's'], 'is': ['i', 's'], 'a': ['a'], 'sentence': ['s', 'e', 'n', 't', 'e', 'n', 'c', 'e'] }
```
### For In Loop Example
```javascript
const sentence = "this is a sentence";
const words = sentence.split(" ");
const charObj = {};
for (const index in words) {
  const word = words[index];
  charObj[word] = {};
  for (const i in word) {
    charObj[word][i] = word[i];
  }
}
console.log(charObj); 
// { 'this': { '0': 't', '1': 'h', '2': 'i', '3': 's' }, 'is': { '0': 'i', '1': 's' }, 'a': { '0': 'a' }, 'sentence': { '0': 's', '1': 'e', '2': 'n', '3': 't', '4': 'e', '5': 'n', '6': 'c', '7': 'e' } }
```
### ForEach
```javascript
const sentence = "this is a sentence";
const charMapForEach = new Map();
sentence.split(" ").forEach(word => {
  const charMapInner = new Map();
  [...word].forEach((char, index) => {
    charMapInner.set(index, char);
  });
  charMapForEach.set(word, charMapInner);
});
console.log(charMapForEach); 
// Map { 'this' => Map { 0 => 't', 1 => 'h', 2 => 'i', 3 => 's' }, 'is' => Map { 0 => 'i', 1 => 's' }, 'a' => Map { 0 => 'a' }, 'sentence' => Map { 0 => 's', 1 => 'e', 2 => 'n', 3 => 't', 4 => 'e', 5 => 'n', 6 => 'c', 7 => 'e' } }
```


## Array 
### Important Array Methods

`split():` Not an array method, but splits a string into an array.

`flat():` Flattens a nested array.

`Array.from():` Creates a new array from an array-like or iterable object.

`Array.of(val1, val2, val3)`

### Handling Nested Arrays
- Accessing elements in nested arrays can be managed using loops or methods like
  - `map`, `forEach`, and `reduce.`
  
- Always works like Bottom to Top
  - meaning `subarray` -> `element`

### Flattening a nested array:

```javascript
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flatArray = nestedArray.flat(Infinity);
console.log(flatArray); // [1, 2, 3, 4, 5, 6]
```

### Iterating with Nested Loops with can be apply soln

```javascript
const nestedArray = [[1, 2], [3, 4], [5, 6]];
nestedArray.forEach(subArray => {
  subArray.forEach(element => {
    console.log(element); // Logs each element in nested arrays
  });
});
```

### Using map()
Transforming elements within nested arrays:
```javascript
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const multipliedArray = nestedArray.map(subArray => 
  subArray.map(element => element * 2)
);
console.log(multipliedArray); // [[2, 4], [6, 8], [10, 12]]
```

## Hash Maps and Hash table diff


- In JavaScript, Maps (also known as HashMaps) and Objects are often compared to HashTables, but there are key differences:


### Map: An ordered collection of key-value pairs. Keys and values can be any data type. Preserves the insertion order of keys. Efficient in operations.
```javascript
const map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
console.log(map.get('key1')); // 'value1'
```
### Object: Unordered collection of key-value pairs. Keys are usually strings, but can be Symbols. Suitable for JSON and basic data storage.
```javascript
const obj = {
  key1: 'value1',
  key2: 'value2'
};
console.log(obj.key1); 
```