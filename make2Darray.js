/** 이게 작동은 하는데 문제는 변수 정의나 방식이 너무 지저분하다.
 * 조금 더 좋은 스타일로 작성할 수 있는 방법이 있다. 
 */

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let arrNum = arr.length/size;
  // let lastIndex = arr.length-1 불필요한 라인이었다!
  for (let i = 0; i < arrNum; i++) {
    newArr.push(arr.splice(0, size));
    // arr = arr.splice(0, lastIndex); 불필요한 라인이었다!
  }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));

/** 이 접근에서 가장 중요한 것은 루프에 i++가 아니고 i += size를 쓴다는
 * 점이다. 이렇게 해서 slice의 인덱스를 적절하게 증가시키는 것을 가능하게 
 * 만들었다. 이 점이 내가 생각하지 못한 부분. 나머지 부분은 내가 이미 생각한 
 * 과정이다. 
 */

function chunkArrayInGroups2(arr, size) {
  var arr2 = [];
  for (var i = 0; i < arr.length; i += size) {
    arr2.push(arr.slice(i, i + size));
  }
  return arr2;
}

console.log(chunkArrayInGroups2(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups2([0, 1, 2, 3, 4, 5], 2));
console.log(chunkArrayInGroups2([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));

/** 더 주목할 만한 접근은 for loop가 아니라 while을 이용한 방법이다.
 * 이걸 보고 발견한 점은 내 코드의 arr = arr.splice(0, lastIndex); 부분이
 * 필요없다는 사실이다. 따라서 let lastIndex = arr.length-1 정의도 필요없고
 * 이걸 알았다면 코드를 더 쉽게 작성했을 것이다. 
 * while을 이용해서 얻는 중요한 잇점은 let arrNum = arr.length/size;을 
 * 정의할 필요가 없다는 것이다. arr.length가 존재하기만 하면 계속 실행하도록한다.
 * arr.splice(0, size)에서 size가 대상 배열의 마지막을 넘어가도 어차피 상관
 * 이 없다!
 */

function chunkArrayInGroups3(arr, size) {
  var newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}

console.log(chunkArrayInGroups3(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups3([0, 1, 2, 3, 4, 5], 2));
console.log(chunkArrayInGroups3([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));