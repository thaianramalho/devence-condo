import { Helmet } from 'react-helmet-async';
import { CadastroGeralPage } from 'src/sections/cadastro-geral';

// ----------------------------------------------------------------------

export default function CadastroGeral() {
  return (
    <>
      <Helmet>
        <title> Novo Cadastro | DeVence </title>
      </Helmet>

      <CadastroGeralPage />
    </>
  );
}
