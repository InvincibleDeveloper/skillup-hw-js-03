let arr = [
  {
    char: "a",
    index: 12,
  },
  {
    char: "w",
    index: 8,
  },
  {
    char: "Y",
    index: 10,
  },
  {
    char: "p",
    index: 3,
  },
  {
    char: "p",
    index: 2,
  },
  {
    char: "N",
    index: 6,
  },
  {
    char: " ",
    index: 5,
  },
  {
    char: "y",
    index: 4,
  },
  {
    char: "r",
    index: 13,
  },
  {
    char: "H",
    index: 0,
  },
  {
    char: "e",
    index: 11,
  },
  {
    char: "a",
    index: 1,
  },
  {
    char: " ",
    index: 9,
  },
  {
    char: "!",
    index: 14,
  },
  {
    char: "e",
    index: 7,
  },
];

// Вернуть строку с отсортированными по индексу символами
// (эта функция и есть решение 4 задачи)
function getText(arr) {
  arr.sort((a, b) => {
    if (a.index > b.index) {
      return 1;
    } else if (a.index < b.index) {
      return -1;
    } else {
      return 0;
    }
  });

  let newArr = arr.map((element) => {
    return element.char;
  });

  return newArr.join("");
}

console.info(getText(arr));
