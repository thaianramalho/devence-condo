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
    $sql = "SELECT * FROM familiares ORDER BY id DESC";
    $query = $connection->prepare($sql);
    $query->execute();
    $familiares = $query->fetchAll(PDO::FETCH_ASSOC);

    echo createResponse('success', 'Data fetched successfully.', [
        'familiares' => $familiares
    ]);
    exit;
}
