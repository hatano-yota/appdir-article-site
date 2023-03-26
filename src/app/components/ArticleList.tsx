import { VStack } from "./common";
import { ArticleCard } from "./ArticleCard";
import { Article } from "@/types/Types";

export const ArticleList = ({ articles }: { articles: Article[] }) => {
  return (
    <VStack spacing={4} as="ul">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </VStack>
  );
};
