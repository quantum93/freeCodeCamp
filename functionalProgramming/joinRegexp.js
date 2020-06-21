/** 아래의 문제는 정규표현으로 간단히 해결
 * split안의 의미는 - 또는 , 또는 . 또는 공백을 
 * 전역으로 적용해서 제거 그 기준으로 문자열을 분리하는 의미
 */
function splitify(str) {
  return str.split(/\-|\,|\.|\s/g);
}
console.log(splitify("Hello World,I-am code"));