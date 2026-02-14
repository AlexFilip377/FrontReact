import type { Skill, SkillLevel } from "./types";

interface SkillListProps {
skills: Skill[];
}

const getLevelColor = (level: SkillLevel): string => {
    switch (level) {
        case 'Beginner': return 'red';
        case 'Intermediate': return 'yellow';
        case "Expert": return "blue";
        default: return "black";
    }
};

const SkillList = ({ skills }: SkillListProps) => {
    return (
        <div>
            <h3>Навыки:</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {skills.map((skill) => (
                    <li key={skill.id} style={{ marginBottom: '5px' }}>
                        <strong>{skill.name}</strong> -
                        <span style={{
                            color: 'white',
                            backgroundColor: getLevelColor(skill.level),
                            padding: '2px 6px',
                            borderRadius: '4px',
                            marginLeft: '5px',
                            fontSize: '0.8em'
                        }}>
                            {skill.level}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillList;