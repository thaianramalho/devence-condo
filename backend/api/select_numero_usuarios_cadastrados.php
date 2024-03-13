<?php

// Call API header
require_once '../config/request_config.php';

require_once '../config/dbconfig.php';

// Output values
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

// Processing API requests
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    // Select all residents
    $sql = "SELECT COUNT(*) AS total FROM moradores";
    $query = $connection->prepare($sql);
    $query->execute();
    $totalMoradores = $query->fetchColumn();

    // Select all visitors
    $sql = "SELECT COUNT(*) AS total FROM visitantes";
    $query = $connection->prepare($sql);
    $query->execute();
    $totalVisitantes = $query->fetchColumn();

    // Select all collaborators
    $sql = "SELECT COUNT(*) AS total FROM colaboradores";
    $query = $connection->prepare($sql);
    $query->execute();
    $totalColaboradores = $query->fetchColumn();

    // Select all family members
    $sql = "SELECT COUNT(*) AS total FROM familiares";
    $query = $connection->prepare($sql);
    $query->execute();
    $totalFamiliares = $query->fetchColumn();

    // Select all third parties
    $sql = "SELECT COUNT(*) AS total FROM terceirizados";
    $query = $connection->prepare($sql);
    $query->execute();
    $totalTerceirizados = $query->fetchColumn();

    // Calculate total number of users
    $totalUsers = $totalMoradores + $totalVisitantes + $totalColaboradores + $totalFamiliares + $totalTerceirizados;

    // Return response
    echo createResponse('success', 'Data fetched successfully.', [
        'total_moradores' => $totalMoradores,
        'total_visitantes' => $totalVisitantes,
        'total_colaboradores' => $totalColaboradores,
        'total_familiares' => $totalFamiliares,
        'total_terceirizados' => $totalTerceirizados,
        'total_users' => $totalUsers
    ]);
    exit;
}
