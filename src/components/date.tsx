import * as React from 'react';
import moment from 'moment';
import { Box } from '@chakra-ui/react';

type DateElementProps = React.ComponentProps<typeof Box> & {
  date: string;
};

export default function DateElement({ date, ...props }: DateElementProps) {
  return (
    <Box as="time" dateTime={date} fontSize="xs" {...props}>
      {moment(date).fromNow()}
    </Box>
  );
}
