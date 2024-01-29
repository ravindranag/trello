import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import { PropsWithChildren } from "react";

const TrelloThemeProvider = ({ children }: PropsWithChildren) => {
  const theme = createTheme({
    typography: (palette) => ({
      fontFamily: ['PoppinsRegular'].join(','),
      allVariants: {
        color: palette.text.primary
      },
      htmlFontSize: 10
    }),
    palette: {
      mode: 'light',
      text: {
        primary: '#000',
        secondary: '#00000020'
      },
      primary: {
        main: '#000',
        contrastText: '#fff'
      },
      secondary: {
        main: '#fff',
        contrastText: '#000'
      }
    }
  })

  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      {children}
    </ThemeProvider>
  )
}

export default TrelloThemeProvider
