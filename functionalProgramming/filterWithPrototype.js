/** 아래의 코드는 잘 작동한다. 
 * 하지만 8 라인의 괄호에 callback 매개변수를 이용하고 있지 않다. 
 * 코드의 흐름은 먼저 배열변수를 정의하고 filtering을 위한 prototype을 
 * 작성했다. 이걸 먼저 하지 않으면 18 라인에서 myFilter는 작동하지 않는다. 
 * */
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(){
  var newArray = [];
  for (let i = 0; i < s.length; i++) {
    if(s[i] < 66) {
      newArray.push(s[i])
    }
  }
  return newArray;
};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});

/** 아래의 로직을 이해해야한다. 우선 this는 s를 지칭한다고 본다. 
 * callback(this[i])는 배열의 i번째 값을 36 line의 로직에 넣었을때 true를 반환하면 
 * 다음 라인에서 newArray에 this[i]의 값을 넣는다는 흐름
 */
Array.prototype.myFilter2 = function(callback) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i]) === true) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

let new_S = s.myFilter2(function(item){
  return item % 2 === 1;
});

console.log(new_S);