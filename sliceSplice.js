function frankenSplice(arr1, arr2, n) {
  let result = [];
  let header = arr2.slice(0,n);
  let tail = arr2.slice(arr2.length -n, arr2.length)
  return result = header.concat(arr1, tail); // 복수의 배열을 하나로 병합
}

console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));

/** 이렇게 하는 방법도 알고 있어야 한다.
 * 자세히 보면 let localArray = arr2.slice(); 의 결과가 arr2와 같아보인다. 
 * 하지만 문제에서 요구하는데로 arr2를 변형하지 않고 (same) 작업하기 위해서 동일한 
 * 배열을 하나 더 복제한 것이다. 즉 다른 메모리에 저장되는 동일한 배열을 작성.
 * 
 * .splice(교체되는 자리, 0, 교체할 아이템); insert 기능 --> 이문제는 이것만 사용!
 * .splice(교체되는 자리, 1, 교체할 아이템); replace 기능
 * 
 * 아래 코드는 localArray의 2번째 자리에 arr1의 첫 원소를 넣고
 * 자리수(n)을 증가 다음 루프에서 localArray에 3번째 자리에 arr1의 두번째 원소를 넣고
 * 자리수(n)을 증가.
 */
function frankenSplice2(arr1, arr2, n) {
  let localArray = arr2.slice(); // 다른 메모리에 저장되는 동일한 배열
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}

console.log(frankenSplice2(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));


/** 위와 동일하게 arr2를 변형하지 않기 위해 복제 배열 localArr를 생성.
 * spread operator ...을 사용하면 for loop가 필요없다!
 */

function frankenSplice3(arr1, arr2, n) {
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}

console.log(frankenSplice3(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));