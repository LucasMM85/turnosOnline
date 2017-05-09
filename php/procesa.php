<?php
/**
 * Created by PhpStorm.
 * User: Lucas Mussi
 * Date: 8/5/2017
 * Time: 07:18
 */

use model\Turno;

require_once("model/Turno.php");
require_once("db/funcionesDb.php");

// You can access the values posted by jQuery.ajax
// through the global variable $_POST, like this:
if(isset($_POST['documento']) && isset($_POST['sexo'])){
    $documento = $_POST['documento'];
    $sexo = $_POST['sexo'];

    $consulta = asignarTurno("SELECT * FROM conc.spc_asigna_fecha_persona_inscripta".
                                     "(2::conc.idconcurso,".valor_nulo($documento, "null")."::pub.documento, '".valor_nulo($sexo, "null")."'::pub.sexo, NULL::preg.idfecha)");

    $turno = new Turno();
    $turno->setApellido($consulta["apellidos"][1]);
    $turno->setNombre($consulta["nombres"][1]);
    $turno->setDni($documento);
    $turno->setIdTurno($consulta["idpersonafecha"][1]);
    $turno->setFechaTurno($consulta["mensaje"][1]);

    header('Content-Type: application/json');
    echo json_encode($turno);
} else {
    echo "NO DATA";
}