import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      50: '#FAFAFA',
      100: '#BFBFBF',
      800: '#282828',
      900: '#1A1A1A',
    },
    yellow: {
      400: '#FFFD01',
    }
  },
  styles: {
    global: {
      'html, body': {
        color: 'gray.50',
        lineHeight: 'tall',
        backgroundColor: 'gray.900'
      },
      a: {
        color: 'gray.50',
      },
    },
  },
})
