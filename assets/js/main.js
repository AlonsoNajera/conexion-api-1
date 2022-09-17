console.log("Entro al main.js");

//FUNCION DE FLECHA
// randomImage=()=> {


// }

const randomImage=()=> {
    console.log("Entro a la Funcion randomImage");

    fetch('https://picsum.photos/200/300')

          
            .then((data) => {
                console.log(data);
                document.getElementById('imgRandom').src=data.url;
            })
            .catch((error) => {
                console.log("Ocurrio un error!");
            });


}

