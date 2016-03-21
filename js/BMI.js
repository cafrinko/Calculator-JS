alert("Let's see what is your BMI");
var bmi= function(){
  var number1 = parseInt(prompt("Enter your height in inches:"));
  var number2 = parseInt(prompt("Enter your weight in pounds:"));
  var result = ((number2 * 703) / (Math.pow(number1, 2)));
  alert(result.toPrecision(3));
};
bmi();
