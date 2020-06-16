function titleCase(str) {
  let wordArray = str.toLowerCase().split(" ");
  for (let i = 0; i < wordArray.length; i++) {
    wordArray[i] = wordArray[i].charAt(0).toUpperCase();
  }
}

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
// console.log(titleCase("I'm a little tea pot"));