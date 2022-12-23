function curiosidad(){

let items = document.querySelectorAll('li');

items[0].innerHTML = "El <strong>52%</strong> del tráfico de todo Internet es creado por Bots (entre inofensivos y maliciosos)."

let color = prompt("Elija un color para el fondo!(escribalo en ingles)")
let color2 = prompt("Elija un color para el texto!(escribalo en ingles)")
let color3 = prompt("Elija un color para el borde del texto de las cajas en posiciones pares!(escribalo en ingles)")

items[0].style.backgroundColor = `${color}`;
items[0].style.fontWeight = "bold";

items.forEach( item => {

    //chequeo si el nodo no tiene ninguna clase
    if(item.classList.length == 0){
        item.classList.add('par')
    }

    item.style.backgroundColor = color;
    item.style.color = color2;
    item.style.borderColor = color3;
    
})

}