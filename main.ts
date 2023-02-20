export{}

//Overview
//Variable Declaration
//Variable Types
//Functions
//Interfaces
//Classes
//Access Modifiers

let message = 'Welcome back';
console.log(message);

//variable declaration
let x = 10;
const y = 20;

let sum;
const title = 'Codevolution';

//variable types
let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'John';

let sentence: string = `My name is ${name}
I am a beginner in Typescript`;

console.log(sentence);

//null and undefined
let n: null = null;
let u: undefined = undefined;

// let isNew: boolean = null;
// let myName: string = undefined;

//array
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

//tuple
let person1: [string, number] = ['Chris', 22];

//enum
enum Color {Red, Green, Blue};
let c: Color = Color.Green;
console.log(c);

//any (will not throw error)
let randomValue: any = 10;
randomValue = true;
randomValue = 'John';

//unknown
let myVariable: unknown = 10;

function hasName(obj: any): obj is {name: string} {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj
}

if (hasName(myVariable)) {
    console.log(myVariable.name);
}
// (myVariable as string).toUpperCase();


let a;
a = 10;
a = true;

let b = 20;

//union of types - intellesense support (EX: .multiType)
let multiType: number | boolean;
multiType = 20;
multiType = true;

//no intellesense support (EX: .anyType)
let anyType: any;
anyType = 20;
anyType = true;


//functions
function add(num1: number, num2?: number): number {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(5, 10);
add(5);

// easier to maintain
// the ? makes the parameter optional
interface Person {
    firstName: string;
    lastName?: string;
}

function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};

fullName(p);

//classes
class Employee {
    public employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good morning ${this.employeeName}`);
    }
}

let emp1 = new Employee('John');
console.log(emp1.employeeName);
emp1.greet();

//inheritance
class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }

    delegateWork() {
        console.log(`Manager delegating tasks`);
    }
}

let m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

//access modifiers
//public - default
//private - only accessible within the class
//protected - only accessible within the class and its derived classes






