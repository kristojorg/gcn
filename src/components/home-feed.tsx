import * as React from 'react';
import { Heading, VStack } from '@chakra-ui/react';
import races from '../assets/races';
import videos from '../assets/videos.json';
import Race from './race';
import VideoItem from './video-item';

export default function HomeFeed() {
  const racesAndVideos = [...races.replays, ...videos].sort((a, b) => {
    const aDate = 'date' in a ? a.date : a.publishDate;
    const bDate = 'date' in b ? b.date : b.publishDate;

    return new Date(aDate) > new Date(bDate) ? -1 : 1;
  });

  return (
    <VStack spacing={10}>
      <Heading width="100%">Today</Heading>
      {races.live.map((race) => (
        <Race key={race.title} isLive {...race} />
      ))}
      <Heading width="100%">Earlier</Heading>
      {racesAndVideos.map((raceOrVid) => {
        if ('publishDate' in raceOrVid) {
          return <VideoItem key={raceOrVid.urlTitle} video={raceOrVid} />;
        }
        return (
          <Race
            key={`${raceOrVid.title}.${raceOrVid.stage}`}
            isLive={false}
            {...raceOrVid}
          />
        );
      })}
    </VStack>
  );
}
