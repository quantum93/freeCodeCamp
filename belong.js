
/** 자바스크립트에는 숫자를 정렬하는 간단한 메소드가 없다! 
 * 
 * Find the Highest (or Lowest) Array Value There are no
 * built-in functions for finding the max or min value in 
 * an array. However, after you have sorted an array, you 
 * can use the index to obtain the highest and lowest
 * values. Sorting ascending:
 * 
 * var points = [40, 100, 1, 5, 25, 10];
 * points.sort(function(a, b){return a - b});
 * // now points[0] contains the lowest value
 * // and points[points.length-1] contains the highest
 * value
 * 
 * array의 마지막 원소의 값은 sortedArr.slice(-1)[0]
 */

function getIndexToIns(arr, num) {
  let sortedArr = arr.sort(function(a, b){return a - b});
  if (sortedArr.length === 0 || num <= sortedArr[0]) {
    return 0;
  } else if (num > sortedArr.slice(-1)[0]) {
    return sortedArr.length;
  } else {
    for (let i = 0; i < sortedArr.length; i++) {
      if (num <= sortedArr[i]) {
        return i;
      }
    }
  }
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 30));

/**
 *다른 해법으로 아래의 방법이 좀 더 체계적인 접근....
 *
 */

function getIndexToIns2(arr, num) {
  arr.sort(function(a, b) { return a - b; });
  
  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num) return a;
  }
  
  return arr.length;
}
console.log(getIndexToIns2([10, 20, 30, 40, 50], 30));

/** 이 방법이 아주 좋다. 먼저 주어진 num을 기존 array와 통합(concat)
 * 하고 그결과를 sort하면 자연스럽게 index를 뽑을 수 있다. 
 */

function getIndexToIns3(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}

getIndexToIns3([1, 3, 4], 2);

/**
 *이렇게 filter메소드를 이용해서 한줄로 해결할 수도 있다.
 *filter를 하게 되면 val은 arr의 모든 원소를 하나씩 지칭한다. 이제 이 
 *값을 num과 비교해서 값이 조건을 만족하는 참일때 그 길이값을 반환하면 
 * 결국 그 값이 인덱스가 되는 구조
 * 중요한 점은 이 접근에서는 sort를 하지 않았다. 즉 sort필요없이 무조건
 * num가 해당 값보다 커지기만 하면 바로 그 길이 값이 인덱스 값이 된다!
 */
function getIndexToIns4(arr, num) {
  return arr.filter(val => num > val);
}
console.log(getIndexToIns4([1, 3, 4], 2));