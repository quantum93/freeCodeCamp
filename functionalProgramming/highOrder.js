const squareList = (arr) => {
  const integer = arr.filter(number => number%parseInt(number) === 0);
  const power = integer.map(integer => integer*integer);
  return power;
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

/** 위와 같이 해도 잘 작동한다. 하지만 조금더 깔끔하게 작성하는 아래의 방법을 작 숙지할 것 */

const squareList2 = (arr) => {
  const power = arr
    .filter(number => number%parseInt(number) === 0) // ;를 쓰면 안된다. 
    .map(integer => integer*integer);
  return power;
};

const squaredIntegers2 = squareList2([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);