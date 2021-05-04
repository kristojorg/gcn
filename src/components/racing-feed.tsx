import * as React from 'react';
import { Box } from '@chakra-ui/react';
import videos from '../assets/videos.json';
import VideoItem from './video-item';

export default function RacingFeed() {
  return (
    <Box>
      {videos.map((video) => (
        <VideoItem video={video} key={video.urlTitle} />
      ))}
    </Box>
  );
}
