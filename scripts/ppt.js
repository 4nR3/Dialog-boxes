function ppt(){

let seguir,contcompu=0,contjugador=0;

seguir=confirm("Quiere jugar una partida de Piedra, Papel o Tijera al mejor de 3?")

while(seguir){

let usuario = prompt("Elegi piedra(0), papel(1) o tijera(2)...")

if(usuario== '' || usuario == null)
    break;

let computadora = Math.floor(Math.random() * 3);

let ppt = ["piedra","papel", "tijera"];


alert("La computadora eligio " + ppt[computadora]);

if (usuario == computadora) {
    alert("Empate");
}
else
{
    if((usuario+1)%3==computadora)
        {console.log("Perdiste")
        alert("La computadora gana 1 punto");
        contcompu++;}
    else
        {console.log("Ganaste")
        alert("Ganaste 1 punto");
        contjugador++;}
}

if(contjugador==2)
    {alert("Felicidades ganaste 2 de 3 juegos");
    seguir=false;}
else
if(contcompu==2)
    {alert("Lo siento. Perdiste 2 de 3 juegos");
    seguir=false;}
else
    {seguir=confirm("Desea seguir jugar?")}

}

alert("Adios");

}