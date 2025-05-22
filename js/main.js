window.addEventListener("load",init);

function init(){
    //Inicializamos accordions
    let accordions = document.querySelectorAll(".accordion");

    for(let a of accordions){
        a.addEventListener("click",toogleAccordion);
    }
}

function toogleAccordion(){
    this.classList.toggle("closed");
}

function openModal(titulo,texto){
    let modal = document.querySelector(".modal");

    modal.querySelector(".modal-header-title").innerHTML=titulo;
    modal.querySelector(".modal-body").innerHTML=texto;

    modal.classList.remove("closed");
}

function closeModal(){
    let modal = document.querySelector(".modal");
    modal.classList.add("closed");
}

// //Función para funcionamiento con OnClik
// function toogleAccordion(nodo){
//     nodo.classList.toggle("closed");
// }
