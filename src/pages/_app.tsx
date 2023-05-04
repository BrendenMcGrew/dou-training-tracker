import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import {useEffect, useState} from "react";
import {createTheme, ThemeProvider} from "@mui/material";
import {CssBaseline} from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: 'light'
  }
})

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
        default: '#1a1a1a',
    },
    primary: {
      main: '#5030a5',
    }
  },
  typography: {
    allVariants: {
      fontFamily: 'comic sans ms',
    },

    h1: {
      fontSize: '2.5rem',
      color: '#D3D3D3',
    }
  },
})

function getActiveTheme(themeMode: 'light' | 'dark') {
  return themeMode === 'light' ? lightTheme : darkTheme;
}

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [activeTheme, setActiveTheme] = useState(lightTheme);
  const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark'>('dark');

  const toggleTheme: React.MouseEventHandler<HTMLAnchorElement> = () => {
    const desiredTheme = selectedTheme === 'light' ? 'dark' : 'light';

    setSelectedTheme(desiredTheme);
  };

  useEffect(() => {
    setActiveTheme(getActiveTheme(selectedTheme))
  }, [selectedTheme]);
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={activeTheme}>
        <CssBaseline />
        <Component {...pageProps} toggleTheme={toggleTheme} />
      </ThemeProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
