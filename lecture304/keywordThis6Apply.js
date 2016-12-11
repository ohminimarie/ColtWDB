//What about Apply?
// It's almost identical to call - except the parameters!

var colt = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi " + this.firstName;
  },
  addNumbers: function(a,b,c,d){
    return this.firstName + " just calculated " + (a+b+c+d);
  }
}

var elie = {
  firstName: "Elie",
}

colt.sayHi()  //"Hi Colt"
colt.sayHi.apply(elie)  //"Hi Elie"

//What happens when you start adding arguments?

colt.addNumbers(1,2,3,4)  //Colt just calculated 10
colt.addNumbers.call(elie,1,2,3,4)  //Elie just calculated 10
colt.addNumbers.call(elie,[1,2,3,4])  //Elie just calculated 10
