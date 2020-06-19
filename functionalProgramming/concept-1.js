/**
 * 이게 함수형 프로그래밍의 아주 단순한 예제이다. 함수를 다른 함수에서 
 * 호출해서 결과를 도출하는 형식. prepareTea 함수는 아무일도 하지 
 * 않고 있으므로 이 함수에 어떤 변화가 있어도 전체 코드의 결과는 동일
 */
const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
  const teaCups = [];
  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4TeamFCC = getTea(40);
