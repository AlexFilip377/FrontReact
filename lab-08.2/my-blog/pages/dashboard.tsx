import { GetServerSideProps } from "next";
import { User, Notification } from "@/types";
import { getCurrentUser, getUserNotifications, getUserAnalytics } from "@/lib/api";

interface DashboardProps {
    user: User;
    notifications: Notification[];
    analytics: {
        pageViews: number;
        sessions: number;
        bounceRate: number;
    };
    currentTime: string;
}

export default function Dashboard({ user, notifications, analytics, currentTime }: DashboardProps) {
    const unreadCount = notifications.filter(n => !n.read).length;

    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h1>Добро пожаловать, {user.name}</h1>
            <p>Роль: <span style={{ fontWeight: 'bold', color: 'green' }}>{user.role}</span></p>

            <section style={{ background: '#f4f4f4', padding: '1rem', borderRadius: '8px', margin: '1rem 0'}}>
                <h2>Аналитика</h2>
                <p>Просмотры страницы: <strong>{analytics.pageViews.toLocaleString()}</strong></p>
                <p>Сессии: <strong>{analytics.sessions.toLocaleString()}</strong></p>
                <p>Bounce Rate: <strong>{analytics.bounceRate.toFixed(1)}%</strong></p>
            </section>

            <section>
                <h3>Уведомления ({unreadCount} не прочитано)</h3>
                {notifications.map(notif => (
                    <div key={notif.id} style={{ borderBottom: '1px solid #ddd', padding: '0.5rem 0'}}>
                        <small>[{notif.type}]</small> {notif.message}
                    </div>
                ))}
            </section>

            <footer style={{ marginTop: '2rem', color: '#666' }}>
                <p>Последнее обновление (Server Time): {currentTime}</p>
            </footer>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const user = await getCurrentUser();
    const notifications = await getUserNotifications(user.id);
    const analytics = await getUserAnalytics(user.id);

    return {
        props: {
            user,
            notifications,
            analytics,
            curretTime: new Date().toLocaleDateString(),
        },
    };
};