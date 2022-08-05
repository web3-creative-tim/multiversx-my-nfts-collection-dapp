import Dashboard from './pages/Dashboard';
import Presentation from './pages/presentation';

export const routeNames = {
  dashboard: '/dashboard',
  presentation: '/',
  walletconnect: '/walletconnect'
}

const routes = [
  {
    path: routeNames.dashboard,
    title: 'Dashboard',
    component: Dashboard,
    authenticatedRoute: true
  },
  {
    path: routeNames.presentation,
    title: 'Presentation',
    component: Presentation
  },
];

const mappedRoutes = routes.map((route) => {
  const requiresAuth = Boolean(route.authenticatedRoute);
  return {
    path: route.path,
    component: route.component,
    authenticatedRoute: requiresAuth
  };
});

export default mappedRoutes;
