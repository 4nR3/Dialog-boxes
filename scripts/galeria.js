function galeria(){

const imagenes = document.querySelectorAll('img');
const defaultUrl = "https://play-lh.googleusercontent.com/xD78B_Wcf9q5iWhKIQS8n1NwdfkVFDJjjUubkcd6rHaiHpOYmFVMoeQ5hbomDGekvhQ";


imagenes.forEach((item, index) => {
    let url = prompt(`Ingresá la URL de la imagen ${index +1}`);

    if(url==null || url=="")
        {alert("No se ingreso link. Se utilizara la imagen predeterminada")
        url=defaultUrl;}

    item.setAttribute('src', url);
});

}