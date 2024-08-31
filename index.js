"use strict";
// index.ts
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
    }
}
// Create an instance of the Car class
const myCar = new Car("Tesla", "Model S", 2023);
// Call the start method to verify functionality
myCar.start(); // Should log: "Car engine started"
