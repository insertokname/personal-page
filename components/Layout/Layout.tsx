import Head from 'next/head';
import { ReactNode } from 'react';
import { gruvbox } from '@/styles/theme';

interface LayoutProps {
  children: ReactNode;
  title: string;
  description: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <div style={{ backgroundColor: gruvbox.bg, minHeight: '100vh' }}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          body {
            background-color: ${gruvbox.bg};
            color: ${gruvbox.fg};
          }
        `}</style>
      </Head>
      <main style={{ 
        padding: '2rem',
        backgroundColor: gruvbox.bg
      }}>
        {children}
      </main>
    </div>
  );
}
