import React, { createContext, PropsWithChildren, useLayoutEffect, useState } from 'react';

import { WINDOW_WIDTHS } from './shared/constants/window';

const defaultWindowWidth = typeof window !== 'undefined' ? window.innerWidth : WINDOW_WIDTHS.lgMin;

export interface IContext {
  pageIsLoading: boolean;
  setPageIsLoading: (show: boolean) => void;
  windowWidth: number;
  isDarkMode: boolean;
}

/* eslint-disable @typescript-eslint/no-unused-vars */
const Context = createContext<IContext>({
  pageIsLoading: false,
  setPageIsLoading: (show: boolean) => {},
  windowWidth: defaultWindowWidth,
  isDarkMode: false,
});
/* eslint-enable @typescript-eslint/no-unused-vars */

const AppContextProviderWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const [pageIsLoading, setPageIsLoading] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(defaultWindowWidth);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useLayoutEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();

    const handleDarkModeChange = (event: MediaQueryListEvent) => setIsDarkMode(event.matches);
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleDarkModeChange);
    setIsDarkMode(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleDarkModeChange);
    };
  }, []);

  return (
    <Context.Provider value={{
      pageIsLoading,
      setPageIsLoading,
      windowWidth,
      isDarkMode,
    }}>
      {children}
    </Context.Provider>
  );
};

export { AppContextProviderWrapper, Context as AppContext };
