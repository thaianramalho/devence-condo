<?php
// create_visitante.php
require_once '../config/request_config.php';

$senhaCorreta = "dxic5CyB";

if (isset($_GET['senha']) && $_GET['senha'] === $senhaCorreta) {
    include_once '../config/dbconfig.php';

    $data = json_decode(file_get_contents('php://input'), true);

    try {
        $sql = "SELECT * FROM moradores WHERE cpf = ?";
        $stmt = $connection->prepare($sql);
        $stmt->execute([$data['cpf']]);
        $result = $stmt->fetch();

        if ($result) {
            echo json_encode(['status' => 'error', 'message' => 'CPF já existe']);
        } else {
            $sql = "INSERT INTO moradores (nome, cpf, telefone, endereco, complemento, observacoes) VALUES (?, ?, ?, ?, ?, ?)";
            $stmt = $connection->prepare($sql);
            $stmt->execute([$data['nome'], $data['cpf'], $data['telefone'], $data['endereco'], $data['complemento'], $data['observacoes']]);

            if (isset($data['cartao_rfid'])) {
                $morador_id = $connection->lastInsertId();
                $sql = "INSERT INTO rfid (morador_id, numero) VALUES (?, ?)";
                $stmt = $connection->prepare($sql);
                $stmt->execute([$morador_id, $data['cartao_rfid']]);
            }

            echo json_encode(['status' => 'success']);
        }
    } catch (PDOException $e) {
        echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
    }
}
