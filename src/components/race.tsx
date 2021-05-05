import * as React from 'react';
import {
  Box,
  Flex,
  Heading,
  Badge,
  OrderedList,
  ListItem,
  Image,
  Text,
} from '@chakra-ui/react';
import DateElement from './date';

type RaceProps = {
  date?: string;
  imageUrl: string;
  title: string;
  stage: string;
  isLive: boolean;
  results?: { name: string; team: string }[];
};
export default function Race({
  date,
  imageUrl,
  title,
  stage,
  isLive,
  results,
}: RaceProps) {
  return (
    <Box width="100%">
      <Image
        src={imageUrl}
        width="100%"
        height="200px"
        objectFit="cover"
        objectPosition="center 20%"
      />
      <Flex alignItems="baseline">
        <Heading size="sm" mr={2}>
          {title}
        </Heading>
        <Text>{stage}</Text>
        <Box flex="1" />
        {isLive ? (
          <Badge variant="solid" colorScheme="red">
            Live Now
          </Badge>
        ) : (
          <Badge colorScheme="green">Replay</Badge>
        )}
      </Flex>
      {date && <DateElement date={date} lineHeight="shorter" />}
      {results && (
        <OrderedList>
          {results.map((rider) => (
            <ListItem key={rider.name}>
              <Flex>
                <Text flex="0 0 40%">{rider.name}</Text>
                <Text flex="0 0 60%">{rider.team}</Text>
              </Flex>
            </ListItem>
          ))}
        </OrderedList>
      )}
    </Box>
  );
}
