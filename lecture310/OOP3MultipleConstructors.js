//Multiple Constructors
//Let's create two constructor functions, one for a Car and
//one for a Motorcycle - here is what it might look like

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  //we can also set properties on the keyword this
  //that are preset values
  this.numWheels = 4;
}

function Motorcycle(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
  this.numWheels = 2;
}

//Notice how much duplication is going on in the motorcycle function. 
//Is there anyway to "borrow" the Car function and invoke it inside 
//the Motorcycle function?

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  //we can also set properties on the keyword this
  //that are preset values
  this.numWheels = 4;
}

function Motorcycle(make, model, year){
  //using Call
  Car.call(this, make, model, year)
  this.numWheels = 2;
}
// OR

function Motorcycle(make, model, year){
  //using Call
  Car.call(this, [make, model, year])
  this.numWheels = 2;
}

function Motorcycle(make, model, year){
  //using Call
  Car.call(this, arguments)
  this.numWheels = 2;
}