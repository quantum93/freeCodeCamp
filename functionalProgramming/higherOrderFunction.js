const people = [
  {name: 'John Doe', age: 16},
  {name: 'Thomas Calls', age: 19},
  {name: 'Liam Smith', age: 20},
  {name: 'Jessy Pinkman', age: 18},
 ];

 const peopleAbove18 = (collection) => {
   const results = [];
   for (let i = 0; i < collection.length; i++) {
     const person = collection[i];
     if (person.age >= 18) {
       results.push(person);
     }
   }
   return results;
 }

 const peopleBetween18And20 = (collection) => {
  const results = [];
  for (let i = 0; i < collection.length; i++) {
    const person = collection[i];
    if (person.age >= 18 && person.age <= 20) {
      results.push(person);
    }
  }
  return results;
};

/** 두 함수는 공통되는 구문이 많다. 다시말해 반복되는 코드가 널려있다.
 * 이럴때 higher order function을 이용해서 코드를 짦게 작성
 */

 const newPeopleAbove18 = (collection) => {
   return collection
    .filter((person) => person.age >= 18);
 }

 console.log(newPeopleAbove18(people));