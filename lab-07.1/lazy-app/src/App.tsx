import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
import './App.css';

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));
const Profile = lazy(() => import("./pages/Profile"));

function App() {
  return (
    <BrowserRouter>
        <nav style={{ padding: '20px', backgroundColor: '#f4f4f4', display: 'column', gap: '50px' }}>
          <Link to='/'>Главная</Link>
          <Link to='/dashboard'>Dashboard</Link>
          <Link to='/settings'>Настройки</Link>
          <Link to='/profile'>Профиль</Link>
        </nav>

        <div style={{ padding: '20px' }}>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path='/' element={<h2>Главная страница</h2>} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>
          </Suspense>
        </div>
    </BrowserRouter>
  );
}

export default App;