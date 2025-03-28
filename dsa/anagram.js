var isAnagram = function(s, t) {
    // if (s.length !== t.length) return false
    let map1 = new Map();
    let map2 = new Map();

    // by for of method
    // for (let item of s ) {
    //     if (map1.has(item)) map1.set(item, map1.get(item) + 1);
    //     else map1.set(item, 1);
    // }
    // console.log(map1)

    // by foreach
    Array.from(s).forEach(char => {
        if (map1.has(char)) {
            map1.set(char, map1.get(char) + 1);
        } else {
            map1.set(char, 1);
        }
    })
    console.log(map1)
    map1.forEach( (val, idx) => map2.set(val, idx))
    console.log(map2)
    
   

  //return true
};

console.log (isAnagram("hello","heoll"))