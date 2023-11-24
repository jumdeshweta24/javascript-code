// function car(name, model, year) {
//     this.name = name;
//     this.model = model;
//     this.year = year;
//     // this.display = function() {
//     //     document.write(this.name + this.model + this.year);
//     // }
// }
// let car1 = new car("hero", "i20", 2023);
// document.write(car1.model);
// document.write(car1.name);
// document.write(car1.year);
/* for in loop in class object*/
"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    display() {
        document.write(this.make + this.model + this.year);
    };
};
let car1 = new Car("Hyundai", "i20", 2014);
let car2 = new Car("Honda", "city", 2005);
let car3 = new Car("Tata", "Nano", 2012);
for (let prop in car1) {
    document.write(prop + ":" + car1[prop] + "<br>");
}