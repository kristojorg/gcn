import * as React from 'react';
import { VStack } from '@chakra-ui/react';
import videos from '../assets/videos.json';
import VideoItem from './video-item';

export default function RacingFeed() {
  return (
    <VStack spacing={10}>
      {videos.map((video) => (
        <VideoItem video={video} key={video.urlTitle} />
      ))}
    </VStack>
  );
}
