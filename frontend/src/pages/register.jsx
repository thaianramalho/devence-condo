import { Helmet } from 'react-helmet-async';
import { RegisterView } from 'src/sections/reegister';

// ----------------------------------------------------------------------

export default function RegisterPage() {
  return (
    <>
      <Helmet>
        <title> Cadastrar Usuário | DeVence </title>
      </Helmet>

      <RegisterView />
    </>
  );
}
