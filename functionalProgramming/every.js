/** every 는 모든 배열의 원소에 대해 주어진 조건으로 하나씩 검사해서 
 * 하나라도 false가 나오면 false를 반환한다. 이때 배열이 false로 
 * 바뀌므로 반드시 return를 every 전체에 대해서 실행해야 결과를 얻는다.
 */
function checkPositive(arr) {

  return  arr.every(function(item) {return item > 0});

}
