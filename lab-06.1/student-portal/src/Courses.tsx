interface Course {
    id: number;
    title: string;
}

const Courses = () => {
    const courses: Course[] = [
        {id: 1, title: "React"},
        {id: 2, title: "Javascript"},
        {id: 3, title: "Typescript"},
    ];

    return (
        <div>
            <h1>Доступные курсы</h1>
            <ul>
                {courses.map(course => <li key={course.id}>{course.title}</li>)}
            </ul>
        </div>
    );
};

export default Courses;