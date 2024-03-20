import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types'; // Importar PropTypes
import { Card } from '@mui/material';
// import { ReactComponent as Enter } from '../../../public/assets/icons/comum/right-from-bracket-solid.svg';
// import Entra from '../../../public/assets/icons/comum/enter.svg';

const Entra = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: "34px", height: "64px" }}>
      <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
    </svg>
  );

const AppEntradas = ({ name, phone, hour }) => (
  <Card alignItems="start"
  sx={{
    alignItems: 'start',
    boxShadow: '0 12px 50px rgba(8, 79, 73, .14), inset 1px 1px rgba(8, 79, 73, .2), inset -1px -1px 2px rgba(8, 79, 73, .2)',
  }} >
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box padding={6}>
       
      <Box display="flex" alignItems="center">
      <Entra />
      <Typography ml={2} variant="h3">Entrada</Typography>
    </Box>
        
        <Typography mt={2} variant="h5">
          {name}
        </Typography>
        <Typography mt={1} variant="subtitle1">
          {phone}
        </Typography>
        <Typography mt={1} variant="subtitle2">
          {hour}
        </Typography>
      </Box>
    </Stack>
  </Card>
);

// Adicionar validações de prop types
AppEntradas.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  hour: PropTypes.string,
};

export default AppEntradas;
