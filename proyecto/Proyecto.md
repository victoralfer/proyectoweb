![](images/0669c17c81c012d5c11f6a87af60fa9832888f0cf3de969c70b1f6f5db8a72b4.jpg)

![](images/82f447e81dba87502dcb4e5e79f36dd3ce3d56c487a0c9761d32733dc63910a2.jpg)

# IMPLEMENTACION

# DE UN ENTORNO

# VIRTUALIZADO CON

# HYPER-V Y SERVIDOR

# WEB EN DEBIAN

# PROYECTO CFGS ASIR

Montaje de un Equipo, Implantacion y Administracion de Sistemas Operativos, Instalacion y Puesta en Marcha de un Entorno Virtualizzato, Instalacion y Configuracion Servicio Web Apache, Configuracion de Redes y Creacion de Pagina Web con HTML5, CSS3, JS y jQuery

# 1. Introduccion 1

- Objetivo del Proyecto 1   
Alcance y Limitaciones 1   
Justificacion Tecnica 2

# 2. SeLECTION de Componentes y Montaje de Equipo 3

Especificaciones de Hardware 3   
Infraestructura de Red Fisica 4   
Montaje y Verificacion 4   
Infraestructura de Energía y Continuidad (SAI) 4   
Filosofia de Adquisacion: Sostenibilidad y Eficiencia de Costes 5   
Presupuesto de los Componentes para el Proyecto 5

# 3. Configuración y Puesta en Marcha S.O. Anfitrión: Windows 11 6

-Selección del Nombre del Equipo 6   
- Administración de Discos 6   
Actualizaciones de Seguridad 7   
- Configuración Acceso Remoto: 7

✓ Instalación y Configuración del Servicio VPN Tailscale 7   
$\checkmark$ Configuración del Servicio Escritorio Remoto 8

- Otras Configuraciones 8

# 4. Activación, Instalación y Configuración Entorno Virtualizzato 10

- Activación Tecnología de Virtualización en la BIOS 10   
Instalacion caracteristica Hyper-V de Microsoft 10   
- Configuración del Entorno Virtualizzato 11   
- Creación de la Maquina Virtual 11   
- Configuración de Seguidad 14

# 5. Instalación y Configuración del Sistema Operativo Invitado: Debian 13 15

Creación de la Tabla de Parteciones 16   
-Selección de Repositorios y Characteristicas 18   
- Configuración de Debian 13 19

$\checkmark$ Privilegios de明晰 19   
✓ Actualización de Listado de Paquetes 19   
$\checkmark$ Configuración de Red Interna con Equipo Anfitrión 20

# 6. Instalación y Configuración Servidor Web Apache en Debian 13 21

- Instalación desdelos repositories oficiales 21   
- Configuración del Sitio que alojará la Pagina Web 21   
Generador del Certificado Autofirmado 22   
Activación del Sitio 25

# 7. Instalación y Configuración SMB/CIFS 26

- Configuración de Carpeta Compartida en Windows 11 .................... 26   
- Instalación del Cliente SMB y de las Utilidades CIFS 27   
Montaje de la Carpeta compinta en Debian 13 27

# 8. Creación de la Págrina Web 29

Diseño de la Estructura de la Párgina Web con HTML5 29   
- Creación de un Estilo Definido con CSS3 30   
Implementación de 'Responsive Design' 31   
Generación de Dinamismo con JavaScript y jQuery 32   
El Servidor como Repositorio de Documentacion Técnica 33   
- Optimación y Buenos Prácticas de Desarrollo 34

# 9. Volcado de los:ficheros en el Servidor Web con protocolo SMB/CIFS 35

Procedimiento de Sincronizacion y Seguridad de Publicacion 35   
- Proceso Técnico de Despliegue: Volcado Total Inicial 35

# 10. Configuración de laresha red para salir al exterior (Internet) 36

Creación de Conmutador Exerno en el Entorno Virtualizzato 36   
- Configuración de la Interfaz de Red en Debian 13 37   
Apertura de los Puerto 80 y 443 en el Router 38   
Resolución Problemáticas DNS e IP Dinámica con DuckDNS 38

# 11. Pruebas de Funcionamiento 41

- Pruebas de Conectividad y Red 41   
Pruebas del Servidor Web Apache 42   
- Pruebas de Diseño y Contenso Responsive 43   
Pruebas de Dinamismo (JS y jQuery) 44

# 12. Conclusiones 46

Conclusiones del Proyecto 46   
Posibles Mejoras y Futuras Ampliaciones 46

# 13. Bibliografia 47

# -ÍNÍDICE DE TABLAS -

Tabla 1. Presupuesto Componentes Fisicos 5

# -ÍNDCIDE FIGURES -

Figura 1. Componentes: disco NVME y Memoria RAM 3   
Figura 2. Componentes: disco $2.5''$ y Disipador 3   
Figura 3. Componentes: Conectores Externos Traseros 3   
Figura 4. S.O Anfitrion: Nombre del equipo 6   
Figura 5. S.O Anfitrion: Administrador de Discos 6   
Figura 6. S.O Anfitrion: Actualizaciones de Windows 7   
Figura 7. S.O Anfitrion: Instalacion Tailscale   
Figura 8. S.O Anfitrion: Conexión dispositivo a la VPN 7   
Figura 9. S.O Anfitrion: Equipos de la red VPN 7   
Figura 10. S.O Anfitrion: Habilitar Escritorio Remoto 8   
Figura 11. S.O Anfitrion: Configuracion de Energia 8   
Figura 12. S.O Anfitrion: Configuracion de Red.. 8   
Figura 13. S.O Anfitrion: Configuracion BIOS para uso Tecnologia WOL.. 9   
Figura 14. S.O Anfitrion: Habilitar Opciones de Red para WOL 9   
Figura 15. S.O Anfitrion: Permitir 'Magic Packet' para reactivar el equipo .9   
Figura 16. Entorno Virtualizzato: Activar Tecnología de Virtualización en BIOS 10   
Figura 17. Entorno Virtualizzato: Activar caracteristica Hyper-V en anfitrion....... 10   
Figura 18. Entorno Virtualizzato: Creación Maquina Virtual en Administrador de Hyper-V...... 11   
Figura 19. Entorno Virtualizzato: Asignacion Nombre de la Maquina Virtual 11   
Figura 20. Entorno Virtualizzato: Elegacion de Generacion 2 (UEFI) 12   
Figura 21. Entorno Virtualizzato: Asignacion Memoria Dinamica 12   
Figura 22. Entorno Virtualizzato: Configuracion de Red Inicial en el Entorno Virtualizzato .... 12   
Figura 23. Entorno Virtualizzato: Conexión de Disco Duro Virtual 13   
Figura 24. Entorno Virtualizzato: SeLECTION de Imagen ISO para instalacion Debian 13 13   
Figura 25. Entorno Virtualizo: Finalizacion Creacion Maquina Virtual 13   
Figura 26. Entorno Virtualizzato: Configuracion de Seguidad Entorno Virtualizzato.......14   
Figura 27. Entorno Virtualizzato: Configuracion Arranque Automático 14   
Figura 28. Instalacion Debian 13: Nombre del equipo 15   
Figura 29. Instalacion Debian 13: Nombre del dominio.. 15   
Figura 30. Instalacion Debian 13: Nombre del usuario 15   
Figura 31. Instalacion Debian 13: Tipo de Instalacion - Manual 15   
Figura 32. Instalación Debian 13: Creación Tabla de Parteciones 16

Figura 33. Instalación Debian 13: Creación de la Parteción EFI 16   
Figura 34. Instalación Debian 13: Creación de la Parteción Principal 16   
Figura 35. Instalación Debian 13: Creación Partecía SWAP 17   
Figura 36. Instalación Debian 13: Creación Partecía de Directorios Personales 17   
Figura 37. Instalación Debian 13: Confirmación de la Creación de las Parteciones 17   
Figura 38. Instalación Debian 13: Configuración Gestor de Paquetes 18   
Figura 39. Instalación Debian 13: Señeción de Programas a Instalar 18   
Figura 40. Instalacion Debian 13: Finalizar Instalacion 18   
Figura 41. Configuración Debian 13: Asignación de Permisos Usarios 19   
Figura 42. Configuración Debian 13: Actualización de Paquetes 19   
Figura 43. Configuración Debian 13: Configuración de Interfaz de Red 20   
Figura 44. Servidor Web Apache: Instalación 21   
Figura 45. Servidor Web Apache: Creación del Sitio 22   
Figura 46. Generación Certificado Autofirmado - Dirección 22   
Figura 47. Generación Certificado Autofirmado - DNS 23   
Figura 48. Generación Certificado Autofirmado - Cifrado 23   
Figura 49. Generación Certificado Autofirmado - Creación Clave Privada 23   
Figura 50. Generación Certificado Autofirmado - Creación Clave Pública 24   
Figura 51. Servidor Web Apache: Activar Módulo SSL 24   
Figura 52. Servidor Web Apache: Activación del Sitio 25   
Figura 53. Servidor Web Apache: Deshabilitar Sitio Predeterminado 25   
Figura 54. Configuración SMB/CIFS: Creación Nombreo es名额 . 26   
Figura 55. Configuración SMB/CIFS: Compartir Carpeta en equipo anfitrión 26   
Figura 56. Configuración SMB/CIFS: Instalación Cliente SMB en Debian 27   
Figura 57. Configuración SMB/CIFS: Instalación Utilidades CIFS en Debian 27   
Figura 58. Configuración SMB/CIFS: Montaje Permanente del Recurso Compartido 28   
Figura 59. Creación Págrina Web: Etiquetado Semático 29   
Figura 60. Creación Págrina Web: Metadatos 29   
Figura 61. Creación Páginas Web: Organización Modular 29   
Figura 62. Creación Página Web: Tipografías instaladas 30   
Figura 63. Creación Págrina Web: Efectos Visuales. 30   
Figura 64. Creación Págrina Web: Uso de Clases 30   
Figura 65. Creación Págrina Web: Uso de IDs 30   
Figura 66. Creación Págrina Web: Aplicación Clases en CSS 30   
Figura 67. Creación Págrina Web: Aplicación de Viewport y Escalas 31   
Figura 68. Creación Págrina Web: Menús Adaptativos 31

Figura 69. Creación Págrina Web: Vista de Menús en Smartphone 31   
Figura 70. Creación Páginas Web: Función para Executor Menu Desplegable 32   
Figura 71. Creación Págrina Web: Funciones de Teclado 32   
Figura 72. Creación Págrina Web: Sección Acordeón Cerrada 32   
Figura 73. Creación Págrina Web: Sección Acordeón Abierta 32   
Figura 74. Creación Páginia Web: Inserción Librería jQuery 33   
Figura 75. Creación Págrina Web: Función Enlace de Ancla 33   
Figura 76. Creación Páginas Web: Muestra del Botón de Ancla en el Sitio Web 33   
Figura 77. Creación Páginas Web: Uso Directivas noindex y nofollow 34   
Figura 78. Creación Página Web: Inclusion de Google Fonts 34   
Figura 79. Creación Páginia Web: Inclusion de jQuery 34   
Figura 80. Creación Págin Web: Organización de Archivos 34   
Figura 81. Creación Página Web: Vista Página Principal 34   
Figura 82. Volcado de Ficheros 35   
Figura 83. Configuración Red Exterior: Creación Conmutador Virtual Externo. 36   
Figura 84. Configuración Red Exterior: Propietades Conmutador Virtual Exerno 36   
Figura 85. Configuración Red Exterior: Elección Adaptador Externo para Invitado 37   
Figura 86. Configuracion Red Exterior: Configuracion de Red en Debian.. 37   
Figura 87. Configuracion Red Exterior: Configuracion DNS en Debian 38   
Figura 88. Configuracion Red Exterior: Apertura Puerto 80 (HTTP) en el Router 38   
Figura 89. Configuración Red Exterior: Apertura Puerto 443 (HTTPS) en el Router 38   
Figura 90. Configuración Red Exterior: Creación Cuenta DuckDNS 39   
Figura 91. Configuración Red Exterior: Uso de Scriptactualización IP del router 39   
Figura 92. Configuración Red Exterior: Automatización del Script a工程技术 del Servicio Cron ... 39   
Figura 93. Configuración Red Exterior: Automatización Script de Actualización. 40   
Figura 94. Pruebas Funcionamento: Verificacion DNS Dinamico 41   
Figura 95. Pruebas Funcionamente: Escaneo de Puertos 41   
Figura 96. Pruebas de Funcioncimiento: Google Chrome 42   
Figura 97. Pruebas de Funcionamiento: Mozilla Firefox 42   
Figura 98. Pruebas de Funcionamiento: Brave 42   
Figura 99. Pruebas de Funcionamiento: Navegacion Páginas Secundarias 42   
Figura 100. Pruebas de Funcionamento: Ver Permisos de los Ficheros HTML 42   
Figura 101. Pruebas de Funcionamento: Adaptabilitad Páginas Principal y Secundarias....... 43   
Figura 102. Pruebas de Funcionamento: Control Visualizacion (máximo 1400px). 43   
Figura 103. Pruebas de Funcionamiento: Buscador Pagina Apuntes CCS3 44   
Figura 104. Pruebas de Funcionamiento: Buscador Pagina Apuntes JS 44

Figura 105. Pruebas de Funcionamiento: Buscador Pagina Apuntes jQuery 44   
Figura 106. Pruebas de Funcionamiento: Buscador Pagina Apuntes Formularios 45   
Figura 107. Pruebas de Funcionamento: Botón de Ancla sin acontear 45   
Figura 108. Pruebas de Funcionamiento: Botón de Ancla acontecido 45

# OBJETIVO DEL PROJECTION

Implementar un entorno virtualizo profesional sobre arquitectura Windows, integrando servicios de red en Linux (Debian 13) y garantizing su accesidad, seguridad y operatividad desde el exterior.

Para alcanzar el objetivo principal, se establishen las siguientes metas típecas:

> Infraestructura: Realizar el montaje fisico y la optimización del sistema anfitrónica (Windows 11) para soportar cargas de virtualización.   
> Virtualización de Tipo 1: Desplegar y configurar el hipervisor Hyper-V para la gestión eficiente de recursos de hardware.   
> Administración de Sistemas: Instalar y securizar un servidor Debian 13, configurando la jerarquia de sistemas y red interna.   
$\succ$ Servicios de Red y Almacenimiento: Implementar un servidor web Apache y un sistema de intercambio de ARCHivos híbrido mediante el protocolo SMB/CIFS.   
> Conecidad y Acceso: Configurar una red perimetral segura, incluyendo la gestión de VPN (Tailscale),Resolution de nombres (DuckDNS) y aperture controlada de puertos en el router.   
> Desarrollo y Publicación: Diseñar una interfaz web responsive y automatizar el volcado de contenido entre sistemas de/distinta arquitectura.

# ALCANCE Y LIMITACIONES

# - Alcance -

Elprojectoabarcael ciclo de vidacomplete deldesplieguedeservicio web, incluyendo:

> Hardware y Host: Señeción de componentes físicos y preparación de Windows 11 como base solida.   
> Virtualización: Configuración completa del hipervisor Hyper-V y gestion de conmutadores virtuales (internos y externos).   
> Administración Linux: Instalación技术水平 de Debian 13, gestion de repositories y seguridad a nivel de sistemas.   
> Servicios: Configuración de Apache y montaje de sistemas de ARCHivos remotos mediante SMB/CIFS para un flujo de trabajo entre SODistinctos.   
> Publication: Implementación de acceso remoto seguro (Tailscale) y exposión del service a Internet mediante技术和 DNS dinálico y NAT.

# - Limitaciones -

> Entorno de Producción Real: Al tratarse de un entorno controlado/académico, no se dispone de una IP Pública estática, recurriendo a SOLUTIONES de DNS dinámico.   
> Hardware: El rendimiento de laquina virtual está supeditado a los recursos fisicos del equipo anfitrión (CPU y RAM compañero).   
> Seguridad Avanzada: No se incluye la implementacion de certificados SSL/TLS emitidos por una CA de pago, utilizing dose configuraciones estandar.   
> Escalabilidad: El proyecto se limita a un uncommono ntho de service (un servidor web), sin entrada en balanceo de energia o clusteres de alta disponibiliad.

# JUSTIFICACION TECNICA

La elección de las technologías empleadas se basa en criterios de eficiencia, COSTE, relevancia en el mercado laboral actual:

$\diamond$ Hyper-V: Se ha seleccionado frente a otheras OPCiones (como VirtualBox) por ser un Hipervisor de Tipo 1 cuando se ejecta en Windows. Al estar integrado en el kernel delsystema,ofreceuna gestionde recursosde hardware muchomasz eficienty un rendimiento superior para servicios querequiren alta disponibilidad.   
Debian 13: Es una de las distribuciones de Linux más robustas y estables. Su gestion de paquetes apt y su filosofía de software libre la converten en el estándar de facto para servidos web en enternos profesionales.   
Tailscale (VPN): En lugar deAbrir puertos sensibles como el RDP (Escritorio Remoto) directamente al router, se utilizes Tailscale bajo en el protocolo WireGuard. Este permitted una administracion remota cifrada y segura.   
$\diamond$ Protocolo SMB/CIFS: Se justifica su uso para permitir un entorno de(desarrollo agil. El administrador pueda programar la web en el entorno como mode de Windows y "volcar" losCambios en tiempo real al servidor Linux, simulando un entorno de despliegue profesional.   
DuckDNS: Ante la problema de las IPs dinámicas residencias, esta solución permite mantener la visibiliad del servidor de forma gratuite y automatizada mediante scripts deactualización.

Para la implementación del proyecto, se ha optado por una solución compacta, pero de alto rendimiento,ideal para entornos de servadores domesticos.

# ESPECIFICACIONES DEL HARDWARE

Se ha selección un equipo Lenovo ThinkCentre M910q Tiny,@cuyas caractésticas(PCNCs) Justifican su uso en este entorno virtualizzato:

Procesador: Intel® Core™ i5-6500T (4 nucleus a 2.50 GHz). Su所提供 para Tecnología Intel VT-x es critico para el funcionaimiento de Hyper-V.   
> Memoria RAM: 8 GB DDR4 (con posibiliad de ampliacion a 16 GB mediante sus dos ranuras SO-DIMM).Estacantidad permite unaexecution fluida de Windows 11 y laresherva de recursos para laquina virtual Debian.   
> Almacenamento Principal: Se ha integrado un disco NVMe de 256 GB.Esta decision es clave para el proyecto, ya que reduce drásticamente los tiempos de latency en la lecture/escritura de los discos virtuales.   
> Almacenimiento Secundario (Escalabilidad): El chasis permite la futura incorporación de una unidad SSD/HDD de 2,5" para ampliar la capacité de almacenimiento de datos o copias de seguridad.   
> Conecidad de Red: Adaptador Gigabit Ethernet (10/100/1000 Mbps), esencial para garantizar que el servidor web no sufra@cuellos de botella en la red local.

![](images/039ebc74bdc3a65a76083b601e93e3b0a7ebdd4bd7920edef3502c1be5bf63a0.jpg)  
Figura 1. Componentes: Disco NVME y Memoria RAM

![](images/be53039b61926097568304c2ae983d900e15c8edeaf01c916cfb5b30a7cf28cb.jpg)  
Figura 2. Componentes: disco $2.5''$ y Disipador

![](images/8a0e61c4abb0b280755605719b2d554b4f0ac960e3ffee67eaee44cb86ef2e48.jpg)  
Figura 3. Componentes: Conectores Externos Traseros

# INFRASTRUCTURA DE RED FÍSICA

Para asegurar la calidad del service yatar las interferencias o la latency propias de las conexiones inalábricas, se ha optado por una conexión cableada:

> Cableado: Uso de cable de red Categoría 6 UTP, que permite velocidades de hasta 1 Gbps y minimiza la diafonía gracias a su trenzado de cables.   
Topologia: Conexión directa desde el puerto LAN del router al puerto RJ45 del ThinkCentre.

# MONTAJE Y VERIFICACION

El proceso de montaje ha consistido en la revisión interna del equipo (limpieza de ventilación y comprobación de zócalos) y la connexion de periféricos basics para la configuración inicial. Debido a la naturaleza delprojecto, una vez configurado el Acceso Remoto y la VPN, el equipo funciona en modo headless (sin monitor, teclado ni ratón permanentes), maximizando el ahorro energetico y optimizando el espacio.

# INFRASTRUCTURA DE ENERGÍA Y CONTINUIDAD (SAI)

Para garantizar la Alta Disponibiliad (HA) del service y proteger la integridad fisica de los componentes internos ante anomalias electricas, se han integrado dos unidades de SAI Nilox NXGCLI6001X5V2 (600VA / 420W).

Esta configuración segmentada offre las siguientes ventajas típecas:

> SAI 1 - Nodo de Comunicaciones (Router): Garantiza que la connexion a Internet y la red local permanezcan activas. Esto es vital para mantener el túnel de la VPN Tailscale y laactualización del registrar en DuckDNS durante microcortes.   
> SAI 2 - Nodo de Proceso (ThinkCentre M910q): Protege al servidor de apagados bruscos que podrán corromper el sistemas de ARCHivos de Debian 13 o los discos virtuales de Hyper-V. Al ser un equipo de bajo consumo, este SAI offre un tiempo de autonomía considerable para realizar un apagado controlado si fueranecessary.   
> Protección de Hardware: Ambas unidades actuan como filtro ante sobretensiones y picos de voltaje, alargando la vida uyil de la fuente de alimentacion externa del Lenovo y los circuitos del router.

# FILOSOFÍA DE ADQUISICION: SOSTENIBILIDAD Y EFICIENCIA DE COSTES

Para la realización de esteprojecto, se ha optado por la adquisión de hardware reaccondimiento de grado profesional, bajo this decision en tres pilaresfundamentales:

1. Economía Circular y Sostenabilidad: Se busca dar unasegunda vidautilaequipos de alto rendimiento que aun se encontrartran en perfectas conditiones技术水平. Este reduce el impacto ambiental y los residuos electrónicos, alineando el proyecto con las políticas actuales de Responsabilidad Social Corporativa (RSC).   
2. Optimación de Costes: El uso de componentes reacondicionados permite acceder a hardware de gama empressarial a una fracción del coste de un equipo nuevo equivalente. Esto demuestra la capacité del administrador de sistemas para Diseñar解決iones技术水平 y economicamente viables.   
3. Garantía y Fiabilidad: A referencia del mercado de segunda mano convencional, todos los componentes han sido adquiridos a工程技术 de proveedores que-ofrecen garantía技术水平, asegurar que el equipo ha superado pruebas de estrés y control de calidad antes de su implementación.

# PRESUPUESTO DE LOS COMPONENTES PARA EL PROYECTO

Tabla 1. Presupuesto Componentes Fisicos   

<table><tr><td>Componente</td><td>Estado</td><td>Precio</td><td>Justificación</td></tr><tr><td>Lenovo ThinkCentre M910q</td><td>Reacondicionado</td><td>90 €</td><td>Equipo profesional con i5-6500T y chassis ultra-compacto</td></tr><tr><td>Disco NVMe 256GB</td><td>Reacondicionado</td><td>15 €</td><td>Mejoraística de velocidad frente al disco mecánico original</td></tr><tr><td>2x SAI Nilox 600VA</td><td>Nuevos</td><td>70 €</td><td>Inversión en sécurité electrica y alta disponibiliad</td></tr><tr><td>Cableado (50 m.) + Conectores</td><td>Nuevo</td><td>25 €</td><td>Cable Cat 6 UTP + Conectores estándar Gigabit</td></tr></table>

# 3 - Configuración SO Anfitrión: Windows

Aúnque no se mentionó anteriormente,除外 de los motivos de la elección del equipo Lenovo ThinkCentre M910q Tiny es que este cuenta con una clave de producto OEM almacenada en la BIOS. Nombre permite que, al instalar/reinstalar Windows 11, el sistemas operativo se active automatistically sin necessities de introducir la licencia.

Tras la instalación de Windows 11 Pro (version你需要 para disponible de Hyper-V de forma nativa), se procedó a la optimización del sistema para su rol como servidor anfitrión.

# SELECCION DE NOMBRE DE EQUIPO

Se ha Modifications el nombre générico asignado por el instalador por uno que siga una nomenclatura profesional. Nombre asignado: VICTOR-SERVER

Nombre de equipo:

VICTOR-SERVER

Nombre completo de equipo:

VICTOR-SERVER

Figura 4. S.O Anfitrión: Nombre del equipo

Justificación: El uso de prefixes descriptivos (SERVER para el servidor) Facilita la identificación del[nodo bajo de la red local y en el panel de control de la VPN Tailscale, siguiendo buena practicas de administración de sistemas.

# ADMINISTRación DE DISCOS

Dado que el equipo cuenta con unaunidad NVMe de 256 GB, laestructura de participaciones se ha disnéado para maximizar su eficiencia:

- Partación de Sistema (C:): Destinada exclusivamente al SO anfitrión y binarios de Hyper-V. 178,00 GB.   
- Parteción DATOS (D:): Destinada a almacenar los datos, como como a la sincronización con una nube privada (Nextcloud). 58,59 GB.

Enamblepartecionesseha seleccionadounsystema dearchivosNTFSconun tamanode unidaddeasignacionstandar,asegurando lacompatibilidadconlosarchivosdedisco virtual.Lacantidade espacio elegido para las partecionesdeesteprojecto es reasonable,evitando unllenadoquepodriagenerarinstabilitad.

![](images/c76dca5d7526ae316d9a4b0306a8cb39652678de6d0b7d19827c1c1f5f60cd29.jpg)  
Figura 5. S.O Anfitrión: Administrador de Discos

# ACTUALIZACIONES DE SEGURIDAD

Antes de instalar roles y caracteristicas, se garantizo la integridad del sistema:

- Windows Update: Ejecución de todos los ciclos deactualización para cubrir parches de día cero yactualizaciones del procesador i5-6500T.   
- Driverspecíficos:Revisión de los controladores de chipset de Lenovo para asegurar laestablishedel equipo.

# Windows Update

![](images/25e47ea7ec589354747fee5c3bee6375077af9045645c47f7f6cdf5c032d9aab.jpg)  
Figura 6. S.O Anfitrion: Actualizaciones de Windows

Actualizaciones disponibles para instalar  
Ultima comprobacion: hoy, 20:04

Instalar todo

# CONFIGURACION DE ACCESO REMOTO

Para permitir una gestión sin monitor, se implementó una doble capa de acceso:

# - Instalación y Configuración del Servicio VPN Tailscale 
-

Se haimplemented Tailscale como solucn de red privada virtual (VPN) basada en el protocolo WireGuard.

$\diamond$ Función: Crea una malla segura entre el servidor y los dispositivos de administración.   
$\diamond$ Ventaja técnica: Permite acceder al servidor desde cualesquier red externa sin necessities deAbrir puertos peligrosos en el router hacia el anfitrión.

![](images/ff919b251a6ca049cd09ab094d7712f43e43c89e2514a1b39ebdaf9479416a8d.jpg)  
Tailscale

![](images/6e00205f9bf6448a9f4d495b81d6fcf516063466deaca473f20985b5ba51491b.jpg)  
tailsCALE

lavirgendelcamino@gmail.com

![](images/21953d0a2ae0187b10f27f1a99d63a2d32d80cf9513adce128a44b5ee2bd57f1.jpg)  
Figura 9. S.O Anfitrión: Equipos de la red VPN

Tailscale license terms.

# Connect device

You are about to connect the device VICTOR-SERVER to the lavirgendelcamino@gmail.com tailnet.

# Connect

Figura 7. S.O Anfitrión: Instalación Tailscale   
Figura 8. S.O Anfitrion: Conexión dispositivo a la VPN   

<table><tr><td>vic-win11
lavirgendelcamino@gmail.com</td><td>1.90.9
Windows 11 25H2</td><td>Connected</td><td>***</td></tr><tr><td>victor-hp-por
lavirgendelcamino@gmail.com
Expired Dec 17, 2025</td><td>1.84.2
Windows 10 22H2</td><td>Jun 20, 2025</td><td>***</td></tr><tr><td>victor-imacmint
lavirgendelcamino@gmail.com
Expired Dec 17, 2025</td><td>1.84.0
Linux 6.8.0-62-generic</td><td>Jul 19, 2025</td><td>***</td></tr><tr><td>victor-mini
lavirgendelcamino@gmail.com
Expired Dec 17, 2025</td><td>1.90.8
Windows 10 22H2</td><td>Nov 24, 2025</td><td>***</td></tr><tr><td>victor-server
lavirgendelcamino@gmail.com</td><td>1.84.2
Windows 11 25H2</td><td>Connected</td><td>***</td></tr></table>

# - Configuración del Servicio de Escritorio de Remoto 
-

Se ha activado el Escritorio Remoto de Windows para la gestion grafica del anfitrión.

Filtrado: Gracias a Tailscale, el acceso RDP solo está disponible a temas de la interfaz virtual de la VPN, quendo totalmente oculto e inaccessible para cualquier usuario en la red Pública de Internet.

![](images/9cd85d13b8b4f9fe0213f3f19b7aa7f2431a42f1b85d84ee339f1656db2d5602.jpg)  
Figura 10. S.O Anfitrion: Habilitar Escritorio Remoto

# OTRAS CONFIGURACION

# - Configuración de Energía -

Se ha establecido una configuración de energia adecuada, para que el equipo no entre en suspensa.

Cambiar la configuración del plan: Equilibrado

Eija la configuración de modo de suspENSION y de pantalla para su equipo.

![](images/2b89fd750da274caccc390701fc6653eada8ad408a13ea8dd67525cdfc790c80.jpg)

Apagar la pantalla:

15 minutos

![](images/3e45d217bc0410f6ce41ad61097727f52ee650757fba00cd8299d62d412dfb8f.jpg)  
Figura 11. S.O Anfitrión: Configuración de Energía

Poner al equipo en estado de suspENSION:

Nunca

# - Configuración del Servicio de Escritorio de Remoto 
-

Se ha establecido una configuración estaica inicial para打架blos:

![](images/6c8eaf002e6cf8304eb6d9e576de1b0ab221989e234e5039413053aa7b476ebf.jpg)  
Figura 12. S.O Anfitrion: Configuración de Red

IP Privada: Asignación de una IP para asegurar que los servicios de gestion local sean siempre localizables.

Interfaz: Verificacion de la connexion mediante el cable Cat 6 para garantizar el ancho de banda necesario para el servidor Apache que correrá en laquina virtual.

# - Configuración WOL: Wake on LAN -

Con el objetivo de maximizar la eficiencia energetica y permitir la gestión del servidor en escenarios de apagado, se haimplemented la Tecnología Wake on LAN. Esto permite arrancar el equipo de forma remota mediante el envío de un paquete especial (Magic Packet) a工程技术 de la red local.

1) Configuración a nivel de Firmware (BIOS): Se accedió a la configuración de energia de la plac base para hamitar la característica Wake on LAN. Esto mantiene la tarjeta de red en un estado de bajo consumo, a la escucha de senales de activación incluo con el sistema operativo apagado.

![](images/79062358439c058a575b626bcd5e8480910cc1b4b455318e7fd2827dbbecb23e.jpg)  
Figura 13. S.O Anfitrión: Configuración BIOS para uso Tecnología WOL

2) Configuración de la Interfaz de Red en Windows 11: Para que el sistemas operativo Windows 11 no desactive la funcionalidad para ahorrar energia, se realizaron los siguientes ajustes:

$\Rightarrow$ Propiedades Avanzadas: Se activaron las functions 'Coincidir con el patron' y 'Magic Packet'.

![](images/c74a223dec46adb4adf0ae8c363c9306f4f2b44cac90d993daf269dd289b3c62.jpg)  
Figura 14. S.O Anfitrion: Habilitar Opciones de Red para WOL

$\rightarrow$ Administración de Energía: Se marco la option "Permitir que este dispositivo reactive el equipo", asegurar que la controladora Ethernet actue como disparador del encendido al recibir el paquete de datos spécifique.

![](images/30ef09bedf8defcb3ec9c387c0783aafac41da21f3d7b9cc051bd61a98c0cc2e.jpg)  
Figura 15. S.O Anfitrion: Permitir 'Magic Packet' para reactivar el equipo

En esteApartado se detalla la transformacion del equipo fisco en un servidor de virtualizacion mediante la和技术ia de Microsoft.

# ACTIVACION DE LA TECNOLOGÍA DE VIRTUALIZACION EN LA BIOS

Para que el hipervisoronga accesodirecto a las capacities del hardware, es imprescindible habilitar las extensiones de virtualizacion del procesador Intel i5-6500T.

$\diamond$ Parámetro habilido: Intel Virtualization Technology, que permite al procesador funcional como variedes procesadores lógicos.

# CPU Setup

```txt
EIST Support [Enabled]  
Core Multi-Processing [Enabled]  
Intel(R) Virtualization Technology [Enabled]  
UT-d [Disabled]  
TxT [Disabled]  
C1E Support [Enabled]  
C State Support [C1C3C6C7C8]  
Turbo Mode [Enabled] 
```

Figura 16. Entorno Virtualizzato: Activar Tecnología de Virtualización en BIOS

# INSTALACION DE LA CARACTERISTICA HYPER-V

Una vez preparado el hardware, se procedio a la instalacion del rol de hipervisor en Windows 11 Pro:

$\diamond$ Metu: A travs de "Activar o desactivar las caracteristicas de Windows".   
Components instalados:

$\text{。}$ Plataforma de Hyper-V: El motor del hipervisor.   
Herramentas de administración de Hyper-V: Consola gramífica (Administrador de Hyper-V) y el modulo para PowerShell.

Resultado: Tras reinicariat, el SO anfitrion se convierte en la "Participation Parent", encargada de gestionar el acces al hardware para el resto de máquinas virtuales.

![](images/c4df1980e97193974b1ffc093a9a3210f7674550f78de030d45a53bfe96135a1.jpg)  
Figura 17. Entorno Virtualizzato: Activar caracteristica Hyper-V en anfitrión

# CONFIGURACION DEL ENTORNO VIRTUALIZADO

Antes de create la VM, se preparó el entorno de red virtual:

# - Creación de Conmutadores Virtuales (Switches) -

Se configuró inicialmente un Conmutador Interno para permitir la communicatoridad segura entre el anfitrión (Windows) y el invitado (Debian) sin exposión externa inmediata.

Se verificó la asignación de memoria dinámica para permitir que el hipervisor gestione la RAM de forma eficiente según la energia del servidor web.

# CREACION DE LA MAQUINA VIRTUAL

![](images/83b4ceec5423a0d123c60d3642d67c9f16ec1e91e79bbf5b574959f0f7a5d8c2.jpg)  
Figura 18. Entorno Virtualizzato: Creación Maquina Virtual en Administrador de Hyper-V

![](images/9718e3bc1b11302c919b85e1a03e4221c1735de98672d86833b52ba37942cb3a.jpg)

![](images/8a8735b17ce3749d514a3c7b6d0caa3047a5164934373ecaa41f86b35c155493.jpg)

# Específicar el nombre y la ubicación

![](images/6ab63e8352a9a03fc3662598ce30a6018fe307b6e9849733988772379d7232ba.jpg)  
Figura 19. Entorno Virtualizzato: Asignacion Nombre de la Maquina Virtual

Se procedó al despliegue de la VM suguiendo estas espécificaciones típecas:

# - Específicar Generación: Generación 2 -

Justificación: Ofrece soporte para arranque seguro (Secure Boot), firmware bajo en UEFI y mayor rendimiento al eliminar la emulación de hardware heredado (legacy).

![](images/442b0899ef01218f7cc063e3ef9f6fac95c943cbf72d46928e949b65cb04f86c.jpg)

# Específicageneración

Antes de comenzar

Específicar el nombre y laubicación

# Específicageneración

Asignar memoria

Configurarmericanes de red

Conectar disco duro virtual
Opiones de instalación

Resumen

Elija la generación de estaquina virtual.   
$\bigcirc$ Generación 1   
Esta generación de máquinas virtuales admite sistemas operativos invitados de 32 y 64 bits y conta con el本身就是 hardware virtual que el de versiones anteriores de Hyper-V.   
$\mathbb{O}$ Generación 2   
Esta generación de máquinas virtuales es compatible con las ultimas caracteristicas de virtualización, tiene un firmware bajo de UEFI y NEEDA un sistema operativo Invitado de 64 bits.   
Una vez que se ha創造a unaquina virtual, su generacion no se puedaCambiar.

# - Asignación de Memoria -

RAM: 4GB con memoria dinámica activada.

![](images/4df7f95e4f0e47de95cedf9c8253a039f695d8760fc4626028c31eaf94f8a00e.jpg)  
Figura 20. Entorno Virtualizzato: Eleccion de Generacion 2 (UEFI)

# Asignar memoria

Antes de comenzar

Específicar el nombre y laubicación

Especificar generación

# Asignar memoria

Configurarmericanes de red

Conectar disco duro virtual

Opiones de instalación

Especifique la cantidad de memoria que se debe asignar a estaquina virtual. Puede explicar una cantidad entre 32 MB y 251658240 MB. Para mayor el rendimiento, especialque mas de la cantidad minima recommenda para elsysteme operativo.

Memoria de inicio: 4096 MB   
Usar la memoria dinamica para estaquina virtual.   
Al decide cuando memoria desea asignar a unaquina virtual,onga en cuenta como tiene previsto usar laquina virtual y que sistemas operativo executará.

Figura 21. Entorno Virtualizzato: Asignacion Memoria Dinamica

# - Configuración de Funciones de Red -

Conexión: Default Swith.

![](images/5ca3cb87c95f0a3a8605611295938abeefbc870ba1b34f9d5c29a6c87f489f30.jpg)  
Figura 22. Entorno Virtualizzato: Configuracion de Red Inicial en el Entorno Virtualizzato

# Configurar unidades de red

Antes de comenzar

Especificar el nombre y laubicacion

Especificar generacion

Asignar memoria

# Configurarmericanes de red

Conectar disco duro virtual

Opiones de instalación

Resumen

Cadaquina virtualnea incluye un adaptor de red. Puede configurar el adaptor de red para que use un conmutador virtual o pueda permanecer desconectado.

Conexión: Default Switch

# - Conectar Disco Duro Virtual 
-

Disco Duro Virtual: Archivo .vhdx de expansión dinámica almacenado en la unidad NVMe. 60,00 GB.

![](images/4c8d5e1f0e939cd99251c455a4349f1ad6500de76876f76f8398eb28fe4fd9e0.jpg)

# Conectar disco duro virtual

![](images/a7302ec287f84ad48d63f42420ff4130e5adccc24d5d8b0bdfa1060adf52fd21.jpg)  
Figura 23. Entorno Virtualizzato: Conexión de Disco Duro Virtual

# - Oportunidades de Instalación -

Selección del medio de instalación del sistema operativo que acogerá laquina virtual: Archivo de Imagen de Arranque de Debian 13.

![](images/411d908e99b7e0c80647b95a3e74e0c4f51a35480a913f8470fa9c0d820527b7.jpg)  
Figura 24. Entorno Virtualizzato: SeLECTION de Imagen ISO para instalacion Debian 13

# - Resumen -

![](images/718c38717853d4d7260a5970b4f19affdb8846c9715e3b6c7ed21f9bf7525094.jpg)

# Finalización del Asistente para create nuevoquina virtual

![](images/b7bdd36c9dc296170bd0f90239e5f6b36e8a530c4b7dd00f2c25075c88cb2559.jpg)  
Figura 25. Entorno Virtualizzato: Finalizacion Creacion Maquina Virtual

# CONFIGURACION DE SEGURIDAD

Para garantizar un entorno robusto, se aplicó la directiva de seguidad Secure Boot, activada con la plantilla "Microsoft UEFI Certificate Authority" para permitir que Debian 13 arranque de forma segura.

![](images/e5a306da3d2feb86346dbbd2c1d9e6687e3c19688f54340978828fcc26163360.jpg)  
Figura 26. Entorno Virtualizzato: Configuración de Seguidad Entorno Virtualizzato

# CONFIGURACION DE INICIO AUTOMÁTICO

Como parte de la estrategia para garantizar que el servidor web está disponible de forma ininterrupida, se ha configurado la的政治a de Acción de inizio automatica en Hyper-V.

$\diamond$ Configuración aplicada: Se ha的选择ado la option "Iniciar siempre estaquina virtual automatístico".   
Justificación técnica:Esta directiva asegura que, en caso de un reinicio del sistema operativo anfitrión (poractualizaciones críticas o mantenimiento) o tras una recuperación de energia, laquina virtual con Debian 13 arranque de forma autónoma sin intervención humana.   
Optimización de Recursos: Se ha existecido un retraso de inizio de 0 segundos, ya que, al ser el único servicioscritico del nods, se prioriza su disponibiliad inmediata sobre el host VICTOR-SERVER.

![](images/f1a6bab946d5b8136c45769d2f4212e7163f8a1848d1281ae43a6ad9dbcfb831.jpg)

![](images/339de379194ba38a0fcb6774bce55a4008f63ccbb4ab2bf166c27939e35951c5.jpg)  
Figura 27. Entorno Virtualizzato: Configuración Arranque Automático

# 5 - Configuración S.O. Invitado: Debian 13

Antes de起初 la instalación, es importanteañadir que la elección de Debian 13 se deba a la necesidad de contar con las versiones más recientes de paquetes como Apache 2.4.x y las ultimas libreras de seguridad, lo que garantiza una mayor compatibiliidad con las sistemas modernas de HTML5 y CSS3.

La instalación comenzará indicando:

Nombre de equipo:debian13   
- Nombre de dominio: victoralfer.com (optional)   
- Nombre completo del usuario: victoralfer   
$\diamond$ Tipo de Instalación: Manual

![](images/732d308987a6cae0653c30380e4124c5e00cc624788024c499d4643bac22f2a4.jpg)  
Figura 28. Instalación Debian 13: Nombre del equipo

![](images/1cb4ca6f020c9144c4d7b06206e0d951b893dba3342a8b58e0bbb54175755eef.jpg)  
Figura 29. Instalación Debian 13: Nombre del dominio

![](images/98f8a15f2250904a460e34cb570472a958d2d14c55fb327b9cef14db7474c244.jpg)  
Figura 30. Instalación Debian 13: Nombre del usuario

![](images/0c642d2b531a45ba31f70188c36d630defd6f92a65ab3dd95828804835c60669.jpg)  
Figura 31. Instalación Debian 13: Tipo de Instalación - Manual

# CREACION DE LA TABLA DE PARTICIONES

Para esteprojecto,seha optado por un esquema de participacion manual sobre el disco virtual NVMe de 256 GB,buscando un equilibrio entre simplicidad y seguidad de datos:

Participation EFI (/boot/efi): 499,1MB. Necesaria para el arranque en modo Generación 2 (UEFI). El sistemas de archivos elegido es FAT32, que es el重要因素 por el Firmware.   
Partación Raíz (/): 35,00GB. Se utilizes el sistema de ARCHivos ext4 por su estabilidad probada en enterornos de producción Linux.   
Área de Intercambio (SWAP): 8 GB. Configurada para dar soporte a la memoria RAM en picos de energia del servidor Apache. Es recommendable establercer el doble de la memoria RAM con la queonga laquina virtual.   
Directorios Personales (/home): 20,9 GB. Configurada para ubicar los directorios personales de todos los usuario delsystema operativo, aexception del superusuario 'root'. El sistema de ARCHivos elegido es ext4.

![](images/0f5b11dbc06ff81f6728d02114cd7a2301846731f130581d9fcc8ed1411c99e8.jpg)  
Figura 32. Instalación Debian 13: Creación Tabla de Parteciones

![](images/0ebedc9fb6add50ab8ca29260599d1f3335ae248089f734368772dd7b03156d7.jpg)  
Figura 33. Instalación Debian 13: Creación de la Parteción EFI

![](images/031ab9b57b1cf0e95bb20313412965692b6714477e89db03aa764f97e2406dd5.jpg)  
Figura 34. Instalación Debian 13: Creación de la Parteción Principal

![](images/2633cdc86b57d4320cf6b93d518ac4c29c91d5cb288632a6a3bcfb96a1312d31.jpg)  
Figura 35. Instalación Debian 13: Creación Parteción SWAP

![](images/0e9438b6ed983f039c86c88604f77557a03137560b8b89c7561264c68c3e2d39.jpg)  
Figura 36. Instalación Debian 13: Creación Partecía de Directoros Personales

![](images/b71944382ece156ac23f69fb3eaed4a39149580c77926c84e2ed0607ef3dfaf0.jpg)  
Figura 37. Instalación Debian 13: Confirmación de la Creación de las Parteciones

# SELECCION DE REPOSITORIOS Y CHARACTERISTICAS

Durante el proceso de instalación, se.tomaron decisiones críticas paramantener el servidor optimazo:

Gestor de Paquetes: Se selecciónó la option predeterminada "deb.debian.org", porque incluye todos los paquetes a los que optaremos en esteprojecto.   
Entorno de Escritorio: Se ha optado por el entorno de escritorio "Cinnamon", que es el más "parecido" a Windows. Ahnque toda la configuración se realizará mediante terminal, es una option importante si en alguna occasion punctual se tuviera que modifier algoo de los:ficheros (html, css o js) de la web alojada, con programas como SublimeText.   
Utilidades del sistema: Se selecciónaron únicamente "Utilidades estandar del sistemas" y el servidor "SSH server" para permitir la administración remota desde el anfitrión.

![](images/68017ca55868f407a6580325e6aee3cc791686ab0e22f72272ae6106d56f2566.jpg)  
Figura 38. Instalación Debian 13: Configuración Gestor de Paquetes

![](images/e1cecf522b2e2bab4905d7a3152a5ec78bdd1ffa1033abf7184b8153b2322aaa.jpg)  
Figura 39. Instalación Debian 13: Señeción de Programas a Instalar

![](images/740d96238794e8d88f2352e744dd1a80f569496ad11e79627d2d9098ca82e061.jpg)  
Figura 40. Instalación Debian 13: Finalizar Instalación

# CONFIGURACION DE DEBIAN 13

![](images/59afdc3212bd4302f09df1a20840c4424cfc67359ef2ebea408c4b7d6c3a002f.jpg)

# Privilegios de明晰

Para la gestion de permisos administrativos, se ha optado por una configuración granular en lugar de partir la cuenta de superusuario.

# -- Uso de Visudo --

Se utilizes el commando sudo visudo para editor de forma segura el archivo /etc/sudoers.

Justificación: El uso de visudo es unaística recommendada en administración de sistemas, ya quebloquea el archivo contra ediciones simultáneas y realiza una validación de sintaxis antes de guardar los Cambios, evitando que el sistema quede bloqueado por un error tipografico.

# -- Asignación de Permisos --

Como se observa en la configuración realizada (ver captura de pantalla), se otorgaron privilegios totales al usuario victoralfer bajo la directiva ALL=(ALL:ALL) ALL, permitiendole executarrialquier commande enrialquier terminaltraslaautenticacion.

Figura 41. Configuración Debian 13: Asignación de Permisos Usuales   
GNU nano 8.4 /etc/sudoers(tmp *   
# Ditto for GPG agent   
#Defaults:%sudo env_keep $+ =$ "GPG_agent_INFO"   
# Host alias specification   
# User alias specification   
# Cmnd alias specification   
#User privilege specification   
root ALL=(ALL:ALL) ALL   
victoralfer ALL=(ALL:ALL) ALL

![](images/63ec07b7c86b4d2148bbc96bc050e209a08f034331703582cd912365e767b4ef.jpg)

# Actualización de Listado de Paquetes

Nada más concurrir la instalación, se sincronizaron los indices de los repositories oficiales de Debian para garantizar que el software de base está al día:

Figura 42. Configuración Debian 13: Actualización de Paquetes   
```txt
= victoralfer@debian13:~  
    Archivo Editor Ver Buscar Terminal Apuda  
victoralfer@debian13:~$ sudo apt update  
[sudo]whelma para victoralfer:  
Obj:1 http://security.debian.org/debian-security trixie-security InRelease  
Obj:2 http://deb.debian.org/debian trixie InRelease  
Obj:3 http://deb.debian.org/debian trixie-updates InRelease  
Dos los paquetes está actualizados. 
```

![](images/ea97e7b802abb41f0f888f1c9a0cbc17f8fe85723e6ae26ae0d84009a8147991.jpg)  
Figura 43. Configuración Debian 13: Configuración de Interfaz de Red

# Configuración de Red Interna con Equipo Anfitrión

Para asegurar unacomingsacion fluida y privada entre Windows 11 y Debian 13 antes de partir a Internet, se configuró la interfaz de red interna:

I. Servicio NetworkManager: Se procedó a detener y deshabiliar el service NetworkManager, asociado a la configuración de red a temas del entornoístico de Debian, para que este service no interfiera en la configuración que se realice desde la terminal.

```txt
victoralfer@debian13:~$ systemdctl stop NetworkManager  
victoralfer@debian13:~$ systemdctl disable NetworkManager  
Removed '/etc/systemd/system/multi-user.target wants/NetworkManager.service'.  
Removed '/etc/systemd/system/network-online.target wants/NetworkManager-wait-on-line.service'.  
Removed '/etc/systemd/system/dbus-org.freedesktop.nm-dispatcher.service'. 
```

II. Configuración Interfaz de Red: Se fjó una configuración estática para la interfaz eth0 que permitiráunar comunicar de unaforma eficiente y directa con el SO Anfitrón a través de la red interna entre ambos. toda esta configuración se realizó en el archivo /etc/network/interfaces.

Dicho de Red: 172.18.64.0/20   
O Dirección IP Anfitrión (Windows 11): 172.18.64.1   
O Dirección IP Invitado (Debian 13): 172.18.64.10

El uso una direccion de red con una mascar /20 y no con una mascar /24, se debe a que de manière automatica Hyper-V genera este tipo de direcciones para la connectividad entre Anfitrion e Invitado. No se le dio mayor importancia ya que, esta configuracion es provisional y solo se mantendra cuando se 'blinda' el Entorno Virtualizzato completeo antes de salir a Internet.

```txt
GNU nano 8.4 /etc/network/interfaces *  
# This file describes the network interfaces available on your system  
# and how to activate them. For more information, see interfaces(5).  
source /etc/network/interfaces.d/*  
# The loopback network interface  
auto lo  
iface lo inset loopback  
# Configuración Red Anfitrión (Windows 11) - MV (Debian 13)  
auto eth0  
iface eth0 inlet static  
    address 172.18.64.10  
    netmask 255.255.240.0  
    gateway 172.18.64.1 
```

III. Prueva de conectividad: Se realizaron pruebas de ping bidirecciones para confirmar que el anfitrion pueda acceder al servidor web que se instalará a continua.

El servidor web Apache ha sido ellegantido para esteprojecto por su flexibilitad, grandocumentacion y estabilitad en sistemas basados en Unix.

# INSTALLACION DESDE LOS REPOSITORIOS OFICIALES

La instalación se realiza mediante el gestor de paquetes apt, asegurando la obtencion de la version estable másrecente y susdependencias de sécurité.

Comando de instalacion: sudo apt install apache2.   
Figura 44. Servidor Web Apache: Instalación   
```txt
= victoralfer@debian13:~ -  
Archivo Editor Ver Buscar Terminal Ayuda  
victoralfer@debian13:~$ sudo apt install apache2  
Installing: apache2  
Installing dependencies: apache2-bin apache2-utils libaprutil1-dbdl-sqlite3 libaprutil1t64 apache2-data libapr1t64 libaprutil1-ldap  
Paquetes sugeridos: apache2-doc apache2-suexec-pristine | apache2-suexec-custom ufw  
Summary: Upgrading: 0, Installing: 8, Removing: 0, Not Upgrading: 0 Download size: 2.231 kB  
Space needed: 7.909 kB / 26,8 GB available  
Continue? [S/n] 
```

Verónica del service: Una vez finalizo el proceso, se comprueba que el demonio está corriendo correctamente con el commando systemdctl status apache2.

# CONFIGURación DEL SITIO QUE ALOJARÁ LA PÁGINA WEB

Para una administración limpia, se evita modifier la configuración global de Apache. En su lugar, se create un Virtual Host spécifique para el projet.

# - Archivo de Configuración del Sitio -

Se genera el fichero /etc/apache2/sites-available/web-apuntes.conf. Dento de este, se define parámetroscriticos:

DocumentRoot: Se establéció la ruta absoluta /var/www/html como directorio raíz donde el servidor buscares los:ficheros de la párgina web.   
ServerAdmin: Se configuró el correo webmaster@localhost para el reporte de posibles errors del servidor.   
ServerName: Se asignó el dominio victoralfer.duckdns.org, que sera el nombre de dominio dinálico utilisé para acceder desde el exterior.   
$\diamond$ Logs: Se configuraron las rutas de los registros de errores y de acceso.

SSLEngine: Activar Protocolo SSL   
SSLCertificateFile: Fichero con Certificado Autofirmado   
SSLCertificateKeyFile: Fichero con Clave Privada   
- Redirect: Redirección para partir siempre la web con protocolo HTTPS

```txt
GNU nano 8.4 /etc/apache2/sites-available/web-apuntes.conf  
<VirtualHost *:80>  
ServerName victoralfer.duckdns.org  
# Redirectacion HTTPS  
Redirect / https://victoralfer.duckdns.org/  
</VirtualHost>  
<VirtualHost *:443>  
ServerAdmin webmaster@localhost  
ServerName victoralfer.duckdns.org  
DocumentRoot /var/www/html  
# Registros de Errores y Acceses  
ErrorLog ${APACHE_LOG_DIR}/error.log  
CustomLog ${APACHE_LOG_DIR}/access.log combined  
# HTTPS  
SSLEngine on  
SSLCertificateFile /etc/apache2/certs/server.crt  
SSLCertificateKeyFile /etc/apache2/certs/server.key  
</VirtualHost> 
```

Figura 45. Servidor Web Apache: Creación del Sitio

# GENERADOR DE CERTIFICADO AUTOFIRMADO PARA EL SITIO

Para tener un Certificado Autofirmado para el Sitio, se ha utilisé la web CertificateTools.com, que es una plataforma web especializada en la gestión y generación de certificados digitales (SSL/TLS) y Herramentas de criptografia.

# Private Key

![](images/3cfb385f16992b944f0272fc8faf6207c5bb9b4e7c9ef8876a822ce9644be1dd.jpg)  
Figura 46. Generación Certificado Autofirmado - Dirección

X victoralfer.duckdns.org

# Subject Alternative Names

![](images/ab8ea6a6d0287cb3188fd82e0ec9aa203db58cd0f5ebdcb234cf84a3d6b548a6.jpg)

X DNS: victoralfer.duckdns.org

Figura 47. Generación Certificado Autofirmado - DNS

# CSR Options

![](images/6d8809568ec5fb9a1c2f19e965c4fb5a6db8fbf0c18cebaefe5fce2c8f565aa0.jpg)  
Figura 48. Generación Certificado Autofirmado - Cifrado

# 1) Creación de Fichero de Clave Privada con número extraído de CertificateTools.com

![](images/cc108b878997d62486bbfc9dc0352179035815d4bd5db2a4654b8523b6bc540e.jpg)  
Figura 49. Generación Certificado Autor firmado - Creación Clave Privada

2) Creación de Fichero con Certificado con número extraído de CertificateTools.com

```pem
GNU nano 8.4 /etc/apache2/certs/server.crt *  
----BEGIN CERTIFICATE----  
MIID4DCCAsigAwIBAgIUDB8JIUp/X0rYTwVMTBUXNDIJe3wwDQYJKoZIhvcNAQEN  
BQAwXDEgMB4GA1UEAwxXdmljdG9yYWxmZXlUZHvja2Rucy5vmcxczAJBgNVBAYT  
AkVTMRswGQYDVQQIDBJDYXN0awxsZSBhbmQgTGXDs24xDjAMBgNVBAcMBULzY2Fy  
MB4XDIT2MDIWNT3MjEON1oXTMxMDIWNE3MjEON1owXDEgMB4GA1UEAwxXdmlj  
dG9yYWxmZXlUZHVja2Rucy5vmcxcCzAJBgNVBAYTAkVTMRswGQYDVQQIDBJDYXN0  
awxsZSBhbmQgTGXDs24xDjAMBgNVBAcMBULzY2FyMIIBiJANBgkqhkiG9w0BAQEF  
AAOCAQ8AMIIBCgKCAQEAXS7kh4pGBEicN7/hgVo5GVjurYZRFgUD5PdGBfGoV11  
i++vp+Q8vnS0dyVVayxYNgI7w3utHyQMMLfThVvwXsRNIY5GeNqHMQc7ZyK8km+  
QXZmnEu00JQXcLdZ20xDA7wd3GzlCIc9SNcb68mmv8XQREXRuy2tJLnc/5mVF5fe  
uRdSUMTEP4/3y0ovaNs0j3h6InOMcqkKX4RGpcuOkctvY8UKT9wjSZMCnOqCci7E  
PuxG/0kchkWY1W6Q/LAL82rGIQ5ZGY470MxUE8P9kb2be1JTcnRiPZY2SHmrXSvT  
vsrKJu6uW5VHHMfr2s0YZfdAW8rFgsVerBh062mfwIDAQABo4GZMIGWMB0GA1Ud  
DgQWBBTgTkgsRjEnB0kBHC6/3nGTIAuDuzAfBgNVHSMEGDAWgBTgKgsRjEnB0kB  
HC6/3nGTIAuDuzA0BgNVHQ8BAf8EBAMCBaAwIAYDVROLAQH/BBYwFAYIKWYBBQUH  
AwEGCCsGAUFBwMCMCIGA1UdEQQBMBmCF3ZpY3RvcmFsZmVylmR1Y2tkbnMub3Jn  
MAOGCSqGSIB3DQEBDQUAA4IBAQB6ptsIMHxI/2SlW8RoRN04X8ls9yfI8LEWH9W0  
ZUBAiJWrDWQEZheRYk87BlUBUImfosGTS15y56JnyMF2p3Lop7UVanpl5HtVsmDz  
tFS4kxPo61h47/r+EMIwxbwXrYwfCpHzHBrceDPB+Svs4zK3ZXqWm6yh5Mj6sSV7  
2T/FPS1S9G2rtUW1QkG90M3sZC5sGGIizZY50ty5FRevVMfKuqJ2jIAcElBPQxgka  
iBaJBuA6KIvXljE85fkAGglnqOFnsU784cSk7RsSMTsP+180g+LmZ+E7x0NUZL  
63ZH774T68lEGonLMc1NJoGWk1vaiSZEmb/yROnMe/HeG10  
---END CERTIFICATE---- 
```

Figura 50. Generación Certificado Autor firmado - Creación Clave Pública

# ACTIVACION MODULO SSL EN SERVidor WEB APACHE

Será你需要 activar el modulo SSL en el Servidor Web Apache para poder usar las directivas relacionadas con este protocolo en nuestro situó.

```txt
root@debian13:/home/victoralfer# sudo a2enmod ssl   
Considering dependency mime for ssl:   
Module mime already enabled   
Considering dependency socache_shmcb for ssl:   
Enabling module socache_shmcb.   
Enabling module ssl.   
See /usr/share/doc/apache2/README.Debian.gz on how to configure SSL and create s elf-signed certificates.   
To activate the new configuration, you need to run: systemctl restart apache2   
root@debian13:/home/victoralfer# systemctl restart apache2 
```

Figura 51. Servidor Web Apache: Activar Móduo SSL

# ACTIVACION DEL SITIO

Con el archivo de configuración preparado, se procebe a su puesta en marcha realizando las herramrientas propias de Apache:

# - Habilitar el nuevo situo -

Se utilizes el commando sudo a2ensite web-apuntes, el cui create un enlace simbólico en el directorio sites-enabled.

```txt
victoralfer@debian13:~$ sudo a2ensite web-apuntes Enabling site web-apuntes. To activate the new configuration, you need to run: systemdctl reload apache2 
```

Figura 52. Servidor Web Apache: Activación del Sitio

# - Deshabilitar el situ predeterminado 
-

Paraataricflictosdevisualization,seejcutadaudoa2dissite000-default.

```txt
victoralfer@debian13:~$ sudo a2dissite 000-default  
Site 000-default disabled.  
To activate the new configuration, you need to run:  
systemctl reload apache2 
```

Figura 53. Servidor Web Apache: Deshabilitar Sitio Predeterminado

# - Recarga del Servicio 
-

Se aplicá la nuevo configuración con sudo systemdreload apache2, lo que permite que losCambiosenetren en vigor sin interruprir las conexionesactivas.

# 7 - Instalación y Configuración SMB/CIFS

Para/agilizar el flujo de trabajo, se haimplemented un sistema de ARCHivos compartido que permite al administrador editar el número de la网页 web desde las herramentas nativas de Windows 11 y poder acceder a los fisicheros desde laquina virtual con Debian.

No se ha querido que la carpeta comparta coincidiera con la ruta que acoge el situ web-apuntes en el Servidor Web Apache, para evitar que se publicque contenido no deseado. Es bien sabido que cuando se editan:ficheros relacionados con la estrutura, el estudio o el dinamismo de una pagea web; se pueda realizarmultiple modifications hasta lograr un resulto que satisfaga al Diseñador web.

# CONFIGURACION DE CARPETA COMPARTIDA EN WINDOWS 11

En el equipo anfitrión (VICTOR-SERVER), se preparó el recurso compartido:

# - Creación usuario especialístico -

Se optó por la 创建 del usuario asignado "compartir" para partir carpetas entre el equipo anfitrión y el invitado. La 创建 de dicho usuario, como como la fijación de su contraseña, se realizó desde el Administrador de Equipos de Windows 11.

![](images/74374c2ae16d83f3c2db12a012ab68f5bd2c4bb68b2db12c48c495d628e48628.jpg)  
Figura 54. Configuración SMB/CIFS: Creación Nombreo es名额

# - Creación del Directorio -

Se creó la carpeta dedicada en lasumarente ruta: D:\Presentación

# - Permisos para Compartir 
-

Se habilitó el protocolo SMB para esta carpeta, asignando permisos de Lectura y Escritura al usuario "compartir" del equipo anfitrión.

![](images/5e18e165bf8d1e0ebeeb075d0630db03dcf25c9e79a751a653cf5cb4e60e81ee.jpg)

![](images/42ed9481feef83cf650a99a4062aebdc0d2769e5cf871d37fb1ffda0a127c641.jpg)  
Figura 55. Configuración SMB/CIFS: Compartir Carpeta en equipo anfitrión

# INSTALACION DEL CLIENTE SMB Y UTILidades CIFS EN DEBIAN 13

Para que Debian pueda "entender" y montarOOKs de red de Windows, es necessario instalar el soporte para elsystema de ARCHivos comun de Internet (CIFS):

Comando de instalacion CLIENTE SMB: sudo apt install smbclient   
Figura 56. Configuración SMB/CIFS: Instalación Cliente SMB en Debian   
```yaml
victoralfer@debian13:~$ sudo apt install smbclient  
Installing:  
    smbclient  
Installing dependencies:  
    python3-ldb python3-talloc samba-common tdb-tools  
    python3-samba python3-tdb samba-common-bin  
Paquetes sugeridos:  
    heimdal-clients cifs-utils  
Summary:  
    Upgrading: 0, Installing: 8, Removing: 0, Not Upgrading: 0  
    Download size: 5.006 kB  
    Space needed: 28,9 MB / 26,8 GB available  
Continue? [S/n] 
```

Comando de instalacion Utilidades CIFS: sudo apt install cifs-utils   
Figura 57. Configuración SMB/CIFS: Instalación Utilidades CIFS en Debian   
```txt
victoralfer@debian13:~$ sudo apt install cifs-utils  
Installing:  
    cifs-utils  
Installing dependencies:  
    keyutils  
Paquetes sugeridos:  
    winbind  
Summary:  
    Upgrading: 0, Installing: 2, Removing: 0, Not Upgrading: 0  
    Download size: 156 kB  
    Space needed: 529 kB / 26,7 GB available  
Continue? [S/n] s 
```

Justificación Instalación de Utilidades CIFS-UTILS: El paquete@cifs-àtiLs proportiOna las herrmiantas necessities para utiliser el commando mount -t cifs, permitiendo tratar una carpeta remota como si fuera un directorio local.

# MONTAJE DE LA CARPETA COMPARTIDA EN DEBIAN 13

El proceso de vinculación se realizó cuando这些都是 pasos技术和:

- Creación del Directorio 
-

Se creó la carpeta “Presentacion” dentro del directorio personal del usuario victoralfer

Comando: mkdir $\sim$ Presentacion

# - Montaje Permanente 
-

Para que el montaje sea permanente tras reinecer el servidor, se debe añadir la linea correspondiente en el fichero /etc/fstab.

```javascript
//192.168.1.90/Presentacion /home/victoralfer/Presentacion cifs auto,username=compartir,)password=XXXX 0 0 
```

$\rightarrow$ //192.168.1.90: direccion IP del servidor   
$\rightarrow$ /Presentacion: carpeta成分ida   
$\rightarrow$ /home/victoralfer/Presentacion:punto de montaje   
$\rightarrow$ cifs: tipo de montaje   
$\rightarrow$ auto,xurname=compartir,…password=XXXX:opuestos de montaje

$\circ$ auto $\rightarrow$ montaje automático   
$\circ$ username $\rightarrow$ nombre del usuario para acceder al-Reurso compartido   
$\circ$ password $\rightarrow$ contraseña del usuario para acceder al-Requro compartido

→ 0 0: parámetros 'dump' y 'pass'

```txt
GNU nano 8.4 /etc/fstab   
# device; this may be used with UUID= as a more robust way to name devices # that works even if disks are added and removed. See fstab(5). #   
# systemd generates mount units based on this file, see systemd.mount(5). # Please run 'systemctl daemon-reload' after making changes here. # # <file system> <mount point> <type> <options> <dump> <pass> # / was on /dev/sda2 during installation   
UUID=0ea69a5c-6dad-421b-b9ed-c5776c763e5f / ext4 errors=remount-ro 0 1 # /boot/efi was on /dev/sda1 during installation   
UUID=0CFE-2CF7 /boot/efi vfat utf8 0 0   
# /home was on /dev/sda4 during installation   
UUID=db3fbec0-0e07-4f19-9c1c-a2c49be50a9c /home ext4 defaults 0 2 # swap was on /dev/sda3 during installation   
UUID=b54e22a3-fcb7-4d7c-a563-c84871c387bb none swap sw 0 0   
/dev/sr0 /media/cdrom0 udf,iso9660 user,noauto 0 0   
# Carpeta Compartida Windows   
//192.168.1.90/Presentacion /home/victoralfer/Presentacion cifs auto,username=comparti,passwor 
```

Figura 58. Configuración SMB/CIFS: Montaje Permanente del Recurso Compartido

# - Aplicar Cambios de Montaje Permanente 
-

Una vez montada la carpeta, se utilizes el commando mount -a para aplicar losCambios:

```txt
victoralfer@debian13:~$ sudo mount -a  
mount: (consejo) fstab ha sido modificado, pero systemd sigeuse utilizing  
la version antigua; utilise 'systemctl daemon-reload' para recargar. 
```

El desarrollo de la interfaz se ha centrado en crear una herramienta uyil de consultatécnica, aplicando principios de usability y rendimiento.

# DISEÑO DE LA ESTRUCTURA CON HTML5

Se ha empleado HTML5 semántico para garantizar que el contenido sea accesible y fácil de indexar por los motores de búsqueda.

$\diamond$ Etiquetado Semántico: Uso de etiquetas como <header>, <aside>, <section>, <article> y <footer> parastructuring la información deforma lógica.

```txt
<!-- CABECERA -->
<header>
    <img src="img/cabecera.jpg" alt="Imagen de Cabecera" title="Cabecera">
    <div class="ham" onclick="fun_ham">
        <img id="icono_ham" src="img/hamburguesa.png" title="Pincha y despliega el menu">
    </div>
</header> 
```

Figura 59. Creación Págrina Web: Etiquetado Semático

Metadatos: Configuración exhaustiva de etiquetas <meta> para definir la主权 (Víctor), descripción del situ y directrices para robots de indexación (noindex, nofollow).

<meta charset="utf-8"> <meta name="author" content="Victor"> <meta name="description" content="Pagina Web con el Proyecto del Ciclo Formativo de   
Grado Superior ASIR de Vicor Alvarez Fernandez."> <meta name="keywords" content $=$ "HTML, CSS, JavaScript"> <meta name $=$ "robots" content $=$ "noindex,nofollow"> <meta name $=$ "viewport" content $=$ "width $\equiv$ device-width, user-scalable=no,   
initial-scale=1.0,maximum-scale=1.5,minimum-scale=0.8">

Figura 60. Creación Páginas Web: Metadatos

Organización Modular: Elprojecto se divide en differentes páginas temáticas (índice,apuntes de HTML,CSS,JS,etc.),facilitando la navigación del usuario.

```txt
apuntes.css 15/01/2026 16:09 Chrome HTML Do... 63 KB  
apuntes_formularios 15/01/2026 18:30 Chrome HTML Do... 37 KB  
apuntes_html 15/01/2026 18:32 Chrome HTML Do... 61 KB  
apuntes_jQuery 15/01/2026 18:28 Chrome HTML Do... 33 KB  
apuntes.js 15/01/2026 18:30 Chrome HTML Do... 113 KB  
index 15/01/2026 13:49 Chrome HTML Do... 25 KB 
```

Figura 61. Creación Págrina Web: Organización Modular

# CREACION DE UN ESTILO DEFINIDO CON CSS3

El Diseño visual se apoya en hojas de estudio externas que defineen una identidad visual profesional y moderna.

Tipografia: Integración de fuentes externas mediante Google Fonts (Fjalla One y Anton) para melhorar la estética y legibility.

```html
<!-- Enlace con Fuente Fjala de Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet"> 
```

Figura 62. Creación Páginas Web: Tipografías instaladas

$\diamond$ Effectos Visuales: Implementación de transiciones suaves,+Sombreados yselectores avanzados para mejorar la experiencia de usuario.

aside{ width: $50\%$ /\*Tamaño para menu desplegable con JavaScript \*/ margin:0020px0; background-color:white; opacity:1; z-index:1; position: fixed; top:0; right:-100%; transform:translateX(100%); /\*Trae el menu desde comaera \*/ transition:transform 0.8s ease-out;/\*Transiencia de la propidad transform\*/   
}

Figura 63. Creación Págrina Web: Efectos Visuales

Jerarquía Visual: Uso de classes e IDs especialicos para controlar el flujo de los elementos y la disposicion de las cajas de contenido.

```html
<p class="bienvenido-i">Esta web nace como un <span class="negrita">projecto personal y的专业desarrollado en el marco del Ciclo Formativo de Grado Superior en Administracion de Sistemas Informaticos en Red (ASIR)</span>. Su objetivo principal es poderar a estudiantes del ciclo, y en especial a quienes se preparan para presentarse a las pruebas libres, una modalidad que exige un alto nivel de autonomia, organizacion y constancia.</p> 
```

Figura 64. Creación Páginas Web: Uso de Clases

```txt
<ul id="menu-1" class="menu-apuntes">
    <a href="apuntes_html.html" target="_blank"><li>Apuntes HTML</li></a>
    <a href="apuntes_css.html" target="_blank"><li>Apuntes CSS</li></a>
    <a href="apuntes_formularios.html" target="_blank"><li>Apuntes Formularios</li></a>
    <a href="apuntesjs.html" target="_blank"><li>Apuntes JavaScript</li></a>
    <a href="apuntes_jQuery.html" target="_blank"><li>Apuntes jQuery</li></a>
    <a href="https://github.com/victoralfer" target="_blank"><li>Repository GitHub</li></a>
</ul> 
```

Figura 65. Creación Págrina Web: Uso de IDs

```scss
azul {
    color: blue;
    font-style: italic;
    font-size: 1.1em;
    line-height: 20px;
} 
```

Figura 66. Creación Págrina Web: Aplicación Clases en CSS

# IMPLEMENTACION DE 'RESPONSIVE DESIGN'

Para asegurar la correcta visualización en cualquier dispositivo (movil, tablet o PC), se han aplicado痫icas de diseño adaptativo:

Limitación de Ancho de Contenedores: Se haimplemented una directiva de Diseño que limita el ancho máximo de los contenedores principales a 1400px.Esta medida garantiza que en monitores de grandes dimensiones (27" o superiores), el camino visual sea el adecuado. Al evitar que el contenido se extienda indefinidamente, se mantiene una longitud de ligne de texto optima, mejorando drásticamente la legibility y eviction la fatiga visual del usuario.   
Viewport y Escala: Uso de la etiqueta <meta name="viewport"> con los parámetros user-scalable=no e initial-scale=1.0 para asegurar que el navigador renderice la web correctamente en dispositivos móvil desde el primer instante.

```html
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.5, minimum-scale=0.8"> 
```

Menu Adaptativo: El situó cuenta con un sistemas de navigación que alterna entre una barra de herramrientas completa y un menu de tipo "hamburguesa" gestionado por JavaScript, optimizando el espacio en pantallas pequeñas.

![](images/e90d1a1e6a266c81adf2d0c909de234d81feddeb4e161c40aa6354d204f25819.jpg)  
Figura 67. Creación Págrina Web: Aplicación de Viewport y Escalas

![](images/0d84c8a4a6cfd4b8f2c22af678cac5814950fb77350dbe79c52980c3e232d7aa.jpg)  
Figura 68. Creación Páginas Web: Menús Adaptativos

![](images/16271971fde57b8f6b9ddb7c69d434f5ae9126134a27bc8a6719dcaf6338c21f.jpg)

VARI

# PROYECTO CFGS ASIR

FERNANDEZ - ANO 2026 - IES LOIS PENA NOVO - VILALBA (LUGO)

![](images/efeb898d8b9009fada33ee5da1e6918ea4888ce2a0e055b000eb8a24dc8acb18.jpg)

![](images/5c7416d8c9c091b351107c6a6e41ebe39a11b4adbdbb0a7373883be714d8c173.jpg)

Esta web nace como un proyecto personal ytutorial desarrollado en el marco del Ciclo Formativo de Grado Superior en Administración de Sistemas Informáticos en Red (ASIR). Su objetivo principal es poder a estudiantes del ciclo, y en especial a quienes se preparan para presentarse a las pruebaslibraries, una modalidad que exige un alto niveau de autonomía, organización y constancia.

![](images/966c00ad90729bf1b6109a789a567727b41ca484ad3c32e5c81ca210055da27a.jpg)

VICTOR ALVAREZ FERNANDEZ - ANO 2026

# PROYECTO

EZ FERNANDEZ - ANO 2026

# CERRAR MENU

# Inicio

s HTML

CSS

s Formularios

s JavaScript

s jQuery

torio GitHub

# Documentos

Información WordPress

![](images/1276e7ef39d3fcdf4c0458913fc6dc87951b687f0fc08e9cbf297007d45adf08.jpg)  
Figura 69. Creación Págrina Web: Vista de Menús en Smartphone

# GENERACION DE DINAMISMO CON JAVASCIPT Y,JQUERY

La interactividad es una pieza clave para transformar una página esta en una aplicación web funcional.

# - Funcionalias Implementadas con JavaScript -

- Menús Desplegables: Gestion del menu de navigación para dispositivos míviles mediante sistemas deblick.

```txt
<h2 class="cerrar-menu" onclick="fun_ham(" title="Haz click para cerrar el menu">CERRAR MENU</h2> 
```

Figura 70. Creación Págrina Web: Función para Ejecutar Menu Desplegable

$\diamond$ Bucador Dinamico: Implementacion de un systema de businga que filtra contentsados en tiempo real y muestra mensajes personalizados si no hay coincidencias.

Ver fichero de Csgido: https://victoralfer.duckdns.org/otros/fun_buscador.txt

$\diamond$ Funciones de Teclado: Implementación de sistemas de teclado para/agilizar las

consultas en el Buscador Dinamico:

$\circ$ CTRL + $b \rightarrow$ Desplegar/Plegar el Buscador   
$\circ$ CTRL $+r \rightarrow$ Resetear el Contenido Buscado   
CTRL + Enter → Buscar

![](images/a4db034cb336bb5c20b0b189a5ca41cdc53d403de389372fff64a15c0433383c.jpg)  
Figura 71. Creación Págrina Web: Funciones de Teclado

```javascript
/* Sacar Buscador (Toggle) pulsando 'Ctrl + b' */  
document.addEventListener("keydown", function(e) {  
    if (e ctrlKey && e.key == "b") {  
        fun_sacar_buscador();  
    }  
}); 
```

$\diamond$ Navegación Fluida: Insercción de botones "ancl" con animaciones de desplazimiento suave hacía la parte superior de la頁a (scrollTop).

1

WordPress: Enlaces de Interes

2

WordPress: Enlaces de Interes

![](images/dd01fb583bde01f23cc2584591958af84035b20834266ce8f7416f5af0f99e15.jpg)  
Figura 72. Creación Págrina Web: Sección Acordeón Cerrada

![](images/5a5fd7bf71a1f962a689860077eba95f6aab8ec50fc0e150aeea9f80b1dd8f29.jpg)

![](images/8f347850a274c66d3ca8b484a88f86254f445d86b15801c89beff1a4e086c90c.jpg)

![](images/a2c3b3c9286f0a36c8c32a904b5af87fb32efe08c62f60a70f3e38b17d35537f.jpg)  
Figura 73. Creación Págrina Web: Sección Acordeón Abierta

# - Librería jQuery -

Se ha integrado la version 3.7.1 de jQuery para simplificar la Manipulación del DOM y gestionar eventos de forma eficiente.

```html
<!-- 2#: Enlace web a jQuery -->  
<script src="https://code/jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NXn+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script> 
```

Figura 74. Creación Páginas Web: Inserción Librería jQuery

Ejemplpo para Enlace de Ancla Dinamico   
/* Enlace de Ancla al[inicio de la网页 */
\( ("anclal").on("click", function(   ) \{
	\) ("html").animate({scrollTop: 0}, 600);
\});

$>$ $\S (\# ancla)\rightarrow$ Captura de la id 'ancla' del HTML   
$\succ$ .on ("click", function() {{}); $\rightarrow$ Acceso a la funciona con un evento de "click" (click con el ratón) sobre el elemento con la id 'ancla'   
$>$ $\$ 11$ html".animate({scrollTop: 0}, 600); → Función a executar que consiste en enlazar con la etiqueta html (inicio de la頁), realizando una animación con la propietad scrollTop: 0 y un transmisión de 600 ms.

![](images/cdfc7b22fa40b60f16c4f2181889755f9b66a166f14f01545cf017385b925e3e.jpg)  
Figura 75. Creación Págrina Web: Función Enlace de Ancla

![](images/165b805cee98aebd5c302272fac7a04fe0b2829ace0a3a965f96fa44d5ff3f21.jpg)

![](images/f2ceeb5a881527ce98362c734986c4aed9ef9767b034b0123f4738f7b4a53fae.jpg)

![](images/671621068763c1950e44d6a6a0679b9de43d6088c6d5f335d8d67a4a23c84fc1.jpg)

![](images/607f9fb44b38091b187cc5846a449fce3b9f9548a7038d9ff5dbefec6ebea8da.jpg)

![](images/c37b8a0f10ff9be0157a6f7f1e19daa5f26c6000da704823c140843c66f3b016.jpg)  
Figura 76. Creación Págrina Web: Muestra del Botón de Ancla en el Sitio Web

# EL SERVICOR COMO REPOSITORIO DE DOCUMENTACION TECNICA

Más alla del despliegue técnico, la网页 web se ha configurado para servir como un repositorio centralizo de apuntes sobre las technologías realizadas en el ciclo de ASIR.

$\diamond$ Contenso Especializzato: Se han desarrollado páginases especialicas para documentar el uso de etiquetas y atributos en HTML5,.selectores y transiciones en CSS3,y Manipulacion de objetos y unidades en JavaScript.   
Sección de Formularios: Se incluye una guía detallada sobre la 创建ación de formularios y el uso de pseudoclasses como :required, :invalid y :focus, elementoscriticos para la interacción usuario-servidor.   
$\diamond$ Guía de jQuery: El Sitio documenta el uso de la libreria jQuery (version 3.7.1) para la gestion de animaciones y eventos del DOM.   
Integración con WordPress: En la págin principal (index.html), se ha dedicado un空間 a WordPress, donde se pueda encontrar recomendaciones de plugins esenciales (Sassy Social Share, YoastSEO), demostrando la capacité del servidor para orientar sobre.Other plataformas de gestion de contenido (CMS).

# OPTIMIZATION Y BUENAS PRÁCTICAS DE DESARROLLO

Basado en el análisis de los:ficheros fuente,se hanimplemented lassiguientes practicas profesionales:

SEO Local y Privacidad: Uso de las directivas noindex, nofollow en las etiquetas <meta robots> de todas las páginas para registrar que el contenido de(desarrollo sea indexado por motores de búsqueada cuando el servidor está en pruebas.

```html
<meta name="robots" content="noindex,nofollow"> 
```

Figura 77. Creación Págrina Web: Uso Directivas noindex y nofollow

Gestión de Recursos Externos: Integración de fuentes mediante Google Fonts (Fjalla One, Anton) y scripts de jQuery via CDN, optimizando la entrega y el aspecto visual sin sobrecargar el almacenimiento local del servidor Debian.

```html
<!-- Enlace con Fuente Fjala de Google Fonts --> <link href="https://fonts.googleapiis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet"> 
```

Figura 78. Creación Págrina Web: Inclusion de Google Fonts

```txt
<!-- 2: Enlace web a jQuery -->
<script src="https://code/jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=} " crossorigin="anonymous"></script> 
```

Figura 79. Creación Páginas Web: Inclusion de jQuery

Nomenclatura Profesional: Organización de ARCHivos mediante una estrutura de directorios clara (css/, js/, img/).

![](images/aef6419be8a70fe3922a17ac94f472da929a64e4e0ecd27a3c2500c3aa5cc175.jpg)

Figura 80. Creación Págrina Web: Organización de Archivos

![](images/9ade5d8db761f1cc6967ab6536c09783ff747878e9e40c3a9e0cbe9a9cee52e3.jpg)

# PROYECTO CFGS ASIR

VICTOR ALVAREZ FERNANDEZ - ANO 2026 - IES LOIS PENA NOVO - VILALBA (LUGO)

![](images/c5ff9d2463e26adeff13cba84f6503ff042ff6273adc23552cff9bd6dad8d5c5.jpg)

![](images/1e6287be21dc6c69f62d7a8b340fdec38fa34b8fadab75d0c7e116bb72d73f1f.jpg)

Esta web nace como un proyecto personal y专业技术e desarrollado en el marco del Ciclo Formativo de Grado Superior en Administracion de Sistemas Informaticos en Red (ASIR). Su objetivo principal es poder a estudiantes del ciclo, y en especial a quienes se preparan para presentarse a las pruebas libres, una modalidad que exige un alto nivel de autonomia, organizacion y constancia.

Figura 81. Creación Páginas Web: Vista Páginas Principal

Una vez configurado el service de ARCHivos partidos y el servidor web, se procedía a la fase de despliegue de contentsidos.

# PROCEDIMIENTO DE SINCRONIZACION Y SEGURIDAD DE PUBLICACION

El volcado de:ficheros no se realiza deforma indiscriminada sobre el directorio raiz del servidor. Se ha diseñado un flujo de trabajo que prioriza la integridad del situ webapuntes:

Seguidad en la Edicion: Se ha decidido deliberamente que la carpeta分成 en Windows no coincida directamente con la ruta de produccion en el servidor Apache.   
$\diamond$ Prevencion de Contenso no Deseado:Esta separacion evita la publicacion automatica de versiones intermedias, ARCHivos temporales o pruebas fallidas que surgen durante el proceso creativo. Como es habitual en el diseño web, se realizan multiple modifications en la estructura (HTML), el estudio (CSS) o el dinamismo (JS) antes de alcanzar un resulto optimo.   
$\diamond$ Control de Versiones Manual: Sólo cuando el Diseñador está satisfecho con el的结果ado en el entorno de ediciones, se procebe al volcado final en el directorio /var/www/html. Esto asegura que el usuario final siempre visualice una versionisable y depurada del repository de apuntes.

# PROCESO TECNICO DE DESPLIEGUE: VOLCADO TOTAL INICIAL

Para formalizar la subida de ARCHivos, se utilizes un commando de copia que transfiere la estructura completa desde el entorno de edicion al entorno de produccion de Apache.

Metodología de "Cero Errores": El volcado no se realiza de forma parcial; se ejectca un volcado total una vez que el Diseño y la funcionalidad (HTML/CSS/JS) han sido validados en el equipo anfitrión.   
Comando de Despliegue: Se utilizes la terminal para copiar recursivamente el contenido, asegurando que se mantenga la jerarquía de directorios necesaria para los recursos椽nicos (imágenes, scripts y estilos).   
Gestión de la Cache y Persistencia: Al realizar un volcado total, se garantiza que no queden archivos huérfanos de versiones anteriores en el servidor, manteniendo el directorio /var/www/html limpio y optimazo.

Archivo Editor Ver Buscar Terminal Ayuda

victoralfer@debian13:~ $\$ 10$ sudo cp -r Presentacion/\* /var/www/html/

Figura 82. Volcado de Ficheros

Como es obvio, cuando se produzcan modificaciones con el paso del tiempo en el contenido de la Pagina Web, se realizará el proceso de copiado de los:ficheros y/o directorios necessarios, sin tener que acudir al volcado complete.

# 10 - Configuración de la Red Exterior

Tras completar el(desarrollo y las pruebas en el entorno aislado, se procebe a la fase de publicación. Paraarlo, es necesario que laquina virtual deje de ser un elemento interno y se convierta en un[nodo visible Dentro de la red local y, por extension, en Internet.

# CREACION DE CONMUTADOR EXTERNO EN HYPER-V

Para permitir que la web sea accesible desde el exterior, se sustituyo el Default Switch (conmutador interno) por un Conmutador Virtual Externo.

# - Procedimiento -

En el Administrador de conmutadores virtuales de Hyper-V, se creó un nuevo conmutador vinculado al adaptor de redístico del equipo anfitrión.

![](images/9e5cc53fc1de1d0651c15ed1622b14e9373cbd67b8ee8cf37820ccfeda098b1e.jpg)  
Figura 83. Configuración Red Exterior: Creación Conmutador Virtual Externo

![](images/e3cd19402aa4ac861f09ad775cc2cdf887d4320a6e58c9a3a3599be285ff1808.jpg)  
Figura 84. Configuración Red Exterior: Propietades Conmutador Virtual Externo

# - Cambio en Maquina Virtual 
-

Se modificó la configuración de laquina virtual Debian 13 para usar este nuevo adaptor, permitiendo que tengas su propia identidad dentro de la redFsica del hogar/laboratorioio.

![](images/f065b1f6403bf0f777a1db3aa47fa1a791d786128c1385089945f7d8733b6b13.jpg)  
Figura 86. Configuración Red Exterior: Configuración de Red en Debian

Figura 85. Configuración Red Exterior: Elección Adaptador Externo para Invitado

# CONFIGURACION DE LA INTERFAZ DE RED EN DEBIAN 13

Al cambiar a un conmutador externo, fuenecessary reconfigurar los parámetros de red de Debian para adaptarlos al rango del router fisico:

# - Fichero /etc/network/interfaces 
-

Se establéció una IP esta de red local, definiendo la direccion, la mascar de subred y la puerta de enlace (gateway) del router.

Nueva Dirección IP: 192.168.1.91   
> Nueva Mascar de Subred: 255.255.255.0   
Nueva Puerta de Enlace: 192.168.1.1   
$\succ$ Servidos DNS: 80.58.61.250 y 80.58.61.254 (los del proveedor ISP)

```txt
The loopback network interface auto lo iface lo inset loopback 
```

```txt
Configuracion Red LAN   
auto eth0   
face eth0 inset static address 192.168.1.91 netmask 255.255.255.0 gateway 192.168.1.1 dns-nameservers 80.58.51.250 80.58.61.254 
```

# - Fichero /etc/resolv.conf -

Seañadieron manualmente los servadores DNS para garantizar que el(servitor pueda resolver nombres de dominio externos.

![](images/d09cec745638df65e3c1fa4b9f4739e6c1e4f9f056294beabc63356aebd7f1bd.jpg)  
Figura 87. Configuración Red Exterior: Configuración DNS en Debian

# APERTURA DE LOS PUERTOS 80 Y 443 EN EL ROUTER

Para que el tráfico web统计数据 al servidor, se accedido a la configuración del router para realizar el Port Forwarding:

Se asociaron los puertos 80 (HTTP) y 443 (HTTPS) a la direccion IP privada estática asignada a laquina virtual Debian.   
$\diamond$ Este permite que cadaquier peteción externa dirigida a nuestra IP Pública sea redirigida directamente al servidor Apache.

![](images/d13cdd26284f939c37d7f9eda8ad5c8e8178a1a24260a80b7f13f4dc2d5bf1ce.jpg)  
Figura 88. Configuración Red Exterior: Apertura Puerto 80 (HTTP) en el Router

![](images/e28851fda5e1a0062537fdbd8e5df57c7fd0ff71539365e3be372be1492ab39a.jpg)  
Figura 89. Configuración Red Exterior: Apertura Puerto 443 (HTTPS) en el Router

# RESOLUCION DE PROBLEMÁTICAS DNS E IP DINÁMICA CON DUCKDNS

Dado que el ISP offre una IP dinámica (que cambia al reinecer el router o periodicamente), se implementó DuckDNS para mantener la accesibilitad.

![](images/ead95180506dd9fd1d942cf4d7c44b570ef804bd3d734becab9062038db1a5fe.jpg)

# Creación de cuenta y Funcioncimiento

Se creó un subdominio en DuckDNS para asociar un nombre de dominio bajo a la IP Pública variable.

Ventaja: El serviciosactualiza automatistically el registrar DNS. De esta forma, el dominio siempre apunta a la IP correcta, independientelemente de los Cambios realizados por el proveedor de Internet.

![](images/336b949129cd578eb9d5ecc7e153c4567dc37bb23f4d00208498d10997fdce32.jpg)

![](images/3afe2aadb8d8b9054d206d2983bf66dda2aa31862302734d3eecacf6c31af7cd.jpg)  
Figura 92. Configuración Red Exterior: Automatización del Script a工程技术 Cran

Figura 90. Configuración Red Exterior: Creación Cuenta DuckDNS

# $\text { Configuración y Automatización de Cambio de IP a DuckDNS }$

Dado que el servidor Debian no pueda detectar de forma nativa cuando el router cambía la IP Pública (ya que el servidor solo "ve" su propia IP privada), se ha programado un sistema deactualización activa:

1) Script deactualizacion (Bash): Se ha Creation un peuio script en el servidor que utilizes la herramienta CURL. Este commando realiza una petencia HTTPS a los servadores de DuckDNS enviando el token y el dominio.

I. Creación del directorio ~/scripts para alojar el script   
II. Creación del script ~/scripts/duckdns_update.sh con este contenido: echo  
url="https://www.duckdns.org/update?domains=victoralfer&token=TU  
TOKEN_AQUI&ip=" | curl -k -o ~/scripts/duck.log -K -

III. Anadir permisos de execución al script diseñado en el paso anterior

```txt
victoralfer@debian13:~$ mkdir scripts
victoralfer@debian13:~$ nano scripts/duckdns_update.sh
victoralfer@debian13:~$ chmod +x ~/scripts/duckdns_update.sh 
```

Figura 91. Configuración Red Exterior: Uso de Scriptactualización IP del router

2) DeteciOn de la IP: Al recibir esta peticnion, DuckDNS identifica automatisticamente la direc tion IP publica de origen y actualiza el registrar DNS en tiempo real. El TOKEN asociado a la cuenta creada es el que permite tal circunstancia.   
3) Programación con Cron: Para que el proceso sea totalmente autónomo y no requires intervención manual del administrador, se ha configurado unaarea programada en el service Cron de Debian.

```txt
victoralfer@debian13:~$ crontab -e  
no crontab for victoralfer - using an empty one  
Select an editor. To change later, run select-editor again.  
1. /bin/nano <---- easiest  
2. /usr/bin/vim.tiny 
```

```txt
Choose 1-2 [1]: 1  
crontab: installing new crontab 
```

# Configuración de la Automatización en CRON

$\circ$ Frecuencia: El script se ejecta cada 5 Minutes.   
La salute estandard del script se va al Dispositivo Nulo.   
Los posibles erre, también se mandarán al Dispositivo Nulo.

```txt
GNU nano 8.4 /tmp/crontab.MN8CEr/crontab *  
# minute (m), hour (h), day of month (dom), month (mon),  
# and day of week (dow) or use '*' in these fields (for 'any').  
#  
# Notice that tasks will be started based on the cron's system  
# daemon's notion of time and timezones.  
#  
# Output of the crontab jobs (including errors) is sent through  
# email to the user the crontab file belongs to (unless redirected).  
#  
# For example, you can run a backup of all your user accounts  
# at 5 a.m every week with:  
# 0 5 * * 1 tar -zcf /var/backups/home.tgz /home/  
#  
# For more information see the manual pages of crontab(5) and cron(8)  
#  
# m h dom mon dow command  
# Automatización del proceso de Regeneración de IP dinámica para DuckDNS  
# Cada 5 Minutes  
*/5 * * * * ~/scripts/duckdns update.sh >/dev/null 2>&1 
```

Figura 93. Configuración Red Exterior: Automatización Script de Actualización

Resultado: Si el ISP renaueva la direccion IP a las 12:00, a las 12:05 el servidor ya Habrá notifications el cambio a DuckDNS, manteniendo el tiempo de inactividad al minimum possible y asegurar que la URL del proyecto está ahora operativa.

Para garantizar la fiabilidad del sistemas y la correcta publicación del service, se han realizado diversas baterías de pruebas que validan desde la connectividad de red hasta la experiencia de usuario final.

# PRUEBAS DE CONNECTIVIDAD Y RED

# Verification del DNS Dinamico

Se ha comprobado mediante el commando nslookup victoralfer.duckdns.org que el dominio resuelve correctamente hacer la IP Pública actual del router.

```txt
C:\Windows\System32>nslookup  
Servidor predeterminado: 250.red-80-58-61(staticicip.rima-tde.net  
Address: 80.58.61.250  
> victoralfer.duckdns.org  
Servidor: 250.red-80-58-61(staticicip.rima-tde.net  
Address: 80.58.61.250  
DNS request timed out.  
timeout was 2 seconds.  
Respuesta no autoritativa:  
DNS request timed out.  
timeout was 2 seconds.  
Nombre: victoralfer.duckdns.org  
Address: 83.58.231.25 
```

# Test de Latencia

Se realizó una prueba ICMP desde un externa para vericar que el servidor es alcanczable, confirmando la correcta configuracion del conmutador externo en Hyper-V.

En concreto se hace desde un móvil connectado a una linea de datos con la app "Ping".

# Escaneo de Puerto

Se verificado mediante una herramipta de Escaneo que el puerto 80 está "abierto" y eschuchando peteciones.

La herramienta realizada laimidoomenar enla sugiente URL: https://www.yougetsignal.com/tools/open-ports/

![](images/1753252ee911d9d80e251ad1b3b1d34248c8bceb9553295948a7bf0aaa89b569.jpg)  
Figura 94. Pruebas Funcionamiento: Verificacion DNS Dinamico

![](images/b9a9ccde5b848cedff85c674caa7151f8b0f708c02e925abd03ad08be2b61ca1.jpg)  
Figura 95. Pruebas Funcionamente: Escaneo de Puerto

# PRUEBAS DEL SERVADOR WEB APACHE

![](images/594d811da20fd2acc1f38b1c37feb7c68c91cf065aef5a755f3e94daf8f88c3b.jpg)

# Acceso mediante URL

Se validó la energia de la página principal introduciendo el dominio en differentes navegadores (Chrome, Firefox, Brave...).

![](images/93f4b5fbfe643c350054aaf837ec7d28857cfee564b24a8d3c7ad31a26f7b042.jpg)

![](images/28a81d143f3eb82aa689b244baf42a8350068a087d7ef488f57698daa42833d9.jpg)

# PROYECTO CFGS ASIR

VICTOR ÁLVAREZ FERNÁNEZ - ANO 2026 - IES LOIS PÉNA NOVO - VILALBA (LUGO)

![](images/78cd20ed73c2b8b7bb552b5c1de5b51522531f043193c606962e1ae013c1a8dc.jpg)  
Figura 96. Pruebas de Funcioncimiento: Google Chrome

![](images/445f8b0b7b8918583916985189f6f0fa80bbb42acbd46ee1b83db345636e6b2f.jpg)

# PROYECTO CFGS ASIR

![](images/9365f20725412c4adcb1868df46e57b397455aa01f07c4fc0a58e9bc9779c804.jpg)  
Figura 97. Pruebas de Funcioncimiento: Mozilla Firefox

![](images/b43e84af53d73718f9802ad548bb661c8cbf9f6c3fb26e1a1afe2f8be1ba5bbf.jpg)

Brave no es tu navegador predeterminado

Establecer como predeterminado

![](images/a2e15b1d81c03425529480b4bbb0d03632a77122150c7d036b42a41ea6ae4e9f.jpg)

# PROYECTO CFGS ASIR

![](images/a6d272b118affc109674e63701b00c34fc66985bbb4260671b53cd7274948415.jpg)  
Figura 98. Pruebas de Funcioncimiento: Brave

# Navigación Interna

Se comprobó la integridad de los hipervínculos entre lasdietes secciones de apuntes (HTML, CSS, JS, jQuery y Formularios), asegurando que no existan erros 404.

![](images/7d78b8cef355d651201620cd9252dd7e23e3cfb77ea8b84fb1123b14b25429fa.jpg)

![](images/73d918802bc8d091c3ae06564edf651c7a4b9f90d56384d278602ebe8477971f.jpg)

# APUNTES HTML 5

![](images/3f9d1d1cbc2e2783f1741d2fd14ad5c618280048326aae6c714308032c990520.jpg)  
Figura 99. Pruebas de Funcionamiento: Navegacion Páginas Secundarias

# Permisos de Archivos

Se verificado que tras el volcado por SMB/CIFS, los ARCHivos conservan los permisos necessarios para que el usuario www-data pueda servirlos correctamente.

![](images/2884930c4efb8cca2d9412af545b622a96ab69e998d88a43391f15ca18622cd6.jpg)  
Figura 100. Pruebas de Funcionamento: Ver Permisos de los Ficheros HTML

# PRUEBAS DE DISEÑO Y CONTENIDO RESPONSIVE

![](images/9e6caaa11df041e0698dea5cfee146c4dcdd4b951e57ed8a1ed1c9a4e182f181.jpg)

# Adaptabilitad

Se utilizes differentes dispositivos para comprobar que el contenido se adapta a ellos. Además, se confirmó que el menu "hamburguesa" se despiega correctamente y que el Diseño se ajusta a las pantallas pequeñas.

![](images/168d0674bd4ad1d66e7f6525771e866cdeb465d69fd83c3eaf138931175d6ccc.jpg)

![](images/2edc09dbfdfbb2bb8c2a0f0450c64abffb034d44bbe37f33e5408e2f807f82dd.jpg)  
Figura 101. Pruebas de Funcionamiento: Adaptabilidad Páginas Principal y Secundarias

![](images/dec7a11cc1403c6e40a78e8e42f1f8398760688d5cc48d823ea96dc79c6cd638.jpg)

# Control Visualización

Se testeo el situ en monitores de alta resolution, verificando que los contenedores respetan el máximo de 1400px, manteniendo la lectura centralizada y comauda.

![](images/e7862cca6a5348b8910bfa3654a5a0bf3195dd60596f3559a361733549e4e99c.jpg)

![](images/8393eb4d3d64603bcd8009ae472425450adf0bb6be472be401ff9fdd493a28f8.jpg)

# PROYECTO CFGS ASIR

VICTORÁLVAREZ FERNÁNDEZ - ANO 2026 - IES LOIS PENA NOVO - VILALBA (LUGO)

![](images/ba6414b65ab76d2bb0da869de2feb866b6262e628d3712eb04c6568eb32d6862.jpg)

Figura 102. Pruebas de Funcionamiento: Control Visualizacion (máximo 1400px)   
![](images/e29c36f7fbeade07a9c4885d276cc511fdcdcf4c2786dfab9abd1bc3fc89c20a.jpg)  
Esta web nace como un proyecto personal y的技术ico desarrollado en el marco del Ciclo Formativo de Grado Superior en Administracion de Sistemas Informaticos en Red (ASIR). Su objectivo principal es ayudar a estudiantes del ciclo, y en especial a quienes se preparan para presentarse a las pruebas libres, una modalidad que exige un alto nivel de autonomia, organization y constancia.

# PRUEBAS DE DINAMISMO (JS y jQuery)

![](images/59b0b5b2d4619273d742188573b456fda5047fd3cef4f30a055f7a09d9e4ffbf.jpg)

# Búsquedas en Tiempo Real

Se realizaron búsquetadas de关键时刻específicos (ej. "bordes", "script", "ancla") para validated que el script de filtrado funciona y que, ante búsquetadas fallidas, se muestra correctamente la capa de "No hay coincidencias".

![](images/904c29949bd2abd293fb18a534963ce9ae418d903cf7d5907cec6a5813b3d994.jpg)

# APUNTES CSS 3

![](images/7d265b75c59993838c07b410104e2d80c824a63f3fb7962a48ff7727aba5dbbc.jpg)

![](images/17a1bc9ddec5d4ac3d5cf55b74eee1383836c27d47df647464ef585ced324681.jpg)  
Figura 103. Pruebas de Funcionamento: Buscador Páginas Apuntes CCS3

![](images/64b9cb3f84954e007198c56377c1c934b686ae55ff0f747f37eb68e5abbf5d78.jpg)

# APUNTES JAVASCRIPT

![](images/6c3a6a79415d6bf79f53e883544768dea589a0a059668264e15f8117c477faa3.jpg)

![](images/3a7881fa32e6299ac7f1cca75be13cbf788a89c7e1858cd2128ba628e87a1509.jpg)  
Figura 104. Pruebas de Funcionamiento: Bucador Pagina Apuntes JS

![](images/0694bb29a1a9cdb95c52bbaa84e831ca756478e5c4d0f8e3e49ca5ac9be7a029.jpg)

# APUNTES JQUERY

![](images/a452b11d8a89a47c0a7303b98dddaa81643ba23bafb50fc0217e52239301d420.jpg)

![](images/1d19e88da10994dc97ba2e7976b0d6db6d88ee567eb74d36ce7befc54b2a78cb.jpg)  
Figura 105. Pruebas de Funcionamiento: Buscador Pagina Apuntes jQuery

![](images/cd51941fc58dab32153975dd885cecbea2c81a8844dd83d80281345d7ba8fa78.jpg)

# APUNTES FORMULARIOS

![](images/256a9d6a9a958f35e249260479847bc5241c084ca7f612e245e45947ee973056.jpg)

![](images/1a8d81c10560cfdb6a36d63a4b1a3427294cde0770f7ade68cfdb69dab94f70f.jpg)  
NO HAY COINCIDENCIAS EN LA BUSQUEDA

![](images/6e94014990571e67650743eb15e45f8e1a445fbb1d8107d51dd08fcceddfe05d.jpg)  
Figura 106. Pruebas de Funcionamiento: Buscador Pagina Apuntes Formularios

![](images/93c0190b4d49a46c68188437ff72e9092171a3d564c4b38f324e80c7f4451d81.jpg)

# Ancla Superior

Se comprobó que el botón de "Volver arriba" realiza el desplazimiento suave (scrollTop) mediante la animación de jQuery programada.

![](images/04387fd750b895009b1d6150514c7eece75c3df37530dc143e0c0a439a5312e9.jpg)

<table><tr><td>type=square</td><td>Listado Viñeta: Cuadrada</td><td>&lt;ul type=&quot;square&quot; text=&quot;ul&quot;&gt;</td></tr><tr><td>type=&quot;none&quot;</td><td>Listado Sin Viñeta</td><td>&lt;ul type=&quot;none&quot;&gt;Texto&lt;/ul&gt;</td></tr><tr><td colspan="3">Etiqueta OL (Lists Organadas)</td></tr><tr><td colspan="3">Se ubica en la etiqueta BODY</td></tr><tr><td colspan="3">Se usa para create una lista ordinada, eskaar, una lista con elementos numerados o con(other tipo de marcador ordinado.</td></tr><tr><td>Attributo</td><td>Significado</td><td>Ejempo</td></tr><tr><td>type=&quot;i&quot;</td><td>Listado: Número Romano (minúscula)</td><td>&lt;ol type=&quot;i&quot;&gt;Texto&lt;/ol&gt;</td></tr><tr><td>type=&quot;j&quot;</td><td>Listado: Número Romano (MAYUSCULA)</td><td>&lt;ol type=&quot;j&quot;&gt;Texto&lt;/ol&gt;</td></tr><tr><td>type=&quot;a&quot;</td><td>Listado: Leira (minúscula)</td><td>&lt;ol type=&quot;a&quot;&gt;Texto&lt;/ol&gt;</td></tr><tr><td>type=&quot;A&quot;</td><td>Listado: Leira (MAYUSCULA)</td><td>&lt;ol type=&quot;A&quot;&gt;Texto&lt;/ol&gt;</td></tr><tr><td rowspan="3">start=&quot;&quot;</td><td>Listado: Inicio en Número concreto</td><td>&lt;ol start=&quot;4&quot;&gt;Texto&lt;/ol&gt;</td></tr><tr><td>Listado: Inicio en Número Romano concreto</td><td>&lt;ol type=&quot;i&quot; start=&quot;3&quot;&gt;Texto&lt;/ol&gt;</td></tr><tr><td>Listado: Inicio en Leira concreta</td><td>&lt;ol type=&quot;a&quot; start=&quot;5&quot;&gt;Texto&lt;/ol&gt;</td></tr></table>

<table><tr><td colspan="3">Etiqueta TABLE (Tabla)</td></tr><tr><td colspan="3">Se ubica en la etiqueta BODY</td></tr><tr><td colspan="3">Se usa para create tablas, que organizean datos en filas y columnas.</td></tr><tr><td>Attributo</td><td>Significado</td><td>Ejempio</td></tr><tr><td>border</td><td>Borde de Tabla</td><td>&lt;tableno=&quot;f&quot;&gt;&gt;&lt;/table&gt;</td></tr><tr><td>width</td><td>Ancho de Tabla (px, %, em)</td><td>&lt;tab width=&quot;90%&quot;&gt;&lt;/table&gt;</td></tr><tr><td>align</td><td>Alineacion de la Tabla</td><td>&lt;tab align=&quot;center&quot;&gt;&gt;&lt;/table&gt;</td></tr><tr><td>height</td><td>Altura de Tabla (px, %, em)</td><td>&lt;tab height=&quot;300px&quot;&gt;&gt;&lt;/table&gt;</td></tr><tr><td>bgcolor</td><td>Color de fondo de la Tabla</td><td>&lt;tabgcolor=&quot;yellow&quot;&gt;&lt;/table&gt;</td></tr><tr><td>background</td><td>Imagen de fondo de la Tabla</td><td>&lt;tabackground=&quot;img/pantera_rosa.png&quot;&gt;&lt;/table&gt;</td></tr><tr><td>cellpadding</td><td>Relleno de la Tabla</td><td>&lt;tabcellpadding=&quot;10px&quot;&gt;&gt;&lt;/table&gt;</td></tr><tr><td>cellspacing</td><td>Espacio entre bordes de la Tabla</td><td>&lt;tabe spacing=&quot;0px&quot;&gt;&lt;/table&gt;</td></tr></table>

![](images/00ca8348ac34571fb631458d930f3dded9cba954c3b9ad4c684909feafcdc3b6.jpg)  
#

![](images/83ead768a0e47075c5e2a8992ee3cfb1782ef560377df85dad4fa5ce6b87f1b0.jpg)  
Figura 107. Pruebas de Funcionamiento: Botón de Ancla sin acontear

# APUNTES HTML 5

![](images/d0b89800075b9afe9aa75875c62a63b1973c0bf652edfbd5ff88bcd1214deb4c.jpg)

![](images/b8356302447687d85ba21b7478a7c0f9df8afa88099e69ee64c79fcb176aa9a5.jpg)  
BUSCADOR   
Figura 108. Pruebas de Funcionamiento: Botón de Anclá acontecido

# CONCLUSIONES DEL PROYECTO

Tras la finalización del despliegue y la puesta en marcha del servidor, se han alcanzado satisfactoriamente todos los objetivos planteados inicialmente. Las conclusiones principales son:

A. Sostenabilidad y Rendimiento: Se ha demostrado que el hardware reacondicionado es una plataforma robusta y eficiente para entornos de(servidor, permitiendo una SECONDA vida úlil al equipo sin comprometer el rendimiento del serviceo web.   
B. Dominio de la Virtualización: La implementación sobre Hyper-V ha permitido aislar los servicios y optimizar los recursos del anfitrión, facilitando una gestión segura y escalable mediante el uso de conmutadores virtuales externos.   
C. Consolidación de Conocimientos ASIR: Elprojecto integra de forma transversal areas críticas como la administración de sistemas Linux (Debian 13), redes (NAT, DNS Dinamico, Direcciónamente IP),seguidad (VPN Tailscale,Firewalls,...) y servicios de ARCHivos (SMB/CIFS).   
D. Desarrollo Web Profesional: La creación del repository de apuntes no solo sirve como herramienta de consultaística, sino que, valida la capacité de create interfaces modernas, interactivas (jQuery/JS) y optimizadas para grandes monitors mediante el control de contenedores a 1400px.

# POSIBLES MEJORAS Y FUTURAS AMPLIACIONES

Aúnque el sistema es totalmente funcional, se plantean las siguientes linías de mejor para futuras iteraciones:

> Copia de Seguidad Automatizada: Configurar un sistema de backups incrementales que almacene copias de seguridad de la base deIELD y la configuracion de la VM en unaunidad externa o service de nube.   
> Creación de un Servicio de Correo Elettúnico: Configurar un servidor de correó propio dentro del entorno virtualizzato.   
> Implementación de un Servicio FTP: Añadir un servidor de transferencia de ARCHivos para(ofrecer unaalternative al volcado por SMB/CIFS.   
> Ampliación de Hardware: Aprovechar la aritectura del equipo para realizar una expansión de la memoria RAM hasta los 16 GB.   
> Contenido: incrementar el contenido de la Pagina Web con la inclusión de apuntes de otros发展模式 del Ciclo Formativo de Grado Superior ASIR.

# MATERIAL ACADEMICO Y DOCENTE

La base技术和ética de esteprojecto se sustenta primordialmente en el conocimiento adquirido durante el presente ciclo formativo,utilizando como fuentes principales:

Apuntes y Documentación Técnica del Aula Virtual: Material didáctico proportionsado por el equipo docente, centrado en la administración de sistemas operativos (Debian 13), virtualización en enternós y gestion de redes locales.   
$\diamond$ Sesiones Prácticas y Laboratorios: Conocimiento adquirido en las horas de estudio, especially en loreferente a la configuracion de servicios Apache, protocolos de transferencia de ARCHivos y seguridad perimetral.   
$\diamond$ Guías de Configuración Propias: Documentación elaborada durante el camino a partir de los apuntes realizados por los profesores de los发展模式 de "Implantación y Administración de sistemas Operativos", "Planificación y Administración de Redes", "Servicios de Red e Internet" y "Lenguaje de Marcas e Implantación de Aplicaciones Web".

# BIBLIOGRAFÍA DE CONSULTA TÉCNICA

Para el descrollo de lasDistinctasareas delprojecto,se han consultado lossiguientes manualesdereferenciaacademica:

- Módulos de sistemas y Redes (Ed. Garceta) -

Fundamentos del Hardware: Utilido para la selección y optimización del equipo físico recondicionado y la gestión de recursos de almacenimiento SSD.   
Planificacion y Administracion de Redes: Base para el Diseño del directionamento IP, configuracion de conmutadores virtuales en Hyper-V y protocolos de red local.   
$\diamond$ Seguridad y Alta Disponibilidad: Referencia para la implementacion de la VPN (Tailscale), el acceso remoto seguro y la continua del serviceo mediante DNS dinamico.

- Módulos de Desarrollo Web (Ed. Paraninfo) -

UF1302 a UF1306: Manuales技术和 para la 创建, maquetación, programación y prueba de páginas web, que han sido de referencia para asegurar que el repositorio de apuntes cumple con los estándares actuales.

# DOCUMENTACION OFICIAL DE SISTemas Y VIRTUALIZACION

Microsoft Learn - Hyper-V Technology Overview: Documentación技术水平a arquitectura de microkernel de Hyper-V y gestion de conmutadores virtuales.

# REDES Y CONNECTIVIDAD

$\diamond$ DuckDNS Documentation: Especificaiones de la API para laactualizacion de registrados DNS dinamicos mediante métodos HTTP (curl).   
Tailscale Documentation: Guía de implementación de redes privadas virtuales (VPN) basadas en el protocolo WireGuard.
