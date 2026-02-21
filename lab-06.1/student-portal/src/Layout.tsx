import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <div style={{ fontFamily: 'sans-serif' }}>
            <nav style={{
                display: 'flex',
                gap: '20px',
                padding: '20px',
                backgroundColor: '#cecece',
                borderBottom: '1px solid #ccc'
            }}>
                <Link to='/'>Главная</Link>
                <Link to='/courses'>Курсы</Link>
                <Link to='/about'>О нас</Link>
            </nav>

            <main style={{ padding: '20px', minHeight: '300px' }}>
                <Outlet />
            </main>

            <footer style={{ padding: '20px', borderTop: '1px solid #ccc', fontSize: '0.9em' }}>
                <p>Студенческий портал-2026</p>
            </footer>
        </div>
    );
}

export default Layout;