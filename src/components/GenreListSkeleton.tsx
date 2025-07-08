import { HStack, List, Skeleton } from "@chakra-ui/react";

const GenreListSkeleton = () => (
  <List.Root>
    {[...Array(16)].map((_, idx) => (
      <List.Item key={idx} paddingY="5px">
        <HStack>
          <Skeleton boxSize="32px" borderRadius={8} />
          <Skeleton height="20px" width="80px" />
        </HStack>
      </List.Item>
    ))}
  </List.Root>
);

export default GenreListSkeleton;
