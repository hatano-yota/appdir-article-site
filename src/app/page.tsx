import type { Article } from "../types/Types";
import { Heading } from "./components/common";
import { ArticleList } from "./components/ArticleList";

const getArticles = async () => {
  const res = await fetch("http://localhost:3000/api/articles", {
    cache: "no-store",
  });

  // エラーハンドリング
  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  const data = await res.json();
  return data.articles as Article[];
};

export default async function Home() {
  const articles = await getArticles();

  return (
    <div>
      <Heading as="h1" mb={4}>
        新着記事
      </Heading>
      <ArticleList articles={articles} />
    </div>
  );
}
