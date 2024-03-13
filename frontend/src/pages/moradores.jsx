import { Helmet } from 'react-helmet-async';

import { MoradorPage } from 'src/sections/moradores/view';

// ----------------------------------------------------------------------

export default function MoradoresPage() {
  return (
    <>
      <Helmet>
        <title> Moradores | DeVence </title>
      </Helmet>

      <MoradorPage />
    </>
  );
}
