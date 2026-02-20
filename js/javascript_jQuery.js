/* ----------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------- */
/* ----------------------------- CÓDIGO JAVASCRIPT ----------------------------- */
/* ----------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------- */

/* ------------------------------------ */
/* ----- Declaración de variables ----- */
/* ------------------------------------ */

let botones; 	// Variable Menú Prácticas y Apuntes


/* Variables Menús Contenido */

let menu_iniciacion;

let menu_usadas;

let menu_anadir_texto;

let menu_anadir_cont;

let menu_sustituir;

let menu_clases;

let menu_eliminar;

let menu_deslizadores;


let aside;



/* Buscador */

let capa_buscador;

let articulos;

let no_coincide;



/* ---------------------------------------------------------------------------- */
/* ---------- Necesario para capturar elementos del HTML por su 'id' ---------- */
/* ---------------------------------------------------------------------------- */

window.onload = function() {
	
	botones = document.getElementById("botones");		// Captura Botones Prácticas y Apuntes


	/* Capturas Menús Contenido */

	menu_iniciacion = document.getElementById("menu-iniciacion");

	menu_usadas = document.getElementById("menu-usadas");
	
	menu_anadir_texto = document.getElementById("menu-anadir-texto");
	
	menu_anadir_cont = document.getElementById("menu-anadir-contenido");
	
	menu_sustituir = document.getElementById("menu-sustituir");
	
	menu_clases = document.getElementById("menu-clases");
	
	menu_eliminar = document.getElementById("menu-eliminar");
	
	menu_deslizadores = document.getElementById("menu-deslizadores");


	aside = document.getElementById("aside");



	/* BUSCADOR */

	capa_buscador=document.getElementById("capa-buscador");		// Captura 'Capa del Buscador'


	articulos = document.getElementsByTagName("article"); 		// Captura todos los artículos
    
    no_coincide = document.getElementById("nocoincide"); 		// Mensaje no coincidencia
	
}


/* ---------------------------------------------------------------------------- */
/* --------------------------- CAPTURADOR DE JQUERY --------------------------- */
/* ---------------------------------------------------------------------------- */

$(document).ready (function() {
	
	/* Enlace de Ancla al inicio de la página */
	$("#ancla").on ("click", function() {

		$("html").animate({scrollTop: 0}, 600);

	});

});



/**************************************************************/
/**************************************************************/
/********************** FUNCIONES TOGGLE **********************/
/**************************************************************/
/**************************************************************/

/* Función Activar Botones Prácticas y Apuntes */
function fun_botones() {

	botones.classList.toggle("activar");

}


/* Función Activar Menú Iniciación */
function fun_inic() {

	menu_iniciacion.classList.toggle("activar");

}



/* Función Activar Menú Funciones más usadas */
function fun_funciones() {

	menu_usadas.classList.toggle("activar");

}


/* Función Activar Menú Añadir Texto */
function fun_texto() {

	menu_anadir_texto.classList.toggle("activar");

}


/* Función Activar Menú Añadir Contenido */
function fun_contenido() {

	menu_anadir_cont.classList.toggle("activar");

}


/* Función Activar Menú Sustituir Texto */
function fun_sustituir() {

	menu_sustituir.classList.toggle("activar");

}


/* Función Activar Menú Clases */
function fun_clases() {

	menu_clases.classList.toggle("activar");

}


/* Función Activar Menú Eliminar */
function fun_eliminar() {

	menu_eliminar.classList.toggle("activar");

}



/* Función Activar Menú Deslizadores */
function fun_slide() {

	menu_deslizadores.classList.toggle("activar");

}






/* Función Activar Menú Hamburguesa */
function fun_hamburguesa() {

	aside.classList.toggle("activar");

}



/******************************************************/
/******************************************************/
/*************** FUNCIONES DEL BUSCADOR ***************/
/******************************************************/
/******************************************************/


/* --- FUNCIÓN BUSCADOR --- */

function fun_buscador() {

    /* 1. Obtenemos el valor del input y lo pasamos a minúsculas */

    let busqueda = document.getElementById("buscador").value.toLowerCase();

    let hayCoincidencias = false;

    /* 2. Recorremos todos los artículos */

    for (let i = 0; i < articulos.length; i++) {
        
        /* Capturamos tanto los h4 como los h1 con la clase específica dentro del artículo actual */

        let titulos_h4 = articulos[i].getElementsByTagName("h4");

        let titulos_h1 = articulos[i].getElementsByTagName("h1");
        
        let coincidenciaEnArticulo = false;


        /* Comprobamos coincidencias en los h4 */

        for (let j = 0; j < titulos_h4.length; j++) {

            if (titulos_h4[j].textContent.toLowerCase().includes(busqueda)) {

                coincidenciaEnArticulo = true;
                break; 

            }

        }


        /* Si no hubo coincidencia en h4, comprobamos en los h1 */

        if (!coincidenciaEnArticulo) {

            for (let k = 0; k < titulos_h1.length; k++) {

                if (titulos_h1[k].textContent.toLowerCase().includes(busqueda)) {

                    coincidenciaEnArticulo = true;
                    break;

                }

            }

        }


        /* --- Mostrar u ocultar según el resultado --- */

        if (coincidenciaEnArticulo) {

            articulos[i].style.display = "block";
            hayCoincidencias = true;

        } 

        else {

            articulos[i].style.display = "none";

        }

    }

    /* Mensaje de aviso si no hay resultados */

    if (no_coincide) {

        no_coincide.style.display = (!hayCoincidencias && busqueda !== "") ? "flex" : "none";

    }

    capa_buscador.classList.toggle("activar");

}



/* --- FUNCIÓN RESET DEL BUSCADOR --- */

function fun_buscador_reset() {

    document.getElementById("buscador").value = ""; 			/* Limpia el input */
    
    for (let i = 0; i < articulos.length; i++) {

        articulos[i].style.display = "block"; 					/* Muestra todos los artículos */

    }

    if (no_coincide) no_coincide.style.display = "none";

}




/* --- FUNCIÓN PARA SACAR EL BUSCADOR --- */
function fun_sacar_buscador() {

	capa_buscador.classList.toggle("activar");

}




/*********************************************************************/
/*********************************************************************/
/******************* ACTIVAR FUNCIONES CON TECLADO *******************/
/*********************************************************************/
/*********************************************************************/


/* Sacar Buscador (Toggle) pulsando 'Ctrl + b' */	

document.addEventListener("keydown", function(e) { 

	if (e.ctrlKey && e.key == "b") {
		
		fun_sacar_buscador();
		
	}

});



/* Activar la función BUSCAR DEL BUSCADOR pulsando la tecla 'Intro') */	

document.addEventListener("keydown", function(e) { 

	if (e.key == "Enter") {
		
		fun_buscador();
		
	}

});



/* Activar la función RESET DEL BUSCADOR pulsando 'Ctr + r') */	

document.addEventListener("keydown", function(e) { 

	/* 'altkey' indica la pulsación de ctrl en el teclado */
	if (e.ctrlKey && e.key == "z") {
		
		fun_buscador_reset();
		
	}

});

