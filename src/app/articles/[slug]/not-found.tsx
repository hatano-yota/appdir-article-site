import { Heading, Button } from "@/app/components/common";
import NextLink from "next/link";

const NotFound = () => {
  return (
    <div>
      <Heading mb={4}>お探しの記事が見つかりませんでした。</Heading>
      <Button as={NextLink} href="/">
        トップへ戻る
      </Button>
    </div>
  );
};

export default NotFound;
