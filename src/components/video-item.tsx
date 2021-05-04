import * as React from 'react';
import { Box, Heading, Image, Link, Text } from '@chakra-ui/react';
import videos from '../assets/videos.json';
import { getYTPreviewUrl } from '../utils';
import moment from 'moment';

type VideoItemProps = {
  video: typeof videos[0];
};

const VideoItem: React.FC<VideoItemProps> = ({ video }) => {
  return (
    <Box>
      <Image src={getYTPreviewUrl(video._id)} alt={video.title} width="100%" />
      <Link>
        <Heading pt={2} size="md">
          {video.title}
        </Heading>
      </Link>
      <Box as="time" dateTime={video.publishDate} fontSize="xs" mt={1}>
        {moment(video.publishDate).fromNow()}
      </Box>
    </Box>
  );
};

export default VideoItem;
