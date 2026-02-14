import UserCard from "./UserCard";
import SkillList from "./skillList";
import type { User, Skill } from "./types";

function App() {
  const sampleUser: User = {
    name: 'Oleg Olegovich',
    email: '0leg@gmail.com',
    age: 27
  };

  const sampleSkills: Skill[] = [
    { id: 1, name: "React", level: 'Beginner' },
    { id: 2, name: "Python", level: 'Expert' },
    { id: 3, name: "TS", level: 'Intermediate' },
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <h1>Список пользователей</h1>
      
      <UserCard user={sampleUser} isActive={true}>
        <p>Биография: Фул-стэк разработчик</p>
      </UserCard>

      <SkillList skills={sampleSkills} />
    </div>
  );
}

export default App;
