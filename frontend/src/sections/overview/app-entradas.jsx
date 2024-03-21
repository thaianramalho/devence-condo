import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types'; // Importar PropTypes
import { Card } from '@mui/material';

const Entra = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="50" fill="#094F4A">
    <path d="M32 32C14.3 32 0 46.3 0 64V448c0 17.7 14.3 32 32 32s32-14.3 32-32V266.3L149.2 96H64V64c0-17.7-14.3-32-32-32zM405.2 96H330.8l-5.4 10.7L234.8 288h74.3l5.4-10.7L405.2 96zM362.8 288h74.3l5.4-10.7L533.2 96H458.8l-5.4 10.7L362.8 288zM202.8 96l-5.4 10.7L106.8 288h74.3l5.4-10.7L277.2 96H202.8zm288 192H576V448c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v53.7L490.8 288z" />
  </svg>
);

const AppEntradas = ({ title, name, phone, hour }) => (
  <Card
    alignItems="start"
    sx={{
      alignItems: 'start',
      boxShadow:
        '0 12px 50px rgba(8, 79, 73, .14), inset 1px 1px rgba(8, 79, 73, .2), inset -1px -1px 2px rgba(8, 79, 73, .2)',
    }}
  >
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box padding={6}>
        <Box display="flex" alignItems="center">
          <Entra />
          <Typography ml={2} variant="h3">
            {title}
          </Typography>
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

AppEntradas.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
  hour: PropTypes.string,
};

export default AppEntradas;
