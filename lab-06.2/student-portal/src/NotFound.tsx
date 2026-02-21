import { Link } from "react-router-dom";

const NotFound = () => (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Ошибка 404 - страница не найдена.</h1>
        <p>Ой! Похоже, что данная страница не существует</p>
        <Link to="/">На стартовую</Link>
    </div>
);

export default NotFound;