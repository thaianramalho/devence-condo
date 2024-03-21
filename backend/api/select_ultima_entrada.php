<?php
require_once '../config/request_config.php';
require_once '../config/dbconfig.php';

function createResponse($status, $message, $data = [])
{
    $response =
        [
            'status' => $status,
            'message' => $message,
            'data' => $data
        ];
    return json_encode($response);
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $sql = 'SELECT
                COALESCE(moradores.nome, visitantes.nome, colaboradores.nome, terceirizados.nome, familiares.nome) AS nome,
                COALESCE(moradores.telefone, visitantes.telefone, colaboradores.telefone, terceirizados.telefone, familiares.telefone) AS telefone,
                entradas.data
            FROM
                entradas
            LEFT JOIN rfid ON entradas.rfid_id = rfid.id
            LEFT JOIN moradores ON rfid.morador_id = moradores.id
            LEFT JOIN visitantes ON rfid.visitante_id = visitantes.id
            LEFT JOIN colaboradores ON rfid.colaborador_id = colaboradores.id
            LEFT JOIN terceirizados ON rfid.terceirizado_id = terceirizados.id
            LEFT JOIN familiares ON rfid.familiar_id = familiares.id
            WHERE
                entradas.data IS NOT NULL
            ORDER BY
                entradas.data DESC
            LIMIT 1';
    $query = $connection->prepare($sql);
    $query->execute();
    $ultimaEntrada = $query->fetchAll(PDO::FETCH_ASSOC);

    echo createResponse('success', 'Data fetched successfully.', [
        'ultimaEntrada' => $ultimaEntrada
    ]);
    exit;
}
