import { useParams, useLoaderData, Link } from "react-router-dom";
import type { Course } from "./data";

function CourseDetail() {
    const { id } = useParams();
    const { course } = useLoaderData() as { course: Course };

    return (
        <div style={{ padding: '20px', border: '1px solid', borderRadius: '8px' }}>
            <h1>{course.title}</h1>
            <p><strong>Преподаватель:</strong> {course.instructor}</p>
            <p style={{ lineHeight: '1.6' }}>{course.description}</p>
            <hr />
            <p style={{ color: '#666', fontSize: '0.8em' }}>ID: {id}</p>
            <Link to='/courses'>Вернуться к курсам</Link>
        </div>
    );
}
export default CourseDetail;