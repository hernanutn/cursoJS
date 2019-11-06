<?php 
    $nombre = "json/MOCK_DATA.json";
    $gestor = fopen($nombre, "r");
    $contenido = fread($gestor, filesize($nombre));
    fclose($gestor);
    sleep(5);
	echo $contenido;
?>