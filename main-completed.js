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
    return JSON.stringify(obj);
  }
  static fromJSON(jsonString) {
    return JSON.parse(jsonString);
  }
}

function callbackNr1(jsonString) {
  let parsedObj = Process.fromJSON(jsonString)
  console.log(parsedObj);
}

function callbackNr2(jsonString) {
  let parsedObj = Process.fromJSON(jsonString);
  let doubled = [];
  doubled = parsedObj.map((elem) => elem * 2);
  console.log(doubled);
}

function callbackNr3(jsonString) {
  let parsedObj = Process.fromJSON(jsonString);
  let result = parsedObj.filter((elem) => elem % 2 === 0);
  console.log(result);
}

function func1(data, callback1) {
  let jsonString = Process.toJSON(data);
  callback1(jsonString);
}

function func2(data, cb) {
  let jsonString = Process.toJSON(data);
  setTimeout(() => {
    cb(jsonString)
  }, 2000);
}

func1(dataArr, callbackNr1);
func1(dataArr, callbackNr2);
func1(dataArr, callbackNr3);

func2(dataArr, callbackNr1);