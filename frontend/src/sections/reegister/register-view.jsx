import axios from 'axios';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [apiResponse, setApiResponse] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [masterPassword, setMasterPassword] = useState('');
  const [masterPasswordEntered, setMasterPasswordEntered] = useState(false);

  const handleMasterPasswordChange = (event) => {
    setMasterPassword(event.target.value);
  };

  const handleMasterPasswordSubmit = (event) => {
    event.preventDefault();

    if (masterPassword === 'Dv:rfiduhf2024') {
      setMasterPasswordEntered(true);
    } else {
      setApiResponse('Senha incorreta');
    }
  };

  if (!masterPasswordEntered) {
    return (
      <form onSubmit={handleMasterPasswordSubmit}>
        <TextField
          type="password"
          value={masterPassword}
          onChange={handleMasterPasswordChange}
          variant="filled"
          id="filled-basic"
          label="Senha"
          fullWidth
          style={{ marginBottom: '20px' }}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    );
  }

  const generatePassword = () => {
    const length = 12;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let generatedPassword = '';
    for (let i = 0, n = charset.length; i < length; i += 1) {
      generatedPassword += charset.charAt(Math.floor(Math.random() * n));
    }
    return generatedPassword;
  };

  const handleGeneratePassword = () => {
    setPassword(generatePassword());
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost/devence-condo/backend/api/register.php', {
        username,
        email,
        password,
      })
      .then((response) => {
        console.log(response);
        setApiResponse(response.data.message);
      })
      .catch((error) => {
        console.error(error);
        setApiResponse(error.response.data.message);
      });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
      }}
    >
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <Typography style={{ marginBottom: '20px' }} variant="h2" component="h2">
            Cadastrar Usuário
          </Typography>
          {apiResponse && (
            <Alert
              style={{ marginBottom: '20px' }}
              severity={apiResponse.includes('success') ? 'success' : 'error'}
            >
              {apiResponse}
            </Alert>
          )}
          <TextField
            type="text"
            value={username}
            onChange={handleUsernameChange}
            variant="filled"
            id="filled-basic"
            label="Nome"
            fullWidth
            style={{ marginBottom: '20px' }}
          />
          <TextField
            type="email"
            value={email}
            onChange={handleEmailChange}
            variant="filled"
            id="filled-basic"
            label="E-mail"
            fullWidth
            style={{ marginBottom: '20px' }}
          />
          <div>
            <TextField
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePasswordChange}
              variant="filled"
              id="filled-basic"
              label="Senha"
              fullWidth
              style={{ marginBottom: '10px' }}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={handleShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
            <Button size="small" style={{ marginBottom: '25px' }} onClick={handleGeneratePassword}>
              Gerar senha
            </Button>
          </div>
          <Button variant="contained" type="submit">
            Cadastrar
          </Button>
          <Typography variant="body1" gutterBottom style={{ marginTop: '20px' }}>
            Já possui uma conta? <Link href="/login">Entrar</Link>
          </Typography>
        </form>
      </Container>
    </Box>
  );
}

export default Register;
