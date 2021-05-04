import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import videos from '../../assets/videos.json';
import DateElement from '../../components/date';
import { getYTPreviewUrl } from '../../utils';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

type VideoPageProps = {
  video: typeof videos[0];
};
export default function VideoPage({ video }: VideoPageProps) {
  return (
    <Box p={3}>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/videos">Videos</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink
            href={`/gcn+/${video.urlTitle}`}
            isTruncated
            maxWidth="150px"
          >
            {video.title}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Image my={3} width="100%" src={getYTPreviewUrl(video._id)} />
      <Box>
        <Heading as="h1" size="lg">
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
