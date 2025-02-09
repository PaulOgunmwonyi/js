let person = {
    name: "Paul Ogunmwonyi",
    age: 19
};

const personB = {name: 'lul', age: 3738}
let personBAge = personB.age
personB.salary = 9000

console.log(person);

// create an object with properties and a method
let harry = { 
    name: 'Harry Smith', 
    salary: 90000 ,
    raiseSalary(percent) {
        this.salary *= 1 + percent / 100
      }
    }
    
// raise harry's salary with a method 
harry.raiseSalary(10)


const originalObject = { a: 1, b: 2, c: 3 };
const newObject = Object.assign({}, originalObject, { b: 4 });

console.log(newObject); // Output: { a: 1, b: 4, c: 3 }

const originalObject1 = { a: 1, b: 2, c: 3 };
const newObject1 = { ...originalObject1, b: 4 };

console.log(newObject1);

let students = ["tran", "brown", "patel", "johnson"]
heading_component = students.map(student => `<h1>${student}</h1>`)
