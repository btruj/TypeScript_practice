"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//Overview
//Variable Declaration
//Variable Types
//Functions
//Interfaces
//Classes
//Access Modifiers
var message = 'Welcome back';
console.log(message);
//variable declaration
var x = 10;
var y = 20;
var sum;
var title = 'Codevolution';
//variable types
var isBeginner = true;
var total = 0;
var name = 'John';
var sentence = "My name is ".concat(name, "\nI am a beginner in Typescript");
console.log(sentence);
//null and undefined
var n = null;
var u = undefined;
// let isNew: boolean = null;
// let myName: string = undefined;
//array
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//tuple
var person1 = ['Chris', 22];
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
//any (will not throw error)
var randomValue = 10;
randomValue = true;
randomValue = 'John';
//unknown
var myVariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
// (myVariable as string).toUpperCase();
var a;
a = 10;
a = true;
var b = 20;
//union of types - intellesense support (EX: .multiType)
var multiType;
multiType = 20;
multiType = true;
//no intellesense support (EX: .anyType)
var anyType;
anyType = 20;
anyType = true;
//functions
function add(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(5, 10);
add(5);
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
//classes
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee('John');
console.log(emp1.employeeName);
emp1.greet();
//inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
//access modifiers
//public - default
//private - only accessible within the class
//protected - only accessible within the class and its derived classes
