alert("Let's convert from gallons to liters");
var galtolit = function(){
  var number1 = parseInt(prompt("Enter number of gallons:"));
  var result = (number1 * 3.7854);
  alert(result.toPrecision(6));
};
galtolit();

alert("Let's convert from liters to gallons");
var litogal = function(){
  var number1 = parseInt(prompt("Enter number of liters:"));
  var result = (number1 / 3.7854);
  alert(result.toPrecision(6));
};
litogal();
