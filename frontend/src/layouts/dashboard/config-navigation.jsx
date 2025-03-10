import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Menu Principal',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Novo Cadastro',
    path: '/cadastrogeral',
    icon: icon('ic_user'),
  },
  {
    title: 'Visitantes',
    path: '/visitantes',
    icon: icon('ic_user'),
  },
  {
    title: 'Moradores',
    path: '/moradores',
    icon: icon('ic_user'),
  },
  {
    title: 'Amigos/Familiares',
    path: '/familiares',
    icon: icon('ic_user'),
  },
  {
    title: 'Colaboradores',
    path: '/colaboradores',
    icon: icon('ic_user'),
  },
];

export default navConfig;
