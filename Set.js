const letters=new Set(["a","b","c"]);
console.log(letters);

letters.add("d");
letters.add("e");
console.log(letters);

// console.log(typeOf(letters));

letters.delete("d");
console.log(letters);

const myIterator = letters.entries();

let text = "";
for (const entry of myIterator) {
  text += entry;
}
console.log(text);

console.log(letters.keys());
console.log(letters.values());

console.log(letters.has("e"));

console.log(letters);
console.log(letters.size);

letters.clear();

console.log(letters);