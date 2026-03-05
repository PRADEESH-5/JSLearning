const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits);

fruits.set("mangos",100);
console.log(fruits);

console.log(fruits.get("apples"));

console.log(fruits.size);

fruits.delete("bananas");
console.log(fruits);

console.log(fruits.has("kiwi"));
console.log(fruits.keys());
console.log(fruits.values());

console.log(fruits);

fruits.clear();
console.log(fruits);