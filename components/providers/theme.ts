import { createTheme } from '@mui/material/styles'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
            color: '#fff',
          }),
        }),
        icon: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            color: '#fff !important',
          }),
        }),
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: '40px',
        },
      },
    },
  },
})

export default theme
