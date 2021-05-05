import * as React from 'react';
import {
  Tabs as ChakraTabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import GcnFeed from './gcn-feed';
import RacingFeed from './racing-feed';
import HomeFeed from './home-feed';

export default function Tabs() {
  return (
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
  );
}
