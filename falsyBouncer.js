function bouncer(arr) {
  let newArr = [];
  arr.forEach(element => {
    if(element) {
      newArr.push(element);
    } 
  });
  return newArr;
}
console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([null, NaN, 1, 2, undefined]));

/** 아래 처럼 filter()를 사용하면 더 쉽게 할 수 있다.
 * 여기서 보면 filter를 이용하면 argument에 대해서 Boolean을 따진다.
 * 이때 argument가 참이면 true 거짓이면 false를 반환한다. 
 * 결국 true를 반환하면 값 자체를 반환하는 것이고 false를 반환하면 
 * 들어갈 값이 없게 되니까 삭제의 기능을 하게 된다.
 */
function bouncer2(arr) {
  return arr.filter(Boolean);
}