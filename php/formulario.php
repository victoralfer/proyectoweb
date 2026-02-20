<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// --- CONFIGURACIÓN ---
$admin_email = "victoralfer@gmail.com";
$admin_subject = "📩 Nuevo mensaje desde el formulario web";
$confirm_subject = "📄 Copia de tu mensaje - Gracias por contactar";

// --- COMPROBAR ENVÍO POST ---
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    die("<h3 style='color:red;'>❌ Este script debe ejecutarse desde el formulario.</h3>");
}

// --- CAPTURA DE DATOS ---
$nombre = trim($_POST['nombre-apellidos'] ?? '');
$correo = trim($_POST['correo'] ?? '');
$comentarios = trim($_POST['area-texto'] ?? '');
$archivo = $_FILES['adjuntar'] ?? null;

// --- VALIDACIÓN BÁSICA ---
if (!$nombre || !$correo || !$comentarios) {
    die("<h3 style='color:red;'>❌ Faltan campos obligatorios.</h3>");
}

// --- CUERPO DEL MENSAJE AL ADMIN ---
$mensaje_admin = "Has recibido un nuevo mensaje desde el formulario web:\n\n";
$mensaje_admin .= "Nombre y Apellidos: $nombre\n";
$mensaje_admin .= "Correo Electrónico: $correo\n\n";
$mensaje_admin .= "Comentarios:\n$comentarios\n";

// --- CABECERAS BÁSICAS ---
$headers_admin = "From: Web Form <no-reply@" . $_SERVER['SERVER_NAME'] . ">\r\n";
$headers_admin .= "Reply-To: $correo\r\n";

// --- SI HAY ARCHIVO ADJUNTO ---
if ($archivo && $archivo['error'] == UPLOAD_ERR_OK) {
    $file_tmp = $archivo['tmp_name'];
    $file_name = basename($archivo['name']);
    $file_data = chunk_split(base64_encode(file_get_contents($file_tmp)));
    $boundary = md5(time());

    $headers_admin .= "MIME-Version: 1.0\r\n";
    $headers_admin .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

    $mensaje_final = "--$boundary\r\n";
    $mensaje_final .= "Content-Type: text/plain; charset=\"UTF-8\"\r\n\r\n";
    $mensaje_final .= "$mensaje_admin\r\n";
    $mensaje_final .= "--$boundary\r\n";
    $mensaje_final .= "Content-Type: application/octet-stream; name=\"$file_name\"\r\n";
    $mensaje_final .= "Content-Transfer-Encoding: base64\r\n";
    $mensaje_final .= "Content-Disposition: attachment; filename=\"$file_name\"\r\n\r\n";
    $mensaje_final .= "$file_data\r\n";
    $mensaje_final .= "--$boundary--";

    $enviado_admin = mail($admin_email, $admin_subject, $mensaje_final, $headers_admin);
} else {
    // Sin adjunto
    $headers_admin .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $enviado_admin = mail($admin_email, $admin_subject, $mensaje_admin, $headers_admin);
}

// --- ENVÍO DE COPIA AL USUARIO ---
$mensaje_usuario = "Hola $nombre,\n\n";
$mensaje_usuario .= "Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos pronto.\n\n";
$mensaje_usuario .= "--- Copia de tu mensaje ---\n$comentarios\n\n";
$mensaje_usuario .= "Saludos,\nVíctor Álvarez Fernández";

$headers_usuario = "From: Víctor Álvarez <no-reply@" . $_SERVER['SERVER_NAME'] . ">\r\n";
$headers_usuario .= "Reply-To: $admin_email\r\n";
$headers_usuario .= "Content-Type: text/plain; charset=UTF-8\r\n";

$enviado_usuario = mail($correo, $confirm_subject, $mensaje_usuario, $headers_usuario);

// --- RESPUESTA AL NAVEGADOR ---
if ($enviado_admin && $enviado_usuario) {
    echo "<h2 style='color:green;'>✅ Mensaje enviado correctamente. Revisa tu bandeja de entrada.</h2>";
} elseif ($enviado_admin && !$enviado_usuario) {
    echo "<h2 style='color:orange;'>⚠️ Mensaje enviado al administrador, pero no se pudo enviar la copia al usuario.</h2>";
} else {
    echo "<h2 style='color:red;'>❌ Error al enviar el mensaje. Inténtalo de nuevo.</h2>";
}
?>
