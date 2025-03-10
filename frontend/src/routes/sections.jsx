import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';
import ColaboradoresPage from 'src/pages/colaboradores';
import FamiliaresPage from 'src/pages/familiares';
import MoradoresPage from 'src/pages/moradores';
import VisitantesPage from 'src/pages/visitantes';
import { CadastroGeralPage } from 'src/sections/cadastro-geral';
import { EditGeralPage } from 'src/sections/edit-geral';

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const RegisterPage = lazy(() => import('src/pages/register'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'user', element: <UserPage /> },
        { path: 'visitantes', element: <VisitantesPage /> },
        { path: 'moradores', element: <MoradoresPage /> },
        { path: 'colaboradores', element: <ColaboradoresPage /> },
        { path: 'familiares', element: <FamiliaresPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'cadastrogeral', element: <CadastroGeralPage /> },
        { path: 'editgeral', element: <EditGeralPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'registeruser',
      element: <RegisterPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
