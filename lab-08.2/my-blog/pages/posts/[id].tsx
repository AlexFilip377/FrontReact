import { GetStaticPaths, GetStaticProps } from "next";
import { Post, Author } from "@/types";
import Link from "next/link";
import { getAllPosts, getPostById, getAuthorById } from "@/lib/api";

interface PostProps {
    post: Post;
    author: Author;
}

export default function PostPage({ post, author }: PostProps) {
    return (
        <article style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <h1>{post.title}</h1>
            <p><strong>От {author?.name || "Неизвестный автор"}</strong></p>
            <div style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                {post.content}
            </div>
            <div style={{ marginTop: '20px' }}>
                {post.tags.map(tag => (
                    <span key={tag} style={{ marginRight: '10px', color: 'blue' }}>#{tag}</span>
                ))}
            </div>
            <br />
            <Link href="/">Домой</Link>
        </article>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getAllPosts();
    const paths = posts.map(post => ({
        params: { id: post.id }
    }));

    return {
        paths,
        fallback: 'blocking'
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const post = await getPostById(params?.id as string);

    if (!post) {
        return { notFound: true };
    }

    const author = await getAuthorById(post.author);

    return {
        props: { post, author },
        revalidate: 60,
    };
};