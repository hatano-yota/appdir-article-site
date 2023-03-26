import { notFound } from "next/navigation";
import { Article, Comment } from "@/types/Types";
import { Suspense } from "react";

const getArticle = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/articles/${slug}`, {
    next: { revalidate: 60 },
  });
  if (res.status === 404) {
    // notFound 関数を呼び出すと not-found.tsx を表示する
    notFound();
  }
  if (!res.ok) {
    throw new Error("Failed to fetch article");
  }
  const data = await res.json();
  return data as Article;
};

const getComments = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/articles/${slug}/comments`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch comments");
  }
  const data = await res.json();
  return data as Comment[];
};

export const ArticleDetail = async ({ params }: { params: { slug: string } }) => {
  const articlePromise = getArticle(params.slug);
  const commentsPromise = getComments(params.slug);
  const article = await articlePromise;
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <h2>Comments</h2>
      <Suspense fallback={<div>Loading comments...</div>}>
        {/* @ts-expect-error 現状は jsx が Promise を返すと TypeScript が型エラーを報告するが、将来的には解決される */}
        <Comments commentsPromise={commentsPromise} />
      </Suspense>
    </div>
  );
};
const Comments = async ({ commentsPromise }: { commentsPromise: Promise<Comment[]> }) => {
  const comments = await commentsPromise;
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.body}</li>
      ))}
    </ul>
  );
};
export default ArticleDetail;
