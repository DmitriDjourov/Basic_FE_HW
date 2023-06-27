// Домашнее задание 7. (после 17 урока)
console.log(`=================== 1 ======================`)
//===============================================================
// Напишите функцию, которая принимает два числовых аргумента и 
// возвращает наименьшее из них.

function createNum(a, b) {
    let min = a
        if (a > b) {
            min = b
            }
            return min
            }
    console.log(createNum(4, 16))
    console.log(`==================== 2 =====================`)
//===============================================================
// Напишите функцию, которая принимает два числовых аргумента и 
// выводит в консоль все четные числа от большего к меньшему.

function createNum2(a, b) {        
        let min = b
        let max = a
        if (a < b) {
            min = a
            max = b
        }
        for(let i = max; i >= min; i--) {
            if(i % 2 === 0) {  
                console.log(i)
            }
        }
        
    }    
    createNum2(21, 4)
    console.log(`================== 3 =======================`)
//===============================================================
// Напишите функцию power, которая принимает два числовых аргумента  (основание 
// степени и саму степень) и возвращает число в указанной степени. Значение
// степени должно быть указано по умолчанию 2.   
function power(a, b = 2) {
    console.log(a ** b)
}
power(5)
power(10)
power(3, 3)
console.log(`==================== 4 =====================`)
//===============================================================
// Напишите функцию, которая принимает числовой аргумент
//  n и считает сумму чисел от 1 до n.
function numN(n) {
    let NumSum = 0
    for(let i = 1; i <= n; i++){
        NumSum = NumSum + i
       }
    return NumSum
}
console.log(numN(10)) 
console.log(`=================== 5 ======================`)
// Напишите функцию, которая принимает два числовых 
// аргумента n и m и считает сумму четных чисел и нечетных 
// чисел от n до m. Суммы выведите в консоль 
// (в начале сумму четных чисел, а затем сумму нечетных).
function createNum3(n, m) { 
    let evenSum = 0
    let oddSum = 0
    for(let i = n; i <= m; i++) {
        if(i % 2 === 0) {  
            // console.log(i)  
            evenSum = evenSum + i       
        }
        else {
            // console.log(i)
            oddSum = oddSum + i   
        }
    }   
    console.log(`сумма четных чисел ${evenSum}`) 
    console.log(`сумма нечетных чисел ${oddSum}`) 
    // return {evenSum, oddSum}
    
}  
createNum3(3, 16)
// console.log(createNum3(3, 16))

console.log(`=================== 6 ======================`)
// Напишите функцию, которая принимает в качестве аргументов 
// массив строк, а возвращает первый самый длинный элемент массива.
// Если входной массив пуст, функция возвращает null. 
// Если есть несколько одинаковых по длине элементов - функция
// возвращает первый из этих элементов. 
// Пример: [ 'one', 'two', 'three' ] => 'three'
function findLongestString(arr) {
    if (arr.length === 0) {
    return null;
    }
    let longestString = arr[0];

    for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longestString.length) {
        longestString = arr[i];
        }
    }
    return longestString;
}

const arr = ['one', 'two', 'three'];
const longestString = findLongestString(arr);
console.log(longestString); 
