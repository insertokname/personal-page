import { ThemeProvider } from '@/contexts/ThemeContext';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { FileProvider } from '@/contexts/FileContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <FileProvider>
        <Component {...pageProps} />
      </FileProvider>
    </ThemeProvider>
  );
}
