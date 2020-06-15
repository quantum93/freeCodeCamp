function repeatStringNumTimes(str, num) {
  if (num < 0) {
    return "";
  } else {
    let repeatStr = "";
    for (let i = 0; i < num; i++) {
      repeatStr += str;
    }
    return repeatStr;
  }
}

function repeatStringNumTimes1(str, num) {
  var accumulatedStr = "";

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}

function repeatStringNumTimes2(str, num) {
  if (num < 1) {
    return "";
  } else if (num === 1) {
    return str;
  } else {
    return str + repeatStringNumTimes2(str, num - 1);
  }
}

// for loop를 recursion으로 대체하면서 ES6로 깔끔하게...
function repeatStringNumTimes3(str, num) {
  return num > 0 ? str + repeatStringNumTimes3(str, num - 1) : '';
}

console.log(repeatStringNumTimes("abc", 3));
