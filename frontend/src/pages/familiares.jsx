import { Helmet } from 'react-helmet-async';

import { FamiliarPage } from 'src/sections/familiares/view';

// ----------------------------------------------------------------------

export default function FamiliaresPage() {
  return (
    <>
      <Helmet>
        <title> Amigos/Familiares | DeVence </title>
      </Helmet>

      <FamiliarPage />
    </>
  );
}
