import React from 'react';
import { GetServerSideProps } from 'next';
import FileList from '@/components/FileList';
import ThemeToggle from '@/components/ThemeToggle';
import { DraggableWindow } from '../components/DraggableWindow';
import { useFile } from '@/contexts/FileContext';

export default function Home() {
  const { openFiles } = useFile();

  return (
    <div className='flex bg-gruvbox-bg min-h-screen justify-center items-start pt-22'>
      <div className="min-w-[80%] sm:min-w-[75%] md:min-w-[70%]">
        <div className='mb-4 flex justify-between'>
          <h1 className="text-2xl text-gruvbox-green-dim">
            Ilie Demian
          </h1>
          <ThemeToggle />
        </div>
        <FileList />
        {openFiles && openFiles.map((openFile) => (
          <DraggableWindow key={openFile.name} file={openFile}>
            <openFile.content />
          </DraggableWindow>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
