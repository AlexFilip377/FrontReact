import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));
const Profile = lazy(() => import("./pages/Profile"));

function ErrorFallback() {
  return (
    <div style={{ color: 'red' }}>
      <h2>Что-то пошло не так.</h2>
      <p>Не удалось загрузить страницу. Проверьте свое соединение.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
        <nav style={{ padding: '20px', backgroundColor: '#f4f4f4', display: 'flex', gap: '50px' }}>
          <Link to='/'>Главная</Link>
          <Link to='/dashboard'>Dashboard</Link>
          <Link to='/settings'>Настройки</Link>
          <Link to='/profile'>Профиль</Link>
        </nav>

        <div style={{ padding: '20px' }}>
          <ErrorBoundary fallback={<ErrorFallback />}>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path='/' element={<h2>Главная страница</h2>} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/profile' element={<Profile />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </div>
    </BrowserRouter>
  );
}

export default App;