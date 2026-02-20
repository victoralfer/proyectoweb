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

let menu;					// Variable para Captura Botón Hamburguesa


let ham;					// Variable para Imagen Hamburguesa



let menu_1;					// Variable Menú desplegable Apuntes y Prácticas

let menu_2;					// Variable Menú desplegable Áreas Personales

let menu_3;					// Variable Menú desplegable Otros Documentos




let contenido_wordpress;

let contenido_wordpress_enlaces;

let contenido_wordpress_themes;


let titulo_w;

let titulo_w_e;

let titulo_w_t;





/* ---------------------------------------------------------------------------- */
/* ---------- Necesario para capturar elementos del HTML por su 'id' ---------- */
/* ---------------------------------------------------------------------------- */

window.onload = function() {

	ham=document.getElementById("icono_ham");

	menu=document.getElementById("apuntes");								// Captura Elementos 'apuntes' (menú)


	menu_1=document.getElementById("menu-1");
	
	menu_2=document.getElementById("menu-2");

	menu_3=document.getElementById("menu-3");


	titulo_w_e=document.getElementById("tit-w-e");

	titulo_w_t=document.getElementById("tit-w-t");



	/* ACTIVAR / DESACTIVAR SECCIÓN WORDPRESS: INSTALACIÓN */

	contenido_wordpress=document.getElementById("contenido-wordpress");

	titulo_w=document.getElementById("titw");


	titw.addEventListener("click", function() {

		contenido_wordpress.classList.toggle("desactivar");

		titulo_w.classList.toggle("abrir");

	});


	contenido_wordpress_enlaces=document.getElementById("contenido-wordpress-enlaces");


	contenido_wordpress_themes=document.getElementById("contenido-wordpress-themes");


}




/* ---------------------------------------------------------------------------- */
/* --------------------------- CAPTURADOR DE JQUERY --------------------------- */
/* ---------------------------------------------------------------------------- */

$(document).ready (function() {

	$("#section2").hide();			// Ocultar Sección Formulario


	$("#section3").hide();			// Ocultar Sección WordPress


	$("#web-wp").hide();			// Ocultar Banner Web WordPress Víctor



	/* Enlace de Ancla al inicio de la página */
	$("#ancla").on ("click", function() {

		$("html").animate({scrollTop: 0}, 600);

	});


});



/* ---------------------------------- */
/* ------- FUNCIÓN HAMBURGUESA ------ */
/* ---------------------------------- */

function fun_ham() {

	menu.classList.toggle("activo");				// Se activa con lo indicado en el CSS a través de aside.activo
	

	ham.classList.toggle("desactivar");				// Desactivar / Activar Botón Hamburguesa

}




/* ----------------------------------------- */
/* ------ FUNCIONES DESPLIEGUES MENÚS ------ */
/* ----------------------------------------- */


/* Menú Apuntes - Desactivar */
function fun_men_1() {
	
	menu_1.classList.toggle("desactivar");
	
}


/* Menú Otros Documentos - Activar */
function fun_men_3() {
	
	menu_3.classList.toggle("activar");
	
}



/* ----------------------------------------- */
/* ---- FUNCIONES DESPLIEGUES SECCIONES ---- */
/* ----------------------------------------- */


/* ACTIVAR / DESACTIVAR SECCIÓN ENLACES */
function fun_enlaces_wp() {

	contenido_wordpress_enlaces.classList.toggle("activar");

	titulo_w_e.classList.toggle("cerrar");
	
	contenido_wordpress_enlaces.style.margin = "20px 0";

}



/* ACTIVAR / DESACTIVAR SECCIÓN THEMES Y PLUGINS */
function fun_themes_wp() {
	
	contenido_wordpress_themes.classList.toggle("activar");

	titulo_w_t.classList.toggle("cerrar");
	
	contenido_wordpress_themes.style.margin = "20px 0 0 0";

}




/********************************************/
/********************************************/
/******** FUNCIONES ACTIVAR PESTAÑAS ********/
/********************************************/
/********************************************/


/* Función Activar Pestaña Formulario */
function fun_formulario() {

	$("#section2").show();

	$("#principal").hide();

	$("#section3").hide();

	$(".funciones-teclado").hide();

	$("html").animate({ scrollTop: 0 }, 600);	// Ancla al incio página con animación

}



/* Función Activar Pestaña WordPress */
function fun_wp() {

	$("#section3").show();

	$("#principal").hide();

	$("#section2").hide();

	$(".funciones-teclado").hide();

	$("html").animate({ scrollTop: 0 }, 600);	// Ancla al incio página con animación

}



/* Función Activar Pestaña Principal */
function fun_principal() {

	$("#section2").hide();

	$("#section3").hide();

	$("#principal").show();

	if (window.innerWidth > 768) {

		$(".funciones-teclado").show();

	}

	$("html").animate({ scrollTop: 0 }, 600);	// Ancla al incio página con animación
	
}