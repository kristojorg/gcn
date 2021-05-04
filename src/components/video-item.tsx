import * as React from 'react';
import { Heading, Image, LinkBox, LinkOverlay } from '@chakra-ui/react';
import videos from '../assets/videos.json';
import { getYTPreviewUrl } from '../utils';
import NextLink from 'next/link';
import DateElement from './date';

type VideoItemProps = {
  video: typeof videos[0];
};

const VideoItem: React.FC<VideoItemProps> = ({ video }) => {
  return (
    <LinkBox>
      <Image src={getYTPreviewUrl(video._id)} alt={video.title} width="100%" />
      <NextLink href={`/videos/${video.urlTitle}`}>
        <LinkOverlay>
          <Heading pt={2} size="md">
            {video.title}
          </Heading>
        </LinkOverlay>
      </NextLink>
      <DateElement date={video.publishDate} />
    </LinkBox>
  );
};

export default VideoItem;
