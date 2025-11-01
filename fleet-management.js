/*Scenario

You’ve been hired to help a logistics company build a system to manage its fleet of
vehicles. The system should be able to:

1. Create individual vehicles with properties like type, make, model, year, and
mileage.
2. Add a method to update the mileage of a vehicle when it is used.
3. Add a method to display the details of the vehicle in a user-friendly format.
4. Instantiate multiple vehicles from the class and test your methods.

Tasks

1. Define the Vehicle Class:
○ The constructor should include properties: type, make, model, year,
and mileage.
○ Use default values for mileage (e.g., 0).
2. Add Methods:
○ drive(distance): Increases the vehicle’s mileage by the given
distance (in kilometers or miles).
○ getDetails(): Returns a formatted string describing the vehicle’s
details.
3. Create and Use Vehicle Objects:
○ Instantiate at least three vehicle objects with different properties (e.g.,
a car, a truck, and a motorcycle).
○ Use the drive method to simulate trips and update mileage.
○ Use the getDetails method to print each vehicle’s updated
information.*/

//Define the vehicle class, use default value for mileage
class vehicle {
    constructor(type, make, model, year, mileage = 0) {
        this.type = type;
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }

    //add methods
    drive(distance) {
        return `This vehicle has been driven ${distance} miles. The updated mileage of the vehicle is ${this.mileage += distance}`;
    }

    getDetails() {
        return `
        Type: ${this.type} 
        Make: ${this.make}
        Model: ${this.model}
        Year: ${this.year}
        Mileage: ${this.mileage}
        `;
    }
}

//Instantiate three vehicles
let suv = new vehicle('SUV', 'Honda', 'CR-V', 2014, 60000);
let truck = new vehicle('Truck', 'Dodge', 'Ram 1500', 2017, 50000);
let car = new vehicle('Car', 'Ford', 'Mustang', 2024, 10000);
let van = new vehicle('Van', 'Honda', 'Odyssey', 2022);//uses default mileage of 0

console.log("---Initial Details---");

console.log(suv.getDetails());
console.log(truck.getDetails());
console.log(car.getDetails());
console.log(van.getDetails());

console.log("---Simulating Trips and Updating Mileage---");

//simulate trips and log the results
console.log(suv.drive(2000));
console.log(truck.drive(300));
console.log(car.drive(20));
console.log(van.drive(60));

console.log("---Updated Details---")

//display details with updated mileage
console.log(suv.getDetails());
console.log(truck.getDetails());
console.log(car.getDetails());
console.log(van.getDetails());
