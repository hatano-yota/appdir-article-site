import { Avatar, Flex, StackDivider, Text, VStack } from "@/app/components/common";
import { Comment } from "@/types/Types";

const Comments = async ({ commentsPromise }: { commentsPromise: Promise<Comment[]> }) => {
  const comments = await commentsPromise;

  if (comments.length === 0) {
    return (
      <Text as="p" fontSize="md">
        コメントはありません。
      </Text>
    );
  }
  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      as="ul"
      align="stretch"
      px={4}
    >
      {comments.map((comment) => (
        <Flex key={comment.id} as="li" listStyleType="none" align="center">
          <Avatar size="sm" name={comment.author.name} src={comment.author.avatarUrl} mr={4} />
          <Text fontSize="sm">{comment.body}</Text>
        </Flex>
      ))}
    </VStack>
  );
};

export default Comments;
