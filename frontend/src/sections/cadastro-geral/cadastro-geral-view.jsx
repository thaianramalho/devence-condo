import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  Button,
  TextField,
  Container,
  Typography,
  Stack,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';

export default function CadastroGeralForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [cardNumber, setCardNumber] = useState('');
  const [userType, setUserType] = useState('visitante');

  useEffect(() => {
    fetch('http://localhost/devence-condo/backend/api/select_card_number.php?senha=dxic5CyB')
      .then((response) => response.text())
      .then((data) => setCardNumber(data));
  }, []);

  const getApiUrl = () => {
    const passwordParam = '?senha=dxic5CyB';
    switch (userType) {
      case 'morador':
        return `http://localhost/devence-condo/backend/api/create_morador.php${passwordParam}`;
      case 'visitante':
        return `http://localhost/devence-condo/backend/api/create_visitante.php${passwordParam}`;
      case 'colaborador':
        return `http://localhost/devence-condo/backend/api/create_colaborador.php${passwordParam}`;
      case 'amigoFamiliar':
        return `http://localhost/devence-condo/backend/api/create_amigo_familiar.php${passwordParam}`;
      case 'terceirizado':
        return `http://localhost/devence-condo/backend/api/create_terceirizado.php${passwordParam}`;
      default:
        return `http://localhost/devence-condo/backend/api/create_visitante.php${passwordParam}`;
    }
  };
  const onSubmit = (formData) => {
    formData.nome = formData.nome.toUpperCase();
    formData.endereco = formData.endereco?.toUpperCase();
    formData.complemento = formData.complemento?.toUpperCase();
    formData.cargo = formData.cargo?.toUpperCase();
    formData.observacoes = formData.observacoes?.toUpperCase();

    fetch(getApiUrl(userType), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('Success:', responseData);
        if (responseData.status === 'success') {
          alert('Cadastro realizado com sucesso!');
        } else {
          alert(`Ocorreu um erro ao realizar o cadastro.\n ${responseData.message}`);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <Container>
      <Typography variant="h4">Novo Cadastro</Typography>
      <RadioGroup row value={userType} onChange={(e) => setUserType(e.target.value)}>
        <FormControlLabel value="visitante" control={<Radio />} label="Visitante" />
        <FormControlLabel value="morador" control={<Radio />} label="Morador" />
        <FormControlLabel value="colaborador" control={<Radio />} label="Colaborador" />
        <FormControlLabel value="amigoFamiliar" control={<Radio />} label="Amigo/Familiar" />
        <FormControlLabel value="terceirizado" control={<Radio />} label="Terceirizado" />
      </RadioGroup>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <TextField
            {...register('cartao', { required: true })}
            label="Cartão"
            variant="outlined"
            fullWidth
            color={cardNumber ? 'success' : 'error'}
            placeholder={!cardNumber ? 'O usuário será cadastrado sem cartão.' : ''}
            inputProps={{
              readOnly: true,
              value: cardNumber,
            }}
          />
          <TextField
            {...register('nome', { required: true })}
            label="Nome *"
            variant="outlined"
            fullWidth
            error={!!errors.nome}
            helperText={errors.nome && 'Nome é obrigatório'}
          />
          <TextField
            {...register('cpf', { required: true, pattern: /^[0-9]*$/ })}
            label="CPF *"
            variant="outlined"
            fullWidth
            error={!!errors.cpf}
            helperText={errors.cpf && 'CPF é obrigatório e deve conter apenas números.'}
          />
          <TextField
            {...register('telefone', { required: true, pattern: /^[0-9]*$/ })}
            label="Telefone *"
            variant="outlined"
            fullWidth
            error={!!errors.telefone}
            helperText={errors.telefone && 'Telefone é obrigatório e deve conter apenas números.'}
          />
          {userType !== 'visitante' && (
            <TextField {...register('endereco')} label="Endereço" variant="outlined" fullWidth />
          )}
          {userType === 'morador' && (
            <TextField
              {...register('complemento')}
              label="Complemento"
              variant="outlined"
              fullWidth
            />
          )}
          {(userType === 'colaborador' || userType === 'terceirizado') && (
            <TextField {...register('cargo')} label="Cargo" variant="outlined" fullWidth />
          )}
          <TextField
            {...register('observacoes')}
            label="Observações"
            variant="outlined"
            fullWidth
          />
          <Button type="submit" variant="contained" color="success">
            Cadastrar
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
