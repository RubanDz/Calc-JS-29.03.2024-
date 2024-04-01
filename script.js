// 'use strict';
// //button CE and C
// let clearCE = document.getElementById('clearCE');
// let clearC = document.getElementById('clearC');

// //button numbers
// let btnNum1 = document.querySelector('.btn-num-1');
// btnNum1.addEventListener('click', () => {
//     console.log(btnNum1);
// });
// btnNum1 = btnNum1.textContent;

// let btnNum2 = document.querySelector('.btn-num-2');
// btnNum2.addEventListener('click', () => {
//     console.log(btnNum2);
// });
// btnNum2 = btnNum2.textContent;

// let btnNum3 = document.querySelector('.btn-num-3');
// btnNum3.addEventListener('click', () => {
//     console.log(btnNum3);
// });
// btnNum3 = btnNum3.textContent;

// let btnNum4 = document.querySelector('.btn-num-4');
// btnNum4.addEventListener('click',  () => {
//     console.log(btnNum4);
// });
// btnNum4 = btnNum4.textContent;

// let btnNum5 = document.querySelector('.btn-num-5');
// btnNum5.addEventListener('click',  () => {
//     console.log(btnNum5);
// });
// btnNum5 = btnNum5.textContent;

// let btnNum6 = document.querySelector('.btn-num-6');
// btnNum6.addEventListener('click',  () => {
//     console.log(btnNum6);
// });
// btnNum6 = btnNum6.textContent;

// let btnNum7 = document.querySelector('.btn-num-7');
// btnNum7.addEventListener('click',  () => {
//     console.log(btnNum7);
// });
// btnNum7 = btnNum7.textContent;

// let btnNum8 = document.querySelector('.btn-num-8');
// btnNum8.addEventListener('click',  () => {
//     console.log(btnNum8);
// });
// btnNum8 = btnNum8.textContent;

// let btnNum9 = document.querySelector('.btn-num-9');
// btnNum9.addEventListener('click',  () => {
//     console.log(btnNum9);
// });
// btnNum9 = btnNum9.textContent;

// let btnNum0 = document.querySelector('.btn-num-0');
// btnNum0.addEventListener('click',  () => {
//     console.log(btnNum0);
// });
// btnNum0 = btnNum0.textContent;

// const btnNumAll = document.querySelectorAll('.btn-num-1, .btn-num-2, .btn-num-3, .btn-num-4, .btn-num-5, .btn-num-6, .btn-num-7, .btn-num-8, .btn-num-9, .btn-num-0');


// //button operators
// let btnOperationDivision = document.querySelector('.btn-division');
// btnOperationDivision.addEventListener('click', () => {
//     console.log(btnOperationDivision);
// })
// btnOperationDivision = btnOperationDivision.textContent;

// let btnOperationMultiplication = document.querySelector('.btn-multiplication');
// btnOperationMultiplication.addEventListener('click', () => {
//     console.log(btnOperationMultiplication);
// })
// btnOperationMultiplication = btnOperationMultiplication.textContent;

// let btnOperationPlus = document.querySelector('.btn-plus');
// btnOperationPlus.addEventListener('click', () => {
//     console.log(btnOperationPlus);
// })
// btnOperationPlus = btnOperationPlus.textContent;

// let btnOperationMinus = document.querySelector('.btn-minus');
// btnOperationMinus.addEventListener('click', () => {
//     console.log(btnOperationMinus);
// })
// btnOperationMinus = btnOperationMinus.textContent;
// const btnOperationAll = document.querySelectorAll('.btn-division, .btn-multiplication, .btn-plus, .btn-minus');



// //button point
// let btnNumPoint = document.getElementById('point');

// //button equal
// let btnEqual = document.querySelector('.btn_equal');

// //button input
// let screenInput = document.getElementById('input');





////////////////////////////////////////////////////////////////

// let btnTextContent;
// btnNumAll.forEach(function(btn) {
//     btn.addEventListener('click', function() {
//         btnTextContent = btn.textContent;
//         console.log(btnTextContent);
//     })
// })
        
// let operationTextContent;
// btnOperationAll.forEach(function(operation) {
//     operation.addEventListener('click', function() {
//         operationTextContent = operation.textContent;
//         console.log(operationTextContent);
//     })
// })



        
//  switch (operationTextContent) {
//     case '+': 
//     alert(btnTextContent + btnTextContent)
        
//         break;
 
//     default:
//         break;
//  }      



// let calculator = {
//     arrNum : [
//         btnNum1,
//         btnNum2,
//         btnNum3,
//         btnNum4,
//         btnNum5,
//         btnNum6,
//         btnNum7,
//         btnNum8,
//         btnNum9,
//         btnNum0,
//     ],
//     arrOperation : [
//         btnOperationDivision,
//         btnOperationMultiplication,
//         btnOperationPlus,
//         btnOperationMinus,
//     ],
    
// }

// for (let i = 0; i < calculator.arrNum.length; i++) {
//     calculator.arrNum[i].addEventListener('click', () => {
//         console.log(calculator.arrNum[i].textContent);
//     })
// }



// for (let i = 0; i < calculator.arrOperation.length; i++) {
//     calculator.arrOperation[i].addEventListener('click', () => {
//         console.log(calculator.arrOperation[i].textContent);
//     })
// }



// let operatorDefinition = function() {
//     for (let i = 0; i < calculator.arrOperation.length; i++) {
//         calculator.arrOperation[i].addEventListener('click', () => {
//             let globalOperation = calculator.arrOperation[i].textContent;
//             console.log(globalOperation);
//         })
//     }
// }
// operatorDefinition()
            
   

// if (operatorDefinition() == '+') {
//     console.log('+');
// } else {
//     console.log('');
// }
///////////////////////////////////////////////////////


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
                            result = 'Ошибка: деление на "0" !'
                        } else {
                            result = Number(operand1) / Number(operand2);
                        }
                        break;
                        default :
                        result = 'Недопустимая операция!'
    }
    screenInput.value = result;
    operand1 = '';
    operand2 = '';
    operator = '';
}
                        
  

    btnNumAll.forEach(button => {
       button.addEventListener('click', () => {
        if (!operator) {
            operand1 += button.textContent;
            screenInput.value = operand1;
        } else {
            operand2 += button.textContent;
            screenInput.value = operand2;
        }
        // screenInput.value = operand1 + operand2;
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
    









































































































































































