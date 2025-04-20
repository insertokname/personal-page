import { ThemeProvider } from '@/contexts/ThemeContext';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { FileProvider } from '@/contexts/FileContext';
import { PathProvider } from '@/contexts/PathContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <FileProvider>
        <PathProvider>
          <Component {...pageProps} />
        </PathProvider>
      </FileProvider>
    </ThemeProvider>
  );
}
