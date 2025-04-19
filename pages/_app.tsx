import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { gruvbox } from '@/styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{ backgroundColor: gruvbox.bg, minHeight: '100vh' }}>
      <Component {...pageProps} />
    </div>
  );
}
