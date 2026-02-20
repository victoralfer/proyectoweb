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

let menu_aritmeticas;

let menu_logicas;

let menu_fun;

let menu_math;

let menu_mas_fun;

let menu_array;

let menu_cond;

let menu_bucles;

let menu_captura;

let menu_inner;

let menu_class;

let menu_add;

let menu_tam;



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

	menu_aritmeticas = document.getElementById("menu-operaciones-arit");

	menu_logicas = document.getElementById("menu-operaciones-log");

	menu_fun = document.getElementById("menu-funciones");

	menu_math = document.getElementById("menu-math");

	menu_mas_fun = document.getElementById("menu-mas-funciones");

	menu_array = document.getElementById("menu-arrays");

	menu_cond = document.getElementById("menu-condicionales");

	menu_bucles = document.getElementById("menu-bucles");

	menu_captura = document.getElementById("captura-objetos-html");

	menu_inner = document.getElementById("sustituir-contenido");

	menu_add = document.getElementById("add-event-listener");

	menu_tam = document.getElementById("extracion-tamanos");

	menu_class = document.getElementById("class-list");


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
	$("#volver").on ("click", function() {

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



/* Función Activar Menú Operaciones Aritméticas */
function fun_arit() {

	menu_aritmeticas.classList.toggle("activar");

}


/* Función Activar Menú Operaciones Lógicas */
function fun_log() {

	menu_logicas.classList.toggle("activar");

}


/* Función Activar Menú Prompt */
function fun_prompt() {

	menu_prompt.classList.toggle("activar");

}


/* Función Activar Menú Funciones */
function fun_fun() {

	menu_fun.classList.toggle("activar");

}


/* Función Activar Menú Funciones Math */
function fun_math() {

	menu_math.classList.toggle("activar");

}


/* Función Activar Menú + Funciones */
function fun_mas_fun() {

	menu_mas_fun.classList.toggle("activar");

}


/* Función Activar Menú Array */
function fun_array() {

	menu_array.classList.toggle("activar");

}


/* Función Activar Menú Condicionales */
function fun_cond() {

	menu_cond.classList.toggle("activar");

}


/* Función Activar Menú Bucles */
function fun_bucles() {

	menu_bucles.classList.toggle("activar");

}


/* Función Activar Menú Captura Objetos HTML */
function fun_capt() {

	menu_captura.classList.toggle("activar");

}


/* Función Activar Menú INNER */
function fun_inner() {

	menu_inner.classList.toggle("activar");

}



/* Función Activar Menú CLASS LIST */
function fun_class() {

	menu_class.classList.toggle("activar");

}


/* Función Activar Menú AddEventListener */
function fun_add() {

	menu_add.classList.toggle("activar");

}


/* Función Activar Menú Extracción Tamaños */
function fun_tam() {

	menu_tam.classList.toggle("activar");

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

