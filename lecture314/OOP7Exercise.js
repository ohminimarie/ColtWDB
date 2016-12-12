//Refactoring
//Now that we know that objects created by the same constructor
//have a shared prototype, let's refactor some code

function Person(name){
  this.name = name;
  this.sayHi = function(){
    return "Hi " + this.name;
  }
}

elie = new Person("Elie");
elie.sayHi(); //Hi Elie

//Now this code works, but it is inefficient
//Every time we make an object using the new keyword we have to
//redefine this function but its the same for everyone! Let's put
//it on the prototype instead!

funtion Person(name){
  this.name = name;
}

Person.prototype.sayHi = function(){
  return "Hi " + this.name;
}

elie = new Person("Elie");
elie.sayHi(); //Hi Elie


