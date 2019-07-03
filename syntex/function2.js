console.log(Math.round(1.6)); // 2
console.log(Math.round(1.4)); // 1

function sum(first, second) {
  // parameter
  console.log("a");
  return first + second; // 리턴을 만나면 함수는 종료 됨 어떤 값을 출력한다는 의미와 함수를 종료한다는 의미를 가지고 있음
  console.log("b");
}

console.log(sum(2, 4)); // argument 2 는 first, 4 는 second
