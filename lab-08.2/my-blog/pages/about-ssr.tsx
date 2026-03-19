export const getServerSideProps = async () => {
    return { props: { time: new Date().toLocaleTimeString() } };
};
export default function AboutSSR({ time }: { time: string }) {
    return <div><h1>About (SSR)</h1><p>Rendered at: {time}</p><p>Обновите, чтобы увидеть изменение времени</p></div>;
}