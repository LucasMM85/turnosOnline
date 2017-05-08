<?php
/**
 * Created by PhpStorm.
 * User: corvu
 * Date: 8/5/2017
 * Time: 11:23
 */

function parametros_conexion_pg(){

    $usuario='sa';
    $clave='1';
    $nombredb='cuestionario';
    $puerto='5432';
    $host='web-jep1';
    $cadena_con="host=".$host." port=".$puerto." dbname=".$nombredb." user=".$usuario." password=".$clave."";

    return $cadena_con;
}

