 var calcType = prompt('Would you like a simple or advanced calculator?');

 if (calcType === 'simple'){

 var num1 = parseInt(prompt('Choose your first number!'));
 console.log('num1', num1);

 var op = prompt('Choose an operation plus, minus, divide, times');
 console.log('op', op);

 var num2 = parseInt(prompt('Choose your second number!'));
 console.log('num2', num2);

if (op === 'plus'){
 var answer = (num1) + (num2);
 }else if (op === 'minus'){
 	var answer = (num1) - (num2);
 }else if (op === 'divide') {
 	var answer = (num1) / (num2);
 }else if (op === 'times') {
 	var answer = (num1) * (num2);
 }else{
 	alert("error")
 };

 alert("your answer is "+ answer)

}else if (calcType === 'advanced') {

var num1 = parseInt(prompt('Choose your first number!'));
 console.log('num1', num1);

 var op = prompt('Choose an operation plus, minus, divide, times, power, square root');
 console.log('op', op);

if (!op === 'square root'){
 var num2 = parseInt(prompt('Choose your second number!'));
 console.log('num2', num2)};

if (op === 'plus'){
 var answer = (num1) + (num2);
 }else if (op === 'minus'){
 	var answer = (num1) - (num2);
 }else if (op === 'divide') {
 	var answer = (num1) / (num2);
 }else if (op === 'times') {
 	var answer = (num1) * (num2);
 }else if (op === 'power') {
 	var answer = (num1) * (num2);
 }else if (op === 'square root') {
 	var answer = math.sqrt(num1);
 }else{
 	alert("error")
 };

 alert("your answer is "+ answer)

}else{
	alert("error")
};



 // alert("Why is your console not open?");