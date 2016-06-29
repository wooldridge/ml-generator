function* idMaker(){
  var index = 0;
  while(index <= 2)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value);

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

// var gen = gen();

// console.log(JSON.stringify(gen, null, 2));

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
