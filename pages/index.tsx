import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Layout from '@/components/Layout/Layout';
import FileList from '@/components/FileList';
import { FileListProps } from '@/types';
import { getFiles } from '@/lib/data';
import { gruvbox } from '@/styles/theme';

export default function Home({ files }: FileListProps) {
  return (
    <>
      <Head>
        <style>{`
          body {
            background-color: ${gruvbox.bg};
            color: ${gruvbox.fg};
          }
        `}</style>
      </Head>
      <Layout title="File Explorer" description="File list view">
        <div style={{ 
          backgroundColor: gruvbox.bg, 
          padding: '2rem',
          borderRadius: '0.5rem',
        }}>
          <h1 style={{ 
            color: gruvbox.brightYellow, 
            marginBottom: '1rem',
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}>
            File Explorer
          </h1>
          <FileList files={files} />
        </div>
      </Layout>
    </>
  );
}

// Add getServerSideProps function
export const getServerSideProps: GetServerSideProps<FileListProps> = async () => {
  const files = await getFiles();
  
  // Pass data to the page via props
  return {
    props: {
      files,
    },
  };
};
