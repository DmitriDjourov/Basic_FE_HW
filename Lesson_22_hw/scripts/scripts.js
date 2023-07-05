// Домашнее задание 9. (после 22 урока)
// Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона
// на зеленый и уменьшать его до размеров 100х100px.

const divElem = document.createElement("div") // квадратик <div></div>
divElem.style.width = "200px" // <div style="width: 150px;"></div>
divElem.style.height = "200px"
divElem.style.border = "1px solid black"
divElem.style.margin = "5px"
divElem.style.backgroundColor = "red"
document.body.append(divElem)

const buttonElem = document.createElement("button")
buttonElem.style.width = "100px" // <div style="width: 150px;"></div>
buttonElem.style.height = "30px"
buttonElem.style.border = "1px solid black"
buttonElem.style.margin = "10px 55px 25px"
buttonElem.style.backgroundColor = "gray"
buttonElem.style.cursor = "pointer"
buttonElem.setAttribute
document.body.append(buttonElem)

buttonElem.addEventListener("mousedown",function ()
{
    divElem.style.backgroundColor = "green"
    divElem.style.height = "100px"
    divElem.style.width = "100px"
    // buttonElem.style.margin = "5px"
})
//==================================================
// ●	Создать кнопку и розовый квадрат с размерами 200х200px. 
// При клике на кнопку менять цвет на синий и выводить в консоль
// обновленный цвет квадрата.

const divElem2 = document.createElement("div") // квадратик <div></div>
divElem2.style.width = "200px" // <div style="width: 150px;"></div>
divElem2.style.height = "200px"
divElem2.style.border = "1px solid black"
divElem2.style.margin = "5px"
divElem2.style.backgroundColor = "pink"
document.body.append(divElem2)

const buttonElem2 = document.createElement("button")
buttonElem2.style.width = "100px" // <div style="width: 150px;"></div>
buttonElem2.style.height = "30px"
buttonElem2.style.border = "1px solid black"
buttonElem2.style.margin = "10px 55px 25px"
buttonElem2.style.backgroundColor = "gray"
buttonElem2.style.cursor = "pointer"
document.body.append(buttonElem2)

buttonElem2.addEventListener("mousedown",function ()
{
    divElem2.style.backgroundColor = "blue"
    console.log(divElem2.style.backgroundColor)
})
//==================================================
// ●	Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку
//  увеличивать высоту и ширину квадрата на 20px.

const divElem3 = document.createElement("div") // квадратик <div></div>
divElem3.style.width = "150px" // <div style="width: 150px;"></div>
divElem3.style.height = "150px"
divElem3.style.border = "1px solid black"
divElem3.style.margin = "5px"
document.body.append(divElem3)

const buttonElem3 = document.createElement("button")
buttonElem3.style.width = "100px" // <div style="width: 150px;"></div>
buttonElem3.style.height = "30px"
buttonElem3.style.border = "1px solid black"
buttonElem3.style.margin = "10px 55px 25px 30px"
buttonElem3.style.backgroundColor = "gray"
buttonElem3.style.cursor = "pointer"
document.body.append(buttonElem3)

buttonElem3.addEventListener("mousedown",function ()
{
    
    divElem3.style.width =  "170px"
    divElem3.style.height = "170px"
    buttonElem3.style.margin = "10px 55px 25px 35px"
})
// ===================================================
// ●	Создать кнопку и div с классом root. При клике на кнопку в 
// div создается параграф синего цвета. Текст параграфа произвольный.
const divElem4 = document.createElement("div") // квадратик <div></div>
divElem4.classList.add("root")
document.body.append(divElem4)

const buttonElem4 = document.createElement("button")
buttonElem4.style.width = "100px" // <div style="width: 150px;"></div>
buttonElem4.style.height = "30px"
buttonElem4.style.border = "1px solid black"
buttonElem4.style.margin = "10px 55px 25px 30px"
buttonElem4.style.backgroundColor = "gray"
buttonElem4.style.cursor = "pointer"
document.body.append(buttonElem4)

buttonElem4.addEventListener("mousedown",function ()
{
const pElem = document.createElement("p") // <p></p>
pElem.innerText = "Какой-то текст"
pElem.style.display = "flex" 
pElem.style.margin = "5px"
pElem.style.fontSize = "24px"
pElem.style.color = "blue"
document.body.append(pElem)    
})

//==============================================
// ●	Создать кнопку и div с классом root. При клике на 
// кнопку в div создаются по очереди параграфы синего и 
// зеленого цветов. Первый цвет синий.

const divElem5 = document.createElement("div") // квадратик <div></div>
divElem5.classList.add("root")
// display: flex;
// justify-content: center;
divElem5.style.display = "flex"
divElem5.style.justifyContent = "center"
document.body.append(divElem5)

const buttonElem5 = document.createElement("button")
buttonElem5.style.width = "100px" // <div style="width: 150px;"></div>
buttonElem5.style.height = "30px"
buttonElem5.style.border = "1px solid black"
buttonElem5.style.margin = "10px 55px 25px 30px"
buttonElem5.style.backgroundColor = "gray"
buttonElem5.style.cursor = "pointer"
document.body.append(buttonElem5)

buttonElem5.addEventListener("mousedown",function ()
{
const pElem5 = document.createElement("p") // <p></p>
pElem5.innerText = "Какой-то текст 2"
pElem5.style.display = "flex" 
pElem5.style.margin = "5px"
pElem5.style.fontSize = "24px"
pElem5.style.color = "blue"
document.body.append(pElem5) 
})

buttonElem5.addEventListener("mousedown",function ()
{
const pElem6 = document.createElement("p") // <p></p>
pElem6.innerText = "Какой-то текст 2"
pElem6.style.display = "flex" 
pElem6.style.margin = "5px"
pElem6.style.fontSize = "24px"
pElem6.style.color = "green"
document.body.append(pElem6)    
})