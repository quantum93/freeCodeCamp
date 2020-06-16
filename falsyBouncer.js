function bouncer(arr) {
  const falseArray = [false, null, 0, "", undefined, NaN];
  console.log(falseArray[2])
  const result = arr.filter(element => element in falseArray);
  return result;
}

console.log(bouncer([7, "ate", "", false, 9]));