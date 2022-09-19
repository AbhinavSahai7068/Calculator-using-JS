// to fetch values to display in calculator and the 
// value clicked by user via button 
var buttons=document.getElementsByClassName("button");
var display=document.getElementById("display");
// display is the id of paragraph which would be display 



// to display.textContent=0
// this below func returns if the user clicked an operator.
function isOperator(value){
    return value=='+' || value=='/' || value=='*' || value=='-';

}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {

        var value = this.getAttribute('data-value');
        var text = display.textContent.trim();

        if (isOperator(value)) {
            operator = value;
            operand1 = parseFloat(text);
            display.textContent = "";
        } else if (value == "ac") {
            display.textContent = "";
        } else if (value == "sign") {
            operand1 = parseFloat(text);
            operand1 = -1 * operand1;
            display.textContent = operand1;
        } else if (value == ".") {
            if (text.length && !text.includes('.')) {
                display.textContent = text + '.';
            }
        } else if (value == "%") {
            operand1 = parseFloat(text);
            operand1 = operand1 / 100;
            display.textContent = operand1
        } else if (value == "=") {
            operand2 = parseFloat(text);
            // eval function is used for evaluation, it converts strings to numeric value and then solve 
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);
            if (result) {
                display.textContent = result;
                // giving resultant value to operand 1
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        } else {
            display.textContent += value;
        }
    });
}

// note: parseFloat function is used to change text to numeric value
// add eventListner is used to get the values on which the user clicks..it record clicks
// *text.includes(.) return if the text has decimal already present in it.
// getAttribute function is used to fetch the values that are assinged to the attribute
//like here 
// this.getAttribute('data-value') ----> gives the value of 'data-value' attribute that were assigned during html