<?php
/**
 * Created by PhpStorm.
 * User: Lucas Mussi
 * Date: 8/5/2017
 * Time: 07:18
 */

require_once("model/Turno.php");

// You can access the values posted by jQuery.ajax
// through the global variable $_POST, like this:
if(isset($_POST['documento']) && isset($_POST['sexo'])){
    $documento = $_POST['documento'];
    $sexo = $_POST['sexo'];

    $turno = new \model\Turno();
    $turno->setApellido("Mussi");
    $turno->setNombre("Lucas Miguel");
    $turno->setDni($documento);
    $turno->setIdTurno(1);
    $turno->setFechaTurno("20 de Mayo - 9:30 a 10:00");

    header('Content-Type: application/json');
    echo json_encode($turno);
} else {
    echo "NO DATA";
}