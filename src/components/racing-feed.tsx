import * as React from 'react';
import {
  Heading,
  VStack,
  Box,
  Flex,
  Text,
  Image,
  Badge,
  OrderedList,
  ListItem,
} from '@chakra-ui/react';
import races from '../assets/races';
import DateElement from './date';

function Race({ race }: { race: typeof races[0] }) {
  return (
    <Box width="100%">
      <Image
        src={race.imageUrl}
        width="100%"
        height="200px"
        objectFit="cover"
        objectPosition="center 20%"
      />
      <Flex alignItems="baseline">
        <Heading size="sm" mr={2}>
          {race.title}
        </Heading>
        <Text>{race.stage}</Text>
        <Box flex="1" />
        <Badge colorScheme="red">Replay</Badge>
      </Flex>
      <DateElement date={race.date} lineHeight="shorter" />
      <OrderedList>
        {race.results.map((rider) => (
          <ListItem key={rider.name}>
            <Flex>
              <Text flex="0 0 40%">{rider.name}</Text>
              <Text flex="0 0 60%">{rider.team}</Text>
            </Flex>
          </ListItem>
        ))}
      </OrderedList>
    </Box>
  );
}

export default function RacingFeed() {
  return (
    <VStack spacing={10}>
      {races.map((race) => (
        <Race key={race.title} race={race} />
      ))}
    </VStack>
  );
}
