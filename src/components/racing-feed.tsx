import * as React from 'react';
import { Heading, VStack } from '@chakra-ui/react';
import races from '../assets/races';
import Race from './race';

export default function RacingFeed() {
  return (
    <VStack spacing={10}>
      <Heading width="100%">Live</Heading>
      {races.live.map((race) => (
        <Race key={race.title} isLive {...race} />
      ))}
      <Heading width="100%">Replays</Heading>
      {races.replays.map((race) => (
        <Race key={race.title} isLive={false} {...race} />
      ))}
    </VStack>
  );
}
