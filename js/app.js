// MENU RESPONSIVE
let btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResposive = document.getElementById("menuBar"),
    enlaces = document.getElementById("enlaces");

    //CLICK ABRIR
    btnMenuOpen.addEventListener("click", function (){
        menuResposive.classList.add("active");
    });

    //CLICK CERRAR
    btnMenuClose.addEventListener("click", function (){
        menuResposive.classList.remove("active");
    });

    // CERRAR MENU CON ELEMENTOS DE ENLACES
    enlaces.addEventListener("click", function(){
        menuResposive.style.transitionDelay = "0.5s"
        menuResposive.classList.remove("active");
    });



// SLIDER
let contenedor = document.querySelector('.slider'),
    btnIzquierdo = document.getElementById("btn-izquierda"),
    btnDerecho = document.getElementById("btn-derecha");

    //EVENTO PARA EL BOTON DERECHO
    btnDerecho.addEventListener("click", function(){
        contenedor.scrollLeft += contenedor.offsetWidth;
    });

    //EVENTO PARA EL BOTON IZQUIERDO
    btnIzquierdo.addEventListener("click", function(){
        contenedor.scrollLeft -= contenedor.offsetWidth;
    });



// VALIDACION DE FORMULARIO
let formulario = document.getElementById("formulario");

    function validar(e){
        let inputNombre = document.getElementById("nombre"),
            inputEmail = document.getElementById("email"),
            inputComents = document.getElementById("comentarios"),
            alertSuccess = document.getElementById("alertSuccess"),
            alertError = document.getElementById("alertError");

        if (inputNombre.value == 0 || inputEmail.value == 0 || inputComents.value == 0) {
            e.preventDefault();
            alertError.classList.remove("hide");
            alertError.classList.add("show");

            setTimeout(function() {
                alertError.classList.remove("show");
                alertError.classList.add("hide");
            }, 2000);
        } else {
            e.preventDefault();
            alertSuccess.classList.remove("hide");
            alertSuccess.classList.add("show");

            setTimeout(function() {
                alertSuccess.classList.remove("show");
                alertSuccess.classList.add("hide");
            }, 2000);

            inputNombre.value = "";
            inputEmail.value = "";
            inputComents.value = "";
        }
    }

// EVENTOS DEL FORMULARIO
formulario.addEventListener("submit", validar);


//SCROLL TOP
let btnTop = document.getElementById("btn-top"),
    logo = document.getElementById("logo");

//DETECTAR SCROLL
window.addEventListener("scroll", function(){
    let scroll = document.documentElement.scrollTop,
        fullSize = document.documentElement.offsetHeight,
        sizeVP = document.documentElement.clientHeight;

    if (scroll > 100) {
        btnTop.classList.add("show");
    } else {
        btnTop.classList.remove("show");
    }


    // MODIFICAR FINAL DE PAGINA
    if (fullSize == (scroll + sizeVP)) {
        btnTop.classList.add("scrollFinal");
    } else {
        btnTop.classList.remove("scrollFinal");
    }
});


// DETECTAR CLICK
btnTop.addEventListener("click", function(){
    window.scrollTo(0,0);
});

// DETECTAR LOGO
logo.addEventListener("click", function(){
    window.scrollTo(0,0);
});

    