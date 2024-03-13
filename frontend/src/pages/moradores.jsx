import { Helmet } from 'react-helmet-async';

import { MoradoresView } from 'src/sections/moradores/view';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> Moradores | DeVence </title>
      </Helmet>

      <MoradoresView />
    </>
  );
}
