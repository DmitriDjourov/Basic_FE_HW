// Домашнее задание 10. (после 24 урока)

// 1. Создать в html форму с тремя инпутами (имя, фамилия, возраст). Написать скрипт, 
// который при отправке формы выводит собранные данные в консоль.

    // const idFormElem = document.querySelector("#id_form")
    // const personFirstNameInp = document.querySelector(".person_first_name")
    // const personLastNameInp = document.querySelector(".person_last_name")
    // const personalAgeInp = document.querySelector(".person_age")

    //  idFormElem.addEventListener("submit", function (event) {
    //     event.preventDefault()
    //     console.log(personFirstNameInp.value)
    //     console.log(personLastNameInp.value)
    //     console.log(personalAgeInp.value)
    //     idFormElem.reset()
    //     personFirstNameInp.focus()
    //   })

// 2. Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив users в виде объекта.

    // const idFormElem = document.querySelector("#id_form")
    // const personFirstNameInp = document.querySelector(".person_first_name")
    // const personLastNameInp = document.querySelector(".person_last_name")
    // const personalAgeInp = document.querySelector(".person_age")
    // const users = []
    // idFormElem.addEventListener("submit", function (event) {
    //     event.preventDefault()
    //     const usersObject = {
    //         name: personFirstNameInp.value,
    //         last_name: personLastNameInp.value,
    //         age: +personalAgeInp.value
    //     }
    //     users.push(usersObject)
    //     console.log(users)
    // })

// 3. Реализовать функцию rerender. Эта функция очищает контейнер с карточками 
// и создает множество карточек с пользователями из массива. Настроить rerender 
// при добавлении нового пользователя.

// function createUsersCard(name, last_name, age) {
//     const divElem = document.createElement("div")
//     divElem.classList.add("user-item")
//     const pName = document.createElement("p")
//     pName.innerText = name
//     const pLastName = document.createElement("p")
//     pLastName.innerText = last_name    
//     const pAge = document.createElement("p")
//     pAge.innerText = age
//     divElem.append(pName, pLastName, pAge)
//     return divElem
// }

// const usersContainer = document.querySelector(".user_container")
//     function rerender() {
//     usersContainer.innerHTML = ""        
//     if (users.length === 0) {
//         const h1Elem = document.createElement("h1")
//         h1Elem.innerText = "Список пуст"
//         usersContainer.append(h1Elem)
//         return
//     }
//     for (let i = 0; i < users.length; i++) {
//         const { name, last_name, age} = users[i]
//         const usersElem = createUsersCard(name, last_name, age)
//         usersContainer.append(usersElem)
//     }
// }

// const idFormElem = document.querySelector("#id_form")
// const personFirstNameInp = document.querySelector(".person_first_name")
// const personLastNameInp = document.querySelector(".person_last_name")
// const personalAgeInp = document.querySelector(".person_age")
// const users = []
// idFormElem.addEventListener("submit", function (event) {
//     event.preventDefault()
//     const usersObject = {
//         name: personFirstNameInp.value,
//         last_name: personLastNameInp.value,
//         age: +personalAgeInp.value
//     }
//     users.push(usersObject)
//     console.log(users)
//     rerender()
//     idFormElem.reset()
//     personFirstNameInp.focus()
// })

// 4. Доработать rerender таким образом, чтобы при двойном клике по карточке 
// из массива удалялся пользователь по id и вызывался rerender.

function createUsersCard(name, last_name, age) {
    const divElem = document.createElement("div")
    divElem.classList.add("user-item")
    const pName = document.createElement("p")
    pName.innerText = name
    const pLastName = document.createElement("p")
    pLastName.innerText = last_name    
    const pAge = document.createElement("p")
    pAge.innerText = age
    divElem.append(pName, pLastName, pAge)
    return divElem
}

const usersContainer = document.querySelector(".user_container")
    function rerender() {
    usersContainer.innerHTML = ""        
    if (users.length === 0) {
        const h1Elem = document.createElement("h1")
        h1Elem.innerText = "Список пуст"
        usersContainer.append(h1Elem)
        return
    }
    for (let i = 0; i < users.length; i++) {
        const { name, last_name, age} = users[i]
        const usersElem = createUsersCard(name, last_name, age)
        usersContainer.append(usersElem)
        usersElem.addEventListener("dblclick", function () {
        users.splice(i, 1)        
        rerender() 
        })
    }
}

const idFormElem = document.querySelector("#id_form")
const personFirstNameInp = document.querySelector(".person_first_name")
const personLastNameInp = document.querySelector(".person_last_name")
const personalAgeInp = document.querySelector(".person_age")
const users = []
idFormElem.addEventListener("submit", function (event) {
    event.preventDefault()
    const usersObject = {
        name: personFirstNameInp.value,
        last_name: personLastNameInp.value,
        age: +personalAgeInp.value
    }
    users.push(usersObject)
    console.log(users)
    rerender()
    idFormElem.reset()
    personFirstNameInp.focus()
})



