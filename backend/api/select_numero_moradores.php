<?php

//Call API header
require_once '../config/request_config.php';

require_once '../config/dbconfig.php';

//Output values
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

//Processing API requests
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    //Select all residents
    $sql = "SELECT COUNT(*) AS total_moradores FROM moradores";
    $query = $connection->prepare($sql);
    $query->execute();
    $residents = $query->fetchAll(PDO::FETCH_ASSOC);

    //Count total number of residents
    $totalResidents = count($residents);

    //Return response
    echo createResponse('success', 'Residents fetched successfully.', ['total_residents' => $totalResidents, 'residents' => $residents]);
    exit;
}
