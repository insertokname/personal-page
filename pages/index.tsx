import React from 'react';
import { GetServerSideProps } from 'next';
import FileList from '@/components/FileList';
import { File } from '@/types/File'
import ThemeToggle from '@/components/ThemeToggle';
import FileIcon from '@/components/icons/FileIcon';
import FolderIcon from '@/components/icons/FolderIcon';
import PhotoIcon from '@/components/icons/PhotoIcon';
import { DraggableWindow } from '../components/DraggableWindow';
import { useFile } from '@/contexts/FileContext';

export default function Home() {
  const { openFiles } = useFile();

  const files: File[] = [
    { name: 'Documents', type: 'File folder', dateModified: '2023-10-26 10:00 AM', icon: FolderIcon },
    { name: 'Images', type: 'File folder', dateModified: '2023-10-25 03:15 PM', icon: FolderIcon },
    { name: 'Projects', type: 'File folder', dateModified: '2023-10-26 09:30 AM', icon: FolderIcon },
    { name: 'resume_final.pdf', type: 'PDF Document', dateModified: '2023-10-20 11:20 AM', icon: FileIcon },
    { name: 'notes.txt', type: 'Text Document', dateModified: '2023-10-26 10:05 AM', icon: FileIcon },
    { name: 'app-screenshot.png', type: 'PNG image', dateModified: '2023-10-24 05:45 PM', icon: PhotoIcon },
  ];

  return (
    <div className='flex bg-gruvbox-bg min-h-screen justify-center items-start pt-22'>
      <div className="min-w-[80%] sm:min-w-[75%] md:min-w-[70%]">
        <div className='mb-4 flex justify-between'>
          <h1 className="text-2xl text-gruvbox-green-dim">
            Ilie Demian
          </h1>
          <ThemeToggle />
        </div>
        <FileList files={files} />
        {openFiles && openFiles.map((openFile) => (
          <DraggableWindow key={openFile.name} file={openFile} children={<openFile.icon />} />
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
