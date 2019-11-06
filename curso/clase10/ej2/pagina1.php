<?php 
    $nombre = $_POST['nombre'];
    // $apellido = $GET['apellido'];
    $edad = $_POST['edad'];
    sleep(4);
	echo '{"nombre": ' .$nombre . ' "edad": ' . $edad . '}';
?>