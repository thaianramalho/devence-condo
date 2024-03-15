<?php

// Call API header
require_once '../config/request_config.php';

// Output values
function createResponse($status, $message, $data = [])
{
    $response = [
        'status' => $status,
        'message' => $message,
        'data' => $data
    ];
    return json_encode($response);
}

// Processing API requests
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $senhaCorreta = "dxic5CyB";

    if (isset($_GET['senha']) && $_GET['senha'] === $senhaCorreta) {
        require_once '../config/dbconfig.php';


        $sql = "SELECT numero FROM cartaoRegistro WHERE id = 1";
        $result = $connection->query($sql);

        if ($result && $result->rowCount() > 0) {
            $row = $result->fetch();
            $numeroCartao = $row['numero'];

            $sqlVerificaCartao = "SELECT * FROM rfid WHERE numero = '$numeroCartao'";
            $resultadoVerificaCartao = $connection->query($sqlVerificaCartao);

            if ($resultadoVerificaCartao && $resultadoVerificaCartao->rowCount() > 0) {
                $numeroCartao = NULL;
            }
        } else {
            $numeroCartao = null;
        }
        $connection = null;
        echo $numeroCartao;
        exit;
    } else {
        header("HTTP/1.1 401 Unauthorized");
        echo "Unauthorized";
        exit;
    }
}
