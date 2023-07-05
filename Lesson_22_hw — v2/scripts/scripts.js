// Домашнее задание 9. (после 22 урока)
// Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона
// на зеленый и уменьшать его до размеров 100х100px.

const RedSquareElem = document.querySelector(".red_square")
const redSquareButton = document.querySelector(".red_square_button")

redSquareButton.addEventListener("mousedown",function ()
{
    RedSquareElem.style.backgroundColor = "green"
    RedSquareElem.style.height = "100px"
    RedSquareElem.style.width = "100px" 
})
//==================================================
// ●	Создать кнопку и розовый квадрат с размерами 200х200px. 
// При клике на кнопку менять цвет на синий и выводить в консоль
// обновленный цвет квадрата.
const pinkSquareElem = document.querySelector(".pink_square")
const pinkSquareButton = document.querySelector(".pink_square_button")

pinkSquareButton.addEventListener("mousedown",function ()
{
    pinkSquareElem.style.backgroundColor = "blue"
    console.log(pinkSquareElem.style.backgroundColor)
})
//==================================================
// ●	Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку
//  увеличивать высоту и ширину квадрата на 20px.

const whiteSquareElem = document.querySelector(".white_square")
const whiteSquareButton = document.querySelector(".white_square_button")

whiteSquareButton.addEventListener("mousedown",function ()
{
    whiteSquareElem.style.width =  "170px"
    whiteSquareElem.style.height = "170px"
    whiteSquareElem.style.margin = "10px 55px 25px 35px"
})
// ===================================================
// ●	Создать кнопку и div с классом root. При клике на кнопку в 
// div создается параграф синего цвета. Текст параграфа произвольный.

const divRootElem = document.querySelector(".root")
const bluePButton = document.querySelector(".blue_p_button")


bluePButton.addEventListener("mousedown",function ()
{
const pElem = document.createElement("p") 
pElem.innerText = "Ну написано же...не трогать... :)"
pElem.style.display = "flex" 
pElem.style.margin = "5px"
pElem.style.fontSize = "24px"
pElem.style.color = "blue"
divRootElem.append(pElem)    
})

//==============================================
// ●	Создать кнопку и div с классом root. При клике на 
// кнопку в div создаются по очереди параграфы синего и 
// зеленого цветов. Первый цвет синий.

const divRoot2Elem = document.querySelector(".root2")
const blueGreenPButton = document.querySelector(".blue_green_p_button")

blueGreenPButton.addEventListener("mousedown",function ()
{
const pElem5 = document.createElement("p") 
pElem5.innerText = "...би-би-л@ть......"
pElem5.style.display = "flex" 
pElem5.style.margin = "5px"
pElem5.style.fontSize = "24px"
pElem5.style.color = "blue"
divRoot2Elem.append(pElem5) 
})

blueGreenPButton.addEventListener("mousedown",function ()
{
const pElem6 = document.createElement("p") 
pElem6.innerText = "...би-би-л@ть..... :)"
pElem6.style.display = "flex" 
pElem6.style.margin = "5px"
pElem6.style.fontSize = "24px"
pElem6.style.color = "green"
divRoot2Elem.append(pElem6)    
})