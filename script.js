'use strict';
// Объявление переменных и элементов DOM
const clearCE = document.getElementById('clearCE');
const clearC = document.getElementById('clearC');
const btnNumAll = document.querySelectorAll('.btn-num-1, .btn-num-2, .btn-num-3, .btn-num-4, .btn-num-5, .btn-num-6, .btn-num-7, .btn-num-8, .btn-num-9, .btn-num-0');
const btnOperationAll = document.querySelectorAll('.btn-division, .btn-multiplication, .btn-plus, .btn-minus');
const btnNumPoint = document.getElementById('point');
const btnEqual = document.querySelector('.btn_equal');
const screenInput = document.getElementById('input');

// const btnMinus = document.querySelector('.btn-minus');

//Объявление переменных для операндов и операторов
let operand1 = '';
let operand2 = '';
let operator = '';

//выполняет математические операции в зависимости от значения переменной operator
//И выводит значения на экран ввода
function calculator() {
    let result; //результат вычеслений здесь!
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
    screenInput.value = result; //То же, что и result
    operand1 = ''; // сбрасывает в пустую строку operand1, после выполнения операции
    operand2 = ''; // сбрасывает в пустую строку operand2, после выполнения операции
    operator = ''; //сбрасывает в пустую строку operator, после выполнения операции
};
                        
 //Обработка событий для кнопок Numbers 
    btnNumAll.forEach(button => {
       button.addEventListener('click', () => {
        if (!operator) {
            operand1 += button.textContent;
            screenInput.value = operand1; // значения на экране
        } else {
            operand2 += button.textContent;
            screenInput.value = operand2; // значение на экране
        }
    }); 
 });
      
 //Обработка событий для кнопок с операциями
 //Если все установленно правильно, вызывается функция calculator()        
   btnOperationAll.forEach(button => {
    button.addEventListener('click', () => {
        if (operand1 && operand2 && operator) {// проверяет, установленны ли значения текущих элементов
            calculator() //Если все ок, вызывается функция выше
        }
        operator = button.textContent; // значение функции устанавливается сюда
        screenInput.value = operand1 + operand2; // суммируется и отображается на экране
    });
   });
       
//Обработчик событий для кнопки равно
//Если все значения установлены, вызывается функция calculator() 
   btnEqual.addEventListener('click', () => {
    if(operand1 && operand2 && operator) {
        calculator()
    }
   });

//Обработчик событий для кнопки C
clearC.addEventListener('click', () => {
    operand1 = ''; //обнуление значений переменных
    operand2 = '';
    operator = '';
    screenInput.value = ''; //все данные и операторы сбрасываются, экран очищается
});

//Обратчик событий для кнопки CE
//Удаляется последний символ из текущего операнда, если оператор не установлен
clearCE.addEventListener('click', () => {
    if (!operator) {
        operand1 = operand1.slice(0, -1);
        screenInput.value = operand1; //обновление значения
    } else {
        operand2 = operand2.slice(0, -1);
        screenInput.value = operand1 + operator + operand2;
    }
});

//Обработчик событий для кнопки point
//Добавляет точку к текущему операнду, если она еще не присутствует в нем
btnNumPoint.addEventListener('click', () => {
    if(!operator) {
        if (!operand1.includes('.')) {
            operand1 += '.'; // проверка, содержит ли уже точку (точку можно ввести только один раз!!!)
            screenInput.value = operand1;
        }
    } else {
        if (!operand2.includes('.')) {
            operand2 += '.';
            screenInput.value = operand2;
        }
    }
});
    
// .includes() проверяет содержит ли строка определенную подстроку

// .forEach() метод массивов, позволяет выполнить некоторое действие для
// каждого элемента массива  без необходимости использования цикла for or while





















//Добавить оператор "-" возможность вставить перед цифрой

// btnMinus.addEventListener('click', () => {
//     if (!operator) {
//         operand1 = '-' + operand1;
//         screenInput.value = operand1;
//     } else {
//         operand2 = '-' + operand2;
//         screenInput.value = operand2;
//     }
// });





































































































































































