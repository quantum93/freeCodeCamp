
 // 내 코드는 ~
 function confirmEnding1(str, target) { 
  let targetWordLength = target.length; 
  return (target.slice(-targetWordLength) === str.slice(-targetWordLength) && str.slice(-1) === target.slice(-1));
 }

 function confirmEnding2(str, target) {
  return str.slice(str.length - target.length) === target; // str.slice(14 - 2, 즉 str의 12번째에서 읽기 시작한다. 따라서 마지막 "on")
 }

 function confirmEnding3(str, target) {
   let re = new RegExp(target + "$", "i"); // 정규표현 객체를 호출, $는 end를 확인, i는 대소문자 무시. 결국 /target$i/를 만든다. 
   return re.test(str);
 }

console.log(confirmEnding3("Congratulation", "on"));
