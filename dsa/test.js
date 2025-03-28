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