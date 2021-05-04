import * as React from 'react';
import { Image } from '@chakra-ui/image';
import { Avatar, Flex } from '@chakra-ui/react';
import Drawer from './drawer';

export default function Header() {
  return (
    <Flex
      as="header"
      bg="gcnRed"
      p={2}
      justifyContent="space-between"
      alignItems="center"
    >
      <Drawer />
      <Image src="/assets/GCNLogoTxt.svg" maxHeight="48px" maxWidth="80px" />
      <Avatar size="sm" />
    </Flex>
  );
}
