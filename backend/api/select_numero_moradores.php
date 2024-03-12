<?php

//Call API header
require_once '../config/request_config.php';

//Connect to the database
$config = array(
    'db_hostname' => 'localhost',
    'db_name' => 'condominio',
    'db_username' => 'root',
    'db_password' => '',
);

try 
{
    $connection = new PDO("mysql:host=" . $config['db_hostname'] . ";dbname=" . $config['db_name'], $config['db_username'], $config['db_password']);
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} 
catch(PDOException $e) 
{
    die("Connection failed: " . $e->getMessage());
}

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
if($_SERVER['REQUEST_METHOD'] == 'GET') 
{
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

?>