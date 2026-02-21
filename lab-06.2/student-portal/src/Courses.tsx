import { Link, useSearchParams } from "react-router-dom";
import { courses } from "./data";

function Courses() {
    const [searchParams, setSearchParams] = useSearchParams();

    const sortOrder = searchParams.get('sort') || 'asc';

    const sortedCourses = [...courses].sort((a, b) => {
        if (sortOrder === 'desc') {
            return b.title.localeCompare(a.title);
        }
        return a.title.localeCompare(b.title);
    });

    const toggleSort = () => {
        setSearchParams({
            sort: sortOrder === 'asc' ? "desc" : "asc",
        });
    };

    return (
        <div>
            <h1>Доступные курсы</h1>

            <button onClick={toggleSort} style={{ marginBottom: '15px', padding: '8px 12px', cursor: 'pointer' }}>
                Сортировка: {sortOrder.toUpperCase()} {sortOrder === "asc" ? "^" : "v"}
            </button>

            <ul style={{ listStyle: 'none', padding: 0 }}>
                {sortedCourses.map((c) => (
                    <li key={c.id} style={{ marginBottom: '10px', fontSize: '1.1em' }}>
                        <Link to={`/courses/${c.id}`} style={{ textDecoration: 'none', color: '#007bff' }}>
                            {c.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Courses;