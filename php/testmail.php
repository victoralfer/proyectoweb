<?php
if (mail("victoralfer@gmail.com", "Prueba PHP Mail", "Este es un mensaje de prueba")) {
    echo "✅ Correo enviado correctamente";
} else {
    echo "❌ Error al enviar correo";
}
?>