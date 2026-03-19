export const getStaticProps = async () => {
    return { props: { time: new Date().toLocaleTimeString() } };
};
export default function About({ time }: { time: string }) {
    return <div><h1>About (SSG)</h1><p>Rendered at: {time}</p><p>Это время не меняется</p></div>;
}