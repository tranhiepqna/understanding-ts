type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

// interface ElevatedEmployee extends Employee, Admin;

type ElevatedEmployee = Admin & Employee;


const e1: ElevatedEmployee = {
    name: "Max",
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number;

type Numeric = number | boolean;

type Universal = Combinable & Numeric 

// function overloads
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;


function add(a: Combinable, b: Combinable){
    if(typeof a === "string" || typeof b === 'string'){
        return a.toString() + b.toString();
    }

    return a + b;
}

const result = add('Max', 1);
result.split(' ');

// optional chaining

const fetchUserData = {
    id: 'u1',
    name: 'Max',
    // job: {title: 'CEO', description: 'My own company'}
}

console.log(fetchUserData?.job?.title)

// Nullish Coalescing ?? (null, undefined)

const userInput = '';

const storedData = userInput ?? "DEFAULT";

console.log(storedData)

// type UnknownEmployee = Employee | Admin; 


// function printEmployeeInformation(emp: UnknownEmployee){
//     console.log("Name: ", emp.name);
// //type guards 
//     if('privileges' in emp){
//         console.log("Privileges: " + emp.privileges)
//     }

//     if('startDate' in emp){
//         console.log("Start date: " + emp.startDate)
//     }
// }

// printEmployeeInformation(e1);


// interface Bird {
//     type: 'bird';
//     flyingSpeed: number;
// }

// interface Horse {
//     type: 'horse';
//     runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal){
//     let speed;
//     switch(animal.type){
//         case 'bird':
//                 speed = animal.flyingSpeed;
//                 break;
//         case 'horse':
//                 speed = animal.runningSpeed;
//     }
//     console.log("Moving with speed: ", speed)
// }

// moveAnimal({type: 'bird', flyingSpeed: 30})

// const userInputElement = document.getElementById('user-input');

// Type casting
// if(userInputElement){
//     (userInputElement as HTMLInputElement).value = 'Hi there!'
// }

// interface ErrorContainer {
//     [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//     email: 'Not a valid email!',
//     username: 'Must start with a capital character!'
// }

