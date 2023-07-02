
// // Домашнее задание 8. (после 19 урока)

// // Решить следующие задачи:
// // Написать цикл, который создает множество параграфов 
// // с каждым десятым числом в промежутке от 100 
// // до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные 
// // параграфы в div с классом numbers.
//===============================================================
// // Найти элемент div с классом "numbers"
// const divElement = document.querySelector(".numbers");
// // // Создать цикл, начиная с 100, уменьшаясь на 10 на каждой итерации, пока не достигнем 50
// for (let i = 100; i >= 50; i-=10) {
//   // Создать новый элемент <p>
//     const paragraph = document.createElement("p");   
//   // Установить содержимое параграфа равным текущему числу в цикле
// paragraph.innerText = i;
// console.log(paragraph)
//   // Добавить созданный параграф внутрь элемента div
//     divElement.appendChild(paragraph);
// }

//================================
// Написать цикл, который проходится по массиву строк, для каждой строки создает
// параграф и добавляет его в div с классом strings_container. Строки взять 
// произвольные.

// // Найти элемент div с классом "strings_container"
// const divElement = document.querySelector(".strings_container");
// const words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit']
// // Создать цикл
// for (let i = 0; i < words.length; i++) {
//     const element = words[i];
//       // Создать новый элемент <p>
//     const paragraph = document.createElement("p"); 
//     // Установить содержимое параграфа 
//     paragraph.innerText = element;
//      // Добавить созданный параграф внутрь элемента div
//     divElement.appendChild(paragraph);
// }
// Написать цикл, который проходится по массиву с объектами - у объектов свойства 
// first_name, last_name и  age (данные взять произвольные) - и создает карточки 
// только для совершеннолетних пользователей. Карточка должна содержать информацию
//  об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом 
//  users_container.

//==========================================================
// Пример массива с объектами пользователей
const users = [
    { first_name: "Иван", last_name: "Иванов", age: 20 },
    { first_name: "Петр", last_name: "Петров", age: 17 },
    { first_name: "Анна", last_name: "Сидорова", age: 25 },
    { first_name: "Мария", last_name: "Смирнова", age: 16 }
  ];
  
  // Находим div с классом "users_container"
  const container = document.querySelector('.users_container');
  
  // Цикл, проходящий по массиву пользователей и создающий карточки для совершеннолетних
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    
    if (user.age >= 18) {
      // Создаем элемент div для карточки пользователя
      const card = document.createElement('div');
      card.classList.add('user_card');
      
      // Создаем элементы для имени, фамилии и возраста пользователя
      let name = document.createElement('p');
      name.textContent = user.first_name + ' ' + user.last_name;
      
      let age = document.createElement('p');
      age.textContent = 'Возраст: ' + user.age;
      
      // Добавляем элементы в карточку
      card.appendChild(name);
      card.appendChild(age);
      
      // Добавляем карточку в контейнер
      container.appendChild(card);
    }
  }
  
