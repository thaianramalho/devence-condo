<?php
// create_visitante.php
require_once '../config/request_config.php';

$senhaCorreta = "dxic5CyB";

if (isset($_GET['senha']) && $_GET['senha'] === $senhaCorreta) {
    include_once '../config/dbconfig.php';

    $data = json_decode(file_get_contents('php://input'), true);

    try {
        $sql = "SELECT * FROM visitantes WHERE cpf = ?";
        $stmt = $connection->prepare($sql);
        $stmt->execute([$data['cpf']]);
        $result = $stmt->fetch();

        if ($result) {
            echo json_encode(['status' => 'error', 'message' => 'CPF já existe']);
        } else {
            $sql = "INSERT INTO visitantes (nome, cpf, telefone, observacoes) VALUES (?, ?, ?, ?)";
            $stmt = $connection->prepare($sql);
            $stmt->execute([$data['nome'], $data['cpf'], $data['telefone'], $data['observacoes']]);
            echo json_encode(['status' => 'success']);
        }
    } catch (PDOException $e) {
        echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
    }
}
