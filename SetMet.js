const a = new Set(['a','b','c']);
const b = new Set(['b','e','d']);

console.log(a.union(b));

console.log(a.intersection(b));

console.log(a.difference(b));

console.log(a.isDisjointFrom(b));

console.log(a.isSubsetOf(b));

console.log(a.isSupersetOf(b));

console.log(a.symmetricDifference(b));