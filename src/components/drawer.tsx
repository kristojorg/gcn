import { HamburgerIcon } from '@chakra-ui/icons';
import {
  useDisclosure,
  IconButton,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Drawer as ChakraDrawer,
  Input,
  DrawerFooter,
  Button,
} from '@chakra-ui/react';
import * as React from 'react';

export default function Drawer() {
  // drawer disclosure
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <IconButton
        onClick={onOpen}
        aria-label="Menu"
        variant="ghost"
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
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </ChakraDrawer>
    </>
  );
}
