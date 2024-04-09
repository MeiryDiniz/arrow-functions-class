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

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evens = nums.filter(n => n % 2 === 0);
console.log(evens); // [2, 4, 6, 8, 10]

// array of names

let names = ['mike', 'jill', 'matt', 'jenny'];
let mNames = names.filter(name => name.charAt(0) === 'm');
console.log(mNames); //['mike', 'matt']

// simple filtering

const people = [
  {
    name: 'Michael',
    age: 23,
  },
  
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  }
];

const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough);

const specificPerson = people.filter(p => p.name === 'Paul');
// to access the object itself you can add [0] after 'Paul' name.
// the result will be like this { name: 'Paul', age: 18 }
console.log(specificPerson); // [ { name: 'Michael', age: 23 } ]

// complex filtering

// My goal is to create a list of job interview  
// candidates by filtering out any students who  
// don’t have at least 5 years of experience  
// in at least one skill.

const applicants = [
  {
    id: 1,
    name: 'Mary',
    profession: 'Developer',
    skills: [ // each skill is an object
      {name: 'javascript', yearsExperience: 1},
      {name: 'html', yearsExperience: 5},
      {name: 'css', yearsExperience: 3},    
    ]
  },
  {
    id: 2,
    name: 'Anna',
    profession: 'Developer',
    skills: [
      {name: 'javascript', yearsExperience: 0},
      {name: 'html', yearsExperience: 4},
      {name: 'css', yearsExperience: 2},    
    ]
  },
  {
    id: 3,
    name: 'Joel',
    profession: 'Designer',
    skills: [
      {name: 'javascript', yearsExperience: 1},
      {name: 'html', yearsExperience: 1},
      {name: 'css', yearsExperience: 5},    
    ]
  },
];

const applicantsList = applicants.filter(applicants => {
  let strongSkills = applicants.skills.filter(skill => skill.yearsExperience >= 5);
// Above, skills were filtered to return just aplicants who have 5 or more years 
// of experience. The applicant who doesn't match this filter will return an empty array,
// so I will add length > 0 to return just a true result.
  return strongSkills.length > 0;
});
console.log(applicantsList);



// easy way to write the filter above:

const strongSkillsList = applicants => {
  let strongSkills = applicants.skills.filter(skill => skill.yearsExperience >= 5);
  return strongSkills.length > 0;
};
const applicantsList1 = applicants.filter(strongSkillsList);
console.log(applicantsList1);


// one more way, but There’s only one small problem with this  
// solution, and that’s that when we log the candidates to the 
// console, the variable contains  all their information which 
// is quite verbose.

const has5yearsExp = skill => skill.yearsExperience >= 5;
const hasStrongSkills = applicants => applicants.skills.filter(has5yearsExp).length > 0;
const listCandidates = applicants.filter(hasStrongSkills);
console.log(listCandidates.map(itm => [itm.name])); // you can use map() here to have just the info we want logged to the console.


// The reduce() method:

/**
 * Reduce can be used in many useful ways,  such as grouping 
 * objects by a specific property, flattening arrays, or 
 * counting how many  times a value appears in an object or array.  
 */

// Reducing an array of numbers to  a single value, their total sum.

const numReduce = [0, 1, 2, 3, 4];
let sumReduce = numReduce.reduce((acc, curr) => acc + curr, 0);
console.log(sumReduce);



const teamMembers = [
  {
    name: 'Mia',
    profession: 'Developer',
    yrsExperience: 5
  }, 
  {
    name: 'Gabi',
    profession: 'Developer',
    yrsExperience: 7
  }, 
   
  {
    name: 'Lia',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Paula',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// totaling a specific object property

let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0); // always specify the inicial value, here is 0
console.log(totalExperience);

// We’re going to use reduce to group our team 
// members by profession and find  the total 
// experience for each profession. 

// {Developer: 12, Designer: 4} <--- this is the result we want!

let experienceByProfession = teamMembers.reduce((acc, curr) => { // the first set of curly braces is the boundaries of the callback function
  // So at this point in the function, the accumulator  is an empty object and curr is the first team member in the array.
  let key = curr.profession; // create a  property in my object for Developer
  // Now, I need to check whether the key already exists in the object we’re 
  // going to be accumulating into.  If it doesn’t yet exist, I’ll set it 
  // equal to curr.yrsExperience. This means the first time  we see a new 
  // profession, that property will be added into the accumulator and its 
  // value  will be set to the team member’s experience. 
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  // Otherwise, if the key does already exist, it’s as  simple as 
  // adding the current member’s experience  
to the already existing value.
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc; //  When I’m done, all  I’ve got to do is return the accumulator.
}, {}); // this set of of curly braces {} after the  
// comma is our initial value, an empty object. This  
// is what the accumulator will be on the first pass. 

console.log(experienceByProfession)

// if I add another team member with a different profession 
// to the array, this will be add to the result when I ran 
// the code again.

