/** 정규표현식을 변수와 같이 처리할때는 직접 / ~~~~/ 이 아니라
 *  constructor인 RegExp를 이용해서 만들어야 한다.
 *
 */

function mutation(arr) {
  let secondWord = arr[1].split("");
  let result = [];
  secondWord.forEach(element => {
    let elementRegex = new RegExp(element, "i");
    result.push(elementRegex.test(arr[0]));
  });
  return (result.includes(false)) ? false: true;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "neo"]));

/** 위의 문제를 정규표현식을 쓰지 않고 푼다면 indexOf()를 이용하는 방법이
 * 있다. indexOf()는 해당 인자가 배열에 존재하면 그 인자가 존재하는 
 * 원소의 인덱스 번호를 반환하고 해당 인자가 배열에 없으면 -1을 반환한다.
 * 아래 조건식의 (target.indexOf(test[i]) < 0)은 결국 해당 인자가
 * 존재하는지 여부를 묻는 것이다.
 */

function mutation2(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

console.log(mutation2(["hello", "hey"]));
console.log(mutation2(["hello", "neo"]));