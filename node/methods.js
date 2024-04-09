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
console.log(listCandidates);
