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

/* Variables Botón Hamburguesa y Cerrar */

let ham;

let cerrar;



/* Variable para activar y desactivar Menú Desplegable */

let aside;


/* Variable Botones de Proyectos y Apuntes */

let botones;


/* Variables Menús Selectores y Propiedades */

let selectores;

let prop;



/* Variables Menús de Propiedades */

let formato;

let listas;

let posicionamiento;

let capas;

let fb;

let mas_propiedades;




/* Buscador */

let capa_buscador;

let articulos;

let no_coincide;





/* ---------------------------------------------------------------------------- */
/* ---------- Necesario para capturar elementos del HTML por su 'id' ---------- */
/* ---------------------------------------------------------------------------- */

window.onload = function() {
	
	ham=document.getElementById("img-ham");
	
	cerrar=document.getElementById("img-cerrar");
	
	
	
	aside=document.getElementById("aside");
	
	
	botones=document.getElementById("botones");
	


	selector=document.getElementById("selector");

	prop=document.getElementById("menus-prop");


	
	formato=document.getElementById("formato");
	
	listas=document.getElementById("listas");
	
	posicionamiento=document.getElementById("posicionamiento");
	
	capas=document.getElementById("capas");
	
	fb=document.getElementById("flexbox");
	
	mas_propiedades=document.getElementById("propiedades");



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


/* Función Menú Selectores */
function fun_selector() {
	
	selector.classList.toggle("act");
	
}


/* Función Menú Selectores */
function fun_prop() {
	
	prop.classList.toggle("activar");
	
}



/* Función Menú Formato */
function fun_menu_formato() {
	
	formato.classList.toggle("activar");
	
}


/* Función Menú Listas */
function fun_menu_listas() {
	
	listas.classList.toggle("activar");
	
}


/* Función Menú Posicionamiento */
function fun_menu_pos() {
	
	posicionamiento.classList.toggle("activar");
	
}


/* Función Menú Capas*/
function fun_menu_capas() {
	
	capas.classList.toggle("activar");
	
}


/* Función Menú Flex Box */
function fun_menu_fb() {
	
	fb.classList.toggle("activar");
	
}


/* Función Menú Propiedades*/
function fun_menu_prop() {
	
	mas_propiedades.classList.toggle("activar");
		
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

