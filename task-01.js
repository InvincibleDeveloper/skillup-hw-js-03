let arrOfNumbers = [1, 2, 3, 5, 8, 9, 10];
console.log(arrOfNumbers);

//  Создаем функцию для определения четности
const isOdd = (x) => x % 2 !== 0;

// Эта функция формирует новый масив с деталями о четности чисел массива
function showNumDetails(arr) {
  let resultArr = [];

  arr.forEach((x) => {
    resultArr.push({ digit: x, odd: isOdd(x) });
  });

  return resultArr;
}

console.log(showNumDetails(arrOfNumbers));
