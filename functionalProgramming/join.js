/** 주어진 문자열을 - 또는 , 또는 .을 기준으로 분리해서
 * 배열을 만들고 그 배열을 공백을 기준으로 하나의 문자열로
 * 합친다.
 */
function sentensify(str) {
  return str.split(/\-|\,|\./g).join(" ");
}
console.log(sentensify("May-the-force-be-with-you"));