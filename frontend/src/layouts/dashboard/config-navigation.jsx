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
    title: 'Moradores',
    path: '/moradores',
    icon: icon('ic_user'),
  },
  {
    title: 'Familiares',
    path: '/familiares',
    icon: icon('ic_user'),
  },
];

export default navConfig;
