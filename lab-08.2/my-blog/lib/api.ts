import { Post, Author, User, Notification } from "@/types";
import { resolve } from "path";

const authors: Author[] = [
    { id: "1", name: "John Doe", bio: "Tech writer", avatar: "/avatars/john.jpg" },
    { id: "2", name: "Jane Smith", bio: "React expert", avatar: "/avatars/jane.jpg" },
];

const posts: Post[] = [
    {
    id: "1",
    title: "Getting Started with Next.js",
    content: "Next.js is a React framework that enables server-side rendering...",
    author: "1",
    date: "2026-03-01",
    tags: ["nextjs", "react"],
    readTime: 5,
    },
    {
        id: "2",
        title: "Какой-то еще один пост",
        content: "Ну тут что-то написано такое вот",
        author: "2",
        date: "2026-03-19",
        tags: ["frontend", "react"],
        readTime: 7,
    }
];

export async function getAllPosts(): Promise<Post[]> {
    return posts;
}

export async function getPostById(id: string): Promise<Post | undefined> {
    return posts.find(p => p.id === id);
} 

export async function getAuthorById(id: string): Promise<Author | undefined> {
    return authors.find(a => a.id ===id);
}


export async function getCurrentUser(): Promise<User> {
    return {
        id: 'user-123',
        name: "Demo User",
        email: "demo@example.com",
        avatar: "/avatars/demo.jpg",
        role: "user",
    };
}

export async function getUserAnalytics(userId: string) {
    await new Promise(resolve => setTimeout(resolve, 100));
    return {
        pageViews: Math.floor(Math.random() * 10000),
        sessions: Math.floor(Math.random() * 1000),
        bounceRate: Math.random() * 100,
    };
}

export async function getUserNotifications(userId: string): Promise<Notification[]> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return [
        { id: "1", type: "info", message: "Welcome to the dashboard!", read: false, createdAt: "2026-03-01" },
        { id: "2", type: "success", message: "Your profile was updated", read: true, createdAt: "2026-02-28" },
    ];
}