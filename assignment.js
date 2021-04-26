const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

// 1 Filter the list of inventors for those who were born in the 1500's

const filteredUsers = inventors.filter((a) => a.year>=1500 && a.year<=1599)
console.log(filteredUsers)

//  2. Give us an array of the inventors first and last names
const  newArray = inventors.map( (arg)=>
{
  names=arg.first + ' '+arg.last
  return(names)
}
);
console.log(newArray);

// 3. Sort the inventors by birthdate, oldest to youngest

const newArray1=inventors.sort((a,b)=>{
  return a.year-b.year;
});
console.log(newArray1);



// 4. How many years did all the inventors live all together?

let b=0
inventors.forEach((a)=>{
  let z=a.year-a.passed
  b=b-z
  return b

});
console.log(b)

//  5 Sort the inventors by years lived

const newArray3=[]
inventors.forEach((arg)=>{
  let years=arg.passed-arg.year
  newArray3.push(years)
  return newArray.sort(function(a, b){return a-b})
});
console.log(newArray3) 

 

// 6 Sort the people alphabetically by last name

const newArray4=inventors.sort( (a, b)=>{
  return(a.last > b.last) - (a.last < b.last)
});
console.log(newArray4)





const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
function count_duplicate(a){
 let counts = {}

 for(let i =0; i < a.length; i++){ 
     if (counts[a[i]]){
     counts[a[i]] += 1
     } else {
     counts[a[i]] = 1
     }
    }  
  return(counts)
}

console.log(count_duplicate(data));

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const even = (element,index) => element.year-2021===19
console.log(people.some(even));

const isBelowThreshold = (currentValue) => currentValue.year-2021 === 19;
console.log(people.every(isBelowThreshold));

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];
const found = comments.find(element => element.id > 823423);
console.log(found);

const isLargeNumber = (element) => element.id ==823423;

console.log(comments.findIndex(isLargeNumber));




// newArray=[]
// const axios = require('axios');

// (async () => {
//   try {
//     const response = await axios.get('https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris')
//     newArray.push(response.data);
//     console.log(newArray);
//   } catch (error) {
//     console.log(error.response.body);
//   }
// })();

