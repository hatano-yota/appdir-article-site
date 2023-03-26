import DefaultTags from "@/app/DefaultTags";
import { Article } from "@/types/Types";

const getArticle = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/articles/${slug}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    // page.tsx と異なり例外を投げても error.tsx に捕捉されない
    return null;
  }
  const data = await res.json();
  return data as Article;
};

const Head = async ({ params }: { params: { slug: string } }) => {
  const article = await getArticle(params.slug);
  return (
    <>
      <title>{article?.title}</title>
      <meta name="description" content={article?.content} />
      <DefaultTags />
    </>
  );
};

export default Head;
