import { Helmet } from 'react-helmet-async';

import { ColaboradorPage } from 'src/sections/colaboradores/view';

// ----------------------------------------------------------------------

export default function ColaboradoresPage() {
  return (
    <>
      <Helmet>
        <title> Moradores | DeVence </title>
      </Helmet>

      <ColaboradorPage />
    </>
  );
}
