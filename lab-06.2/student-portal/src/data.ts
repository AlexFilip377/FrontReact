export interface Course {
    id: number;
    title: string;
    instructor: string;
    description: string;
}

export const courses: Course[] = [
    { id: 1, title: "React", instructor: "Данил Колбасенко", description: "Изучение React" },
    { id: 2, title: 'JavaScript', instructor: 'Сергей Сергеевич', description: 'Программирование на javascript' },
    { id: 3, title: 'python', instructor: 'Олег Олегович', description: 'Написание программ на python' },
];

export const getCourseById = (id: number) => {
    return courses.find(c => c.id === id);
};