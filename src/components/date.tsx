import * as React from 'react';
import moment from 'moment';
import { Box } from '@chakra-ui/react';

type DateElementProps = {
  date: string;
};

export default function DateElement({ date }: DateElementProps) {
  return (
    <Box as="time" dateTime={date} fontSize="xs" mt={1}>
      {moment(date).fromNow()}
    </Box>
  );
}
