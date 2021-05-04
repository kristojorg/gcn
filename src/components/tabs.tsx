import * as React from 'react';
import {
  Tabs as ChakraTabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import RacingFeed from './racing-feed';

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
          <RacingFeed />
        </TabPanel>

        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </ChakraTabs>
  );
}
