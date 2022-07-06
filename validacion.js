//Haz tú validación en javascript acá

let regExName = /^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$/;
let regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
let regExAsunto = /^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$/;
let regExTextarea = /^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$/;

function funcionValidadora (){
    console.log(document.querySelector('[name="nombre"]').value);
    if(regExName.test(document.querySelector('[name="nombre"]').value)==true){console.log("nombre cumple regex")}else{console.log("nombre no cumple regex")} // esta haciendo evaluacion sobre la primer letra
    
    console.log(document.querySelector('[name="email"]').value);
    if(regExEmail.test(document.querySelector('[name="email"]').value)==true){console.log("email cumple regex")}else{console.log("email no cumple regex")}

    console.log(document.querySelector('[name="asunto"]').value);
    if(regExAsunto.test(document.querySelector('[name="asunto"]').value)==true){console.log("asunto cumple regex")}else{console.log("asunto no cumple regex")}
    
    console.log(document.querySelector(".formcontato__textarea").value);
    
    
}

let botonEnviar = document.querySelector(".formcontato__botao");

botonEnviar.addEventListener("click", function(event){
                                        event.preventDefault();
                                        funcionValidadora();
                                        })
