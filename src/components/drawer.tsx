import * as React from 'react';
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import {
  useDisclosure,
  IconButton,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Drawer as ChakraDrawer,
  Image,
  Text,
  List,
  ListItem,
  Input,
  InputGroup,
  InputRightElement,
  Link as ChakraLink,
  Flex,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function Drawer() {
  // drawer disclosure
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <IconButton
        onClick={onOpen}
        aria-label="Menu"
        variant="outline"
        color="white"
        ref={btnRef}
      >
        <HamburgerIcon boxSize={6} />
      </IconButton>

      <ChakraDrawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        size="full"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex justifyContent="center">
              <Image
                src="/assets/GCNLogoTxtRed.svg"
                maxHeight="48px"
                maxWidth="80px"
              />
            </Flex>
            <InputGroup mt={3}>
              <Input placeholder="Search GCN..." />
              <InputRightElement color="gray.600">
                <SearchIcon />
              </InputRightElement>
            </InputGroup>
          </DrawerHeader>

          <DrawerBody pt={0}>
            <List listStyleType="none">
              <ListItem>
                <Text sx={headingStyles}>Racing</Text>
                <List listStyleType="none">
                  <ListItemLink href="/racing/results">Results</ListItemLink>
                  <ListItemLink href="/racing/schedule">Schedule</ListItemLink>
                  <ListItemLink href="/racing/highlights">
                    Highlights
                  </ListItemLink>
                  <ListItemLink href="/racing/archives">Archives</ListItemLink>
                </List>
              </ListItem>
              <ListItem>
                <Text sx={headingStyles}>Videos</Text>
                <List listStyleType="none">
                  <ListItemLink href="/videos/featured">Featured</ListItemLink>
                  <ListItemLink href="/videos/how-to">How To</ListItemLink>
                  <ListItemLink href="/videos/maintenance">
                    Maintenance
                  </ListItemLink>
                  <ListItemLink href="/videos/ask-gcn">Ask GCN</ListItemLink>
                  <ListItemLink href="/videos/training">Training</ListItemLink>
                  <ListItemLink href="/videos/top-10">Top 10s</ListItemLink>
                  <ListItemLink href="/videos/gcn-tech">GCN Tech</ListItemLink>
                </List>
              </ListItem>
              <ListItem>
                <Text sx={headingStyles}>Presenters</Text>
                <List listStyleType="none">
                  <ListItemLink href="/presenters/daniel-lloyd">
                    Daniel Lloyd
                  </ListItemLink>
                  <ListItemLink href="/presenters/james-lowsley-williams">
                    James Lowsley-Williams
                  </ListItemLink>
                  <ListItemLink href="/presenters/jon-cannings">
                    Jon Cannings
                  </ListItemLink>
                  <ListItemLink href="/presenters/manon-lloyd">
                    Manon Lloyd
                  </ListItemLink>
                  <ListItemLink href="/presenters/oliver-bridgewood">
                    Oliver Bridgewood
                  </ListItemLink>
                  <ListItemLink href="/presenters/simon-richardson">
                    Simon Richardson
                  </ListItemLink>
                  <ListItemLink href="/presenters/tom-last">
                    Tom Last
                  </ListItemLink>
                </List>
              </ListItem>
            </List>
          </DrawerBody>
        </DrawerContent>
      </ChakraDrawer>
    </>
  );
}

const ListItemLink: React.FC<{ href: string }> = ({ children, href }) => {
  return (
    <ListItem display="flex" borderBottom="1px solid" borderColor="gray.300">
      <Link href={href}>
        <ChakraLink height="100%" width="100%" display="box" pl={3} py={2}>
          {children}
        </ChakraLink>
      </Link>
    </ListItem>
  );
};

const headingStyles = {
  fontWeight: 'bold',
  textTransform: 'uppercase',
  py: 2,
  borderBottom: '1px solid',
  borderColor: 'gray.300',
};
