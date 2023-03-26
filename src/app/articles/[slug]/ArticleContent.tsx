import { Card, CardHeader, CardBody, Text, Heading } from "@/app/components/common";
import { Article } from "@/types/Types";

export const ArticleContent = ({ article }: { article: Article }) => {
  return (
    <Card as="article">
      <CardHeader>
        <Heading as="h1">{article.title}</Heading>
      </CardHeader>
      <CardBody>
        <Text as="p" fontSize="md">
          {article.content}
        </Text>
      </CardBody>
    </Card>
  );
};
