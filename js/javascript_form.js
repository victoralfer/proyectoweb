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

/* Variable Menús */


let aside;


let botones;


let etform;

let etinput;

let type;

let otros;

let etselect;

let etoption;

let ettextarea;

let pseudo;



/* Buscador */

let capa_buscador;

let articulos;

let no_coincide;



/* ---------------------------------------------------------------------------- */
/* ---------- Necesario para capturar elementos del HTML por su 'id' ---------- */
/* ---------------------------------------------------------------------------- */

window.onload = function() {
	
	aside=document.getElementById("aside");
	
	
	botones=document.getElementById("botones");
	
	
	etform=document.getElementById("form");
	
	etinput=document.getElementById("input");
	
		type=document.getElementById("type");
		
		otros=document.getElementById("otros");
		
	etselect=document.getElementById("select");
	
	etoption=document.getElementById("option");
	
	ettextarea=document.getElementById("textarea");
	
	pseudo=document.getElementById("pseudo");


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
	$("#arriba").on ("click", function() {

		$("html").animate({scrollTop: 0}, 600);

	});

});


/* Función Todos los Menús */
function fun_css() {

	aside.classList.toggle("activo");				// Activar/Desactivar Menús
	
	ham.classList.toggle("desactivo");				// Desactivar/Activar Imagen Hamburguesa
	
	cerrar.classList.toggle("activo");				// Activar/Desactivar Imagen Cerrar

}



/* Función Menús Proyectos y Apuntes */
function fun_pro() {
	
	botones.classList.toggle("activo");
	
}






/* Función Menú Form */
function fun_form() {
	
	etform.classList.toggle("activar");
	
}


/* Función Menú Input */
function fun_input() {
	
	etinput.classList.toggle("activar");
	
}


/* Función Menú Atributo Type */
function fun_type() {
	
	type.classList.toggle("activar");
	
}


/* Función Menú Otros Aributos */
function fun_otros() {
	
	otros.classList.toggle("activar");
	
}


/* Función Menú Select */
function fun_select() {
	
	etselect.classList.toggle("activar");
	
}


/* Función Menú Option */
function fun_option() {
	
	etoption.classList.toggle("activar");
	
}


/* Función Menú Textarea */
function fun_textarea() {
	
	ettextarea.classList.toggle("activar");
	
}


/* Función Menú Pseudo */
function fun_pseudo() {
	
	pseudo.classList.toggle("activar");
	
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
        
        /* Capturamos tanto los h4 como los h2 con la clase específica dentro del artículo actual */

        let titulos_h4 = articulos[i].getElementsByTagName("h4");

        let titulos_h2 = articulos[i].querySelectorAll("h2.h2article");
        
        let coincidenciaEnArticulo = false;


        /* Comprobamos coincidencias en los h4 */

        for (let j = 0; j < titulos_h4.length; j++) {

            if (titulos_h4[j].textContent.toLowerCase().includes(busqueda)) {

                coincidenciaEnArticulo = true;
                break; 

            }

        }


        /* Si no hubo coincidencia en h4, comprobamos en los h2.h2article */

        if (!coincidenciaEnArticulo) {

            for (let k = 0; k < titulos_h2.length; k++) {

                if (titulos_h2[k].textContent.toLowerCase().includes(busqueda)) {

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

    capa_buscador.classList.toggle("activar");

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

