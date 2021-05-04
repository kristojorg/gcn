import * as React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import videos from '../assets/videos.json';
import { getYTPreviewUrl } from '../utils';

type VideoItemProps = {
  video: typeof videos[0];
};

const VideoItem: React.FC<VideoItemProps> = ({ video }) => {
  return (
    <Box>
      <Image src={getYTPreviewUrl(video._id)} alt={video.title} width="100%" />
      <Text>{video.title}</Text>
    </Box>
  );
};

export default VideoItem;
