function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    } 
  }
}

console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0));

/** find method는 test를 통과하는 배열의 첫번째 원소를 반환하다 */
function findElement2(arr, func) {
  return arr.find(func); 
}

/** map()으로 배열의 원소를 읽어들인다! 이게 핵심. func을 callback으로 호출, 함수의 조건을 만족하는 첫 원소의 인덱스를 잡아낸다음 조건을 만족하는 첫 원소를 반환하는데 인덱스를 사용 arr.map(func)이 테스트를 통과하는지 여부를 배열형태로 반환 [false, false, false, true, false, true], 이 결과에 대해 true를 주는 인덱스를 알아내는 것이 indexOf(ture) 그러면 index 3을 지칭하고 마지막으로 arr[3]을 가져오면 8이 반환 */
function findElement3(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}

function test(arr, func) {
  return arr.map(func).indexOf(true);
}

console.log(test([1,3,5,8,9,10], num => num % 2 === 0));