import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      {" "}
      {/* Removed fixed width */}
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText noOfLines={3} height="3" />
      </CardBody>
    </Card.Root>
  );
};

export default GameCardSkeleton;
