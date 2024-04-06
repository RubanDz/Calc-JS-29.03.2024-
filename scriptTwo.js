'use strict';
//Calculator IT Step 07/04/2024
const screenInput = window.document.querySelector('.calc-screen');
const calc = document.querySelector('.calc__btn-container');
const clearBtn = document.getElementById('clearC');
const clearBtnCE = document.getElementById('clearCE');
//
const OPERATORS = {
    division : '/',
    multiplication : '*',
    plus : '+',
    minus : '-',
};
//
const calculateData = {
    num1 : '',
    num2 : '',
    sign : '',
    result : '',
};
//
function minus(num1, num2) {
    return (+num1) - (+num2)
}
function multiplication(num1, num2) {
    return (+num1) * (+num2)
}
function plus(num1, num2) {
    return (+num1) + (+num2)
}
function division(num1, num2) {
    return (+num1) / (+num2)
}
//
function calculate(num1, num2, sign) {
    switch (sign) {
        case OPERATORS.plus :
            calculateData.result = String(plus(num1, num2))
            break;
        case OPERATORS.minus :
            calculateData.result = String(minus(num1, num2))
            break;
        case OPERATORS.division :
            calculateData.result = String(division(num1, num2))
            break;
        case OPERATORS.multiplication :
            calculateData.result = String(multiplication(num1, num2))
            break;
        }
    };
    //очистка input по нажатию на кнопку "С and CE"
    clearBtn.addEventListener('click', function() {
        screenInput.value = '';
        calculateData.num1 = '';
        calculateData.num2 = '';
        calculateData.sign = '';
    });
    clearBtnCE.addEventListener('click', function() {
        screenInput.value = '';
    });
     //-
     function onClickDigits(event) {
        if (event.target.classList.contains('digit')) {
            const pressNum = event.target.textContent;

            if(calculateData.sign === '') {
                screenInput.value += pressNum;
                calculateData.num1 = screenInput.value;
            } else {
                calculateData.num2 += pressNum;
                screenInput.value = calculateData.num2;
            }
        }

     };
     //
     function onClickOperation(event) {
        
        if (event.target.classList.contains('btn_operation')) {
            const pressOperator = event.target.textContent;
            calculateData.sign = pressOperator;
            screenInput.value = pressOperator;
        }
        if (event.target.classList.contains('btn_equal')) {
            console.log('btn_equal');
            screenInput.value = calculateData.result;
            calculateData.num1 = calculateData.result;
            calculateData.num2 = '';
            calculateData.sign = '';
            screen.value = calculateData.num1;
        }
    }
    //
    calc.addEventListener('click', function(event) {
        onClickDigits(event)
        onClickOperation(event)
        calculate(calculateData.num1, calculateData.num2, calculateData.sign)
        console.log(calculateData);
    });

    

          
           
        













        









       
            




  
       
        










        
        
 










  

       





   



