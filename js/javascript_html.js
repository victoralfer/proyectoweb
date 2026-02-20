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

let ham;

let cabecera;


let menus;


let menu_pro_ap;


let head;

let body;

let formato;

let listas;

let tablas;

let otras;

let varios;



// Declaración global al principio del archivo js

let capa_buscador;

let no_coincide;

let filasTabla;


/* ---------------------------------------------------------------------------- */
/* ---------- Necesario para capturar elementos del HTML por su 'id' ---------- */
/* ---------------------------------------------------------------------------- */

window.onload = function() {
	
	menu=document.getElementById("menu");
	
	menus=document.getElementById("menus");


	menu_pro_ap=document.getElementById("menu-prin");
	
	
	head=document.getElementById("head");
	
	body=document.getElementById("body");
	
	formato=document.getElementById("formato");
	
	listas=document.getElementById("listas");
	
	tablas=document.getElementById("tablas");
	
	otras=document.getElementById("otras");
	
	varios=document.getElementById("varios");


	/* BUSCADOR */

	capa_buscador=document.getElementById("capa-buscador");		// Captura 'Capa del Buscador'
 
    no_coincide = document.getElementById("nocoincide"); 		// Mensaje no coincidencia

    // Capturamos las filas de la tabla
    filasTabla = document.querySelectorAll("table tr:not(:first-child)");
	
}


/* ---------------------------------------------------------------------------- */
/* --------------------------- CAPTURADOR DE JQUERY --------------------------- */
/* ---------------------------------------------------------------------------- */

$(document).ready (function() {
	
	/* Enlace de Ancla al inicio de la página */
	$("#volver").on ("click", function() {

		$("html").animate({scrollTop: 0}, 600);

	});

});



/* Función Menú Proyectos y Apuntes */
function fun_pro() {

	menu_pro_ap.classList.toggle("activar");				// Activar/Desactivar Menús
	
}



/* Función Todos los Menús */
function fun_css() {

	menu.classList.toggle("activo");				// Activar/Desactivar Menús
	
}


/* Función Menú Formato */
function fun_menu_head() {
	
	head.classList.toggle("activar");
	
}

/* Función Menú Formato */
function fun_menu_body() {
	
	body.classList.toggle("activar");
	
}



/* Función Menú Formato */
function fun_menu_formato() {
	
	formato.classList.toggle("activar");
	
}


/* Función Menú Listas */
function fun_menu_listas() {
	
	listas.classList.toggle("activar");
	
}


/* Función Menú Tablas */
function fun_menu_tablas() {
	
	tablas.classList.toggle("activar");
	
}


/* Función Menú Otras*/
function fun_menu_otras() {
	
	otras.classList.toggle("activar");
	
}


/* Función Menú Varios */
function fun_menu_varios() {
	
	varios.classList.toggle("activar");
	
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


    /* 2. Capturamos todas las filas de la tabla (ajusta el selector si es necesario) */

    /* Usamos :not(:first-child) para no ocultar la fila de encabezados */
    let filas = document.querySelectorAll("table tr:not(:first-child)");


    /* 3. Recorremos todas las filas */
    for (let i = 0; i < filas.length; i++) {
        
        /* Capturamos las celdas con las clases específicas dentro de la fila actual */
        let celdas = filas[i].querySelectorAll(".etiqueta, .significado, .tipo, .explicacion, .ejemplo");
        
        let coincidenciaEnFila = false;


        /* Comprobamos si el texto buscado está en alguna de esas celdas */
        for (let j = 0; j < celdas.length; j++) {

            let textoCelda = celdas[j].textContent.toLowerCase();
            
            if (textoCelda.includes(busqueda)) {

                coincidenciaEnFila = true;
                break; 

            }

        }

        /* --- Mostrar u ocultar la fila según el resultado --- */

        if (coincidenciaEnFila) {

            filas[i].style.display = ""; // Se usa "" para que recupere su valor por defecto (table-row)
            hayCoincidencias = true;

        } 

        else {

            filas[i].style.display = "none";

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

    document.getElementById("buscador").value = ""; 

    let filas = document.querySelectorAll("table tr:not(:first-child)");
    
    for (let i = 0; i < filas.length; i++) {

        filas[i].style.display = ""; 				// Muestra todas las filas

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

