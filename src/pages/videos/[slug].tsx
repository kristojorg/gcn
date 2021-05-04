import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import videos from '../../assets/videos.json';
import DateElement from '../../components/date';
import { getYTPreviewUrl } from '../../utils';

type VideoPageProps = {
  video: typeof videos[0];
};
export default function VideoPage({ video }: VideoPageProps) {
  return (
    <Box py={3}>
      <Image width="100%" src={getYTPreviewUrl(video._id)} />
      <Box px={2}>
        <Heading as="h1" size="lg" mt={3}>
          {video.title}
        </Heading>
        <DateElement date={video.publishDate} />
        <Text mt={3}>{video.description}</Text>
      </Box>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const video = videos.find((vid) => vid.urlTitle === params.slug);

  if (!video) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      video,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = videos.map((vid) => ({
    params: { slug: vid.urlTitle },
  }));

  return {
    paths,
    fallback: false,
  };
};
