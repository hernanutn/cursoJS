<?php 
    $nombre = $_GET['nombre'];
    // $apellido = $GET['apellido'];
    $edad = $_GET['edad'];
    sleep(4);
	echo '{"nombre": "' .$nombre . '", "edad": "' . $edad . '"}';
?>