var operand1 = "";
var operand2 = "";
var operator = '';
var num1 = 0;
var num2 = 0;
var result = 0;

var display = document.getElementById("display");
var calcClick = 0;

function calculator(){
	calcClick++;
	if(calcClick % 2 != 0){
		document.getElementById("calculator").style = "display: block;";
		document.getElementById("calcToggle").innerHTML = "Click here to <b> hide </b> the calculator.";
	}
	else{
		document.getElementById("calculator").style = "display: none;";
		document.getElementById("calcToggle").innerHTML = "Click here to <b> show </b> the calculator.";
	}
}

function oneClick() {
	operand1 += "1";
	display.innerHTML += "1";
}

function twoClick() {
	operand1 += "2";
	display.innerHTML += "2";
}

function threeClick() {
	operand1 += "3";
	display.innerHTML += "3";
}

function fourClick() {
	operand1 += "4";
	display.innerHTML += "4";
}

function fiveClick() {
	operand1 += "5";
	display.innerHTML += "5";
}

function sixClick() {
	operand1 += "6";
	display.innerHTML += "6";
}

function sevenClick() {
	operand1 += "7";
	display.innerHTML += "7";
}

function eightClick() {
	operand1 += "8";
	display.innerHTML += "8";
}

function nineClick() {
	operand1 += "9";
	display.innerHTML += "9";
}

function zeroClick() {
	operand1 += "0";
	display.innerHTML += "0";
}

function dotClick() {
	operand1 += ".";
	display.innerHTML += ".";
}

function plusClick() {
	operator = '+';
	num1 = parseFloat(operand1);
	operand1 = "";
	display.innerHTML = "";
}

function minusClick() {
	operator = '-';
	num1 = parseFloat(operand1);
	operand1 = "";
	display.innerHTML = "";
}

function timesClick() {
	operator = '*';
	num1 = parseFloat(operand1);
	operand1 = "";
	display.innerHTML = "";
}

function divideClick() {
	operator = '/';
	num1 = parseFloat(operand1);
	operand1 = "";
	display.innerHTML = "";
}

function powClick() {
	operator = '^';
	num1 = parseFloat(operand1);
	operand1 = "";
	display.innerHTML = "";
}

function clrClick() {
	operand1 = "";
	operand2 = "";
	operator = '';
	num1 = 0;
	num2 = 0;
	result = 0;
	display.innerHTML = "";
}

function equalsClick() {
	operand2 = display.innerHTML;
	num2 = parseFloat(operand2);
	if(operator == '+')
	{
		result = num1 + num2;
	}
	else if(operator == '-')
	{
		result = num1 - num2;
	}
	else if(operator == '*')
	{
		result = num1*num2;
	}
	else if(operator == '/')
	{
		result = num1 / num2;
	}
	else if(operator == '^')
	{
		result = Math.pow(num1, num2);
	}
	operand1 = result.toString();
	display.innerHTML = result;
}

