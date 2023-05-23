import { Card, CardBody, CardHeader, Heading, Text } from "@/app/components/common";
import { Article } from "@/types/Types";

const ArticleContent = ({ article }: { article: Article }) => {
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

export default ArticleContent;
