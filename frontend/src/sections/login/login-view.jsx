import axios from 'axios';
import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Stack, Button, TextField, IconButton, Typography, InputAdornment } from '@mui/material';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost/devence-condo/backend/api/login.php', {
        email,
        password,
      });
      if (response.data.status === 'success') {
        sessionStorage.setItem('DvxE8dngEActqevLwZW8oNTGKq327SYnLYoRf5zDT2jUA8Nsy3J0NekG6FRyA0', true);
        sessionStorage.setItem('userData', JSON.stringify(response.data.data));
        window.location.href = '/';
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
      <Typography variant="h4">Entrar</Typography>
      {error && (
        <Typography variant="body2" sx={{ color: 'error' }}>
          {error}
        </Typography>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          type="email"
          value={email}
          onChange={handleEmailChange}
          label="E-mail"
          fullWidth
          sx={{ my: 1 }}
        />
        <TextField
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={handlePasswordChange}
          label="Senha"
          fullWidth
          sx={{ my: 1 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" type="submit" fullWidth sx={{ my: 1 }}>
          Entrar
        </Button>
      </form>
      {/* <Typography variant="body2">
        Não possui uma conta? <Link href="/register">Registre-se</Link>
      </Typography> */}
    </Stack>
  );
}
