// Домашнее задание 6. (после 14 урока)
// Напишите цикл for, который выводит консоль каждое второе число от 0 до 10
console.log(`Напишите цикл for, который выводит консоль каждое второе число от 0 до 10`)
for (let i = 0; i <= 10; i = i + 2) {      
    console.log(i);  
    }
    console.log(`----------------`)
// ======================================================================================
// Напишите цикл for, который выводит в консоль  все числа от 55 до 20 
console.log(`Напишите цикл for, который выводит в консоль  все числа от 55 до 20`);
for (let i = 55; i >= 22; i = i - 1) {
    console.log(i);  
        }
console.log(`----------------`)
// ======================================================================================
// Дан массив numbers. Вывести в консоль все числа из массива
// const numbers = [3, 5, 11, 2, 8, 1, 6];
// Сформировать новый массив numbers_squared и передать в него все элементы из массива numbers, возведенные в квадрат
console.log(`Дан массив numbers. Вывести в консоль все числа из массива`)
const numbers = [3, 5, 11, 2, 8, 1, 6];
const numbers_squared =[];

// console.log(last_element)
for (let i = 0; i < numbers.length; i++){
    console.log(`Элемент из массива numbers`);
    console.log(numbers[i]);
    numbers_squared[i] = (numbers[i]**2);
    console.log(`Массив numbers_squared (элемент из массива numbers, возведенный в квадрат)`);

    console.log(numbers_squared[i]);    
    console.log(`-------------------------------------------------------`) 
}
// ======================================================================================
// Создать переменную last_elem и передать в нее последний элемент из сформированного
// массива numbers_squared (обратиться к элементу массива по индексу)
console.log(`Создать переменную last_elem и передать в нее последний элемент из сформированного массива numbers_squared (обратиться к элементу массива по индексу)`) 
let last_element= 0;

if  (i = numbers_squared.length-1){
        last_element = numbers_squared[i];
     // console.log(numbers_squared[i]);
        console.log(last_element);
}
console.log(`-------------------------------------------------------`); 
// ======================================================================================
// Дан объект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name 
// is <FIRST_NAME> <LAST_NAME>. He is <AGE> years old’
console.log(`Дан объект user. Используя данные из объекта, сформировать строку`); 
const user = {
    first_name: 'Ivan', 
    last_name: 'Ivanov', 
    age: 20, 
    salary: 500
    }

    console.log(`------------------- var 1 из массива ----------------------------`); 
    console.log(`User’s name is ${user.first_name} ${user.last_name}He is ${user.age} years old`);
    
    console.log(`----------------var 2 desctructurization ------------------------`);
    const  {first_name,last_name,age} = user;
    console.log(`User’s name is ${first_name} ${last_name}He is ${age} years old`);
    
    console.log(`-------------------------------------------------------`);    
