import { extendTheme } from '@chakra-ui/react';

const red = {
  50: '#ffe2e3',
  100: '#ffb1b4',
  200: '#ff7f83',
  300: '#ff4d52',
  400: '#fe1d22',
  500: '#e50508',
  600: '#c30006',
  700: '#810003',
  800: '#4f0000',
  900: '#200000',
};

const theme = extendTheme({
  colors: {
    red,
    // the specific GCN red
    gcnRed: red[600],
  },
});

export default theme;
