//Bind - the parameters work like call, but bind returns a function
//with the context of 'this' bound already!

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

var elieCalc = colt.addNumbers.bind(elie,1, 2, 3, 4) //function(){}....
elieCalc()  //Elie just calculated 10

//With bind - we do not need to know all the arguments up front!
//partial application
var elieCalc2 = colt.addNumbers.bind(elie,1,2)  //function(){}....
elieCalc(3,4) //Elie just calculated 10