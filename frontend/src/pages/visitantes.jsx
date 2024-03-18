import { Helmet } from 'react-helmet-async';

import { VisitantePage } from 'src/sections/visitantes/view';

// ----------------------------------------------------------------------

export default function VisitantesPage() {
  return (
    <>
      <Helmet>
        <title> Visitantes | DeVence </title>
      </Helmet>

      <VisitantePage />
    </>
  );
}
