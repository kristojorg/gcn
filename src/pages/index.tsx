import * as React from 'react';
import Head from 'next/head';
import {
  Tabs as ChakraTabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import GcnFeed from '../components/gcn-feed';
import RacingFeed from '../components/racing-feed';
import HomeFeed from '../components/home-feed';

export default function Home() {
  return (
    <div>
      <Head>
        <title>GCN | Home</title>
        <meta name="description" content="The source for cycling contnet." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraTabs isFitted colorScheme="red">
        <TabList>
          <Tab>Home</Tab>
          <Tab>Racing</Tab>
          <Tab>GCN+</Tab>
          <Tab>Shop</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <HomeFeed />
          </TabPanel>

          <TabPanel>
            <RacingFeed />
          </TabPanel>

          <TabPanel>
            <GcnFeed />
          </TabPanel>

          <TabPanel>
            <p>shop!</p>
          </TabPanel>
        </TabPanels>
      </ChakraTabs>
    </div>
  );
}
