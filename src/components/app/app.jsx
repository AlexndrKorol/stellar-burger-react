import { AppHeader } from '../app-header/app-header';
import { AppRouter } from '../app-router/app-router';
import { useAuth } from '../../hooks/auth';

export const App = () => {
  useAuth();

  return (
    <div>
      <AppHeader />
      <AppRouter />
    </div>
  );
}

