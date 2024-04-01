'use strict';

const clearCE = document.getElementById('clearCE');
const clearC = document.getElementById('clearC');
const btnNumAll = document.querySelectorAll('.btn-num-1, .btn-num-2, .btn-num-3, .btn-num-4, .btn-num-5, .btn-num-6, .btn-num-7, .btn-num-8, .btn-num-9, .btn-num-0');
const btnOperationAll = document.querySelectorAll('.btn-division, .btn-multiplication, .btn-plus, .btn-minus');
const btnNumPoint = document.getElementById('point');
const btnEqual = document.querySelector('.btn_equal');
const screenInput = document.getElementById('input');

let operand1 = '';
let operand2 = '';
let operator = '';

function calculator() {
    let result;
    switch (operator) {
        case '+' :
            result = Number(operand1) + Number(operand2);
            break;
            case '-' :
                result = Number(operand1) - Number(operand2);
                break;
                case '*' :
                    result = Number(operand1) * Number(operand2);
                    break;
                    case '/' :
                        if (Number(operand2) === 0) {
                            result = 'Error :)'
                        } else {
                            result = Number(operand1) / Number(operand2);
                        }
                        break;
                        default :
                        result = 'Error :)';
    }
    screenInput.value = result;
    operand1 = '';
    operand2 = '';
    operator = '';
};
                        
  
    btnNumAll.forEach(button => {
       button.addEventListener('click', () => {
        if (!operator) {
            operand1 += button.textContent;
            screenInput.value = operand1;
        } else {
            operand2 += button.textContent;
            screenInput.value = operand2;
        }
    }); 
 });
      
       
   btnOperationAll.forEach(button => {
    button.addEventListener('click', () => {
        if (operand1 && operand2 && operator) {
            calculator()
        }
        operator = button.textContent;
        screenInput.value = operand1 + operand2;
    });
   });
       

   btnEqual.addEventListener('click', () => {
    if(operand1 && operand2 && operator) {
        calculator()
    }
   });

clearC.addEventListener('click', () => {
    operand1 = '';
    operand2 = '';
    operator = '';
    screenInput.value = '';
});

clearCE.addEventListener('click', () => {
    if (!operator) {
        operand1 = operand1.slice(0, -1);
        screenInput.value = operand1;
    } else {
        operand2 = operand2.slice(0, -1);
        screenInput.value = operand1 + operator + operand2;
    }
})


btnNumPoint.addEventListener('click', () => {
    if(!operator) {
        if (!operand1.includes('.')) {
            operand1 += '.';
            screenInput.value = operand1;
        }
    } else {
        if (!operand2.includes('.')) {
            operand2 += '.';
            screenInput.value = operand2;
        }
    }
})
    









































































































































































