
function titleCase(str) {
  let strArray = str.toLowerCase().split(" ");
  let resultArray = [];
  strArray.forEach(element => {
    resultArray.push(element[0].toUpperCase() + element.slice(1, element.length));
  });
  return resultArray.join(" ");
}

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));


/** 나의 코드에서 .replace를 이용하면 좀더 좋은 스타일을 만들 수 있다. */

function titleCase2(str) {
  let strArray = str.toLowerCase().split(" ");
  let resultArray = [];
  strArray.forEach(element => {
    resultArray.push(element.replace(element.charAt(0), element.charAt(0).toUpperCase()));
  });
  return resultArray.join(" ");
}

console.log(titleCase2("HERE IS MY HANDLE HERE IS MY SPOUT"));

/** 정규표현식을 이용하면 다음과 같이 아주 간단하게 처리할 수 있다. 
 * 각 정규표현식의 의미는,
 * Find all non-whitespace characters (\S)
 * At the beginning of string (^)
 * Or after any whitespace character (\s)
 * 
 * This solution works with national symbols and accented letters as illustrated by 
 * following examples international characters: 
 * ‘бабушка курит трубку’ // -> ‘Бабушка Курит Трубку’ 
 * accented characters: ‘località àtilacol’ // -> ‘Località Àtilacol’
*/

function titleCase3(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}