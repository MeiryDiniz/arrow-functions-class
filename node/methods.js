// using a for loop

let num1 = [1, 2, 3, 4, 5];
let results = [];
for (let num of num1) {
    results.push(num * 2);
}
console.log(results);

// map() method

const multByTwo = function (num) {
    return num * 2;
}

const mapResults = num1.map(multByTwo);
console.log(mapResults);

// simplified way of map()

const simplified = num1.map(function(num) { return num * 2});
console.log(simplified);

// simplified way of map() + arrow function
// typical way used by advanced JS developers

const arrow = num1.map(num => num * 2);
console.log(arrow);

// map() with objects

const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
  ];

const studentsWithIds = students.map(student => [student.name, student.id]);
console.log(studentsWithIds);






// filter() method

// array of numbers

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evens = nums.filter(n => n % 2 === 0);
// console.log(evens); // [2, 4, 6, 8, 10]

// array of names

// let names = ['mike', 'jill', 'matt', 'jenny'];
// let mNames = names.filter(name => name.charAt(0) === 'm');
// console.log(mNames); //['mike', 'matt']

