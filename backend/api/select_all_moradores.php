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
    $sql = "SELECT * FROM moradores ORDER BY id DESC";
    $query = $connection->prepare($sql);
    $query->execute();
    $moradores = $query->fetchAll(PDO::FETCH_ASSOC);

    // Return response
    echo createResponse('success', 'Data fetched successfully.', [
        'moradores' => $moradores
    ]);
    exit;
}
