let dataArr = [
  8, 79, 14, 94, 33, 31, 2, 74, 46, 72, 75, 40, 5, 1, 48, 81, 99, 4, 43, 68, 90,
  23, 97, 10, 55, 11, 20, 50, 70, 83, 47, 25, 86, 30, 60, 96, 76, 22, 67, 77,
];

function isPrime(num) {
  if (num == 2 || num == 3) return true;
  if (num <= 1 || num % 2 == 0 || num % 3 == 0) return false;
  for (let i = 5; i * i <= num; i += 6)
    if (num % i == 0 || num % (i + 2) == 0) return false;
  return true;
}

function getMax(arr) {
  let sorted = arr.sort((a, b) => a - b)
  return sorted[sorted.length - 1]
}

function getMin(arr) {
  let sorted = arr.sort((a, b) => a - b)
  return sorted[0]
}

class Process {
  static toJSON(obj) {
    let jsonString = JSON.stringify(obj)
    return jsonString;
  }

  static fromJSON(jsonString) {
    let obj = JSON.parse(jsonString);
    return obj;
  }
}

function callbackFc1(arg1) {
  let parsed = Process.fromJSON(arg1);
  console.log(parsed);
}

function doubleTheElement(elem) {
  return elem * 2;
}

function callbackFc2(arg1) {
  let parsed = Process.fromJSON(arg1);
  let doubled = parsed.map(doubleTheElement);
  console.log(doubled);
}

function callbackFc3(arg) {
  let parsed = Process.fromJSON(arg);
  let result = parsed.filter((elem) => elem % 2 === 0);
  console.log(result);
}

function callbackFc4(arg) {
  console.log(arg);
  console.log(typeof arg);
}

function func1(data, callback1) {
  let str = Process.toJSON(data);
  callback1(str);
}

function func2(data, cb) {
  let str = Process.toJSON(data);
  setTimeout(() => {
    cb(str)
  }, 2000);
}

// let button = document.getElementById("button");
// button.addEventListener("click", callbackFc2)

func1(dataArr, callbackFc1);
func1(dataArr, callbackFc2);
func1(dataArr, callbackFc3);

func2(dataArr, callbackFc4)


// function doSomething(arg = "not hello") {
//   console.log(arg);
// }

// doSomething()