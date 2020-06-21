/** 함수형 프로그래밍을 위해 주어진 배열을 변경해서는 안된다. 트릭으로
 * 빈 배열을 주어진 배열과 합친 후 그 배열에 대해 sort를 하면 주어진
 * 전역 변수의 배열을 수정하는 것이 아니게 된다. 
 */

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  return []
    .concat(arr)
    .sort();
}
console.log(nonMutatingSort(globalArray));