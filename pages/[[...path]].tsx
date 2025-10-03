import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import FileList from '@/components/FileList';
import ThemeToggle from '@/components/ThemeToggle';
import { DraggableWindow } from '@/components/DraggableWindow';
import { useFile } from '@/contexts/FileContext';
import { usePath } from '@/contexts/PathContext';

export default function Home() {
  const router = useRouter();
  const { openFiles, setOpenFiles } = useFile();
  const { setPathByNames } = usePath();

  useEffect(() => {
    if (!router.isReady) return;

    const [pathname] = router.asPath.split(/[?#]/);
    const segments = pathname
      .split('/')
      .filter(Boolean)
      .map(segment => decodeURIComponent(segment));

    const result = setPathByNames(segments);
    if (!result.matched) {
      if (segments.length > 0) {
        router.replace('/', undefined, { shallow: true });
      }
      setOpenFiles([]);
      return;
    }

    const fileToOpen = result.file;
    if (fileToOpen) {
      setOpenFiles(prev => prev.find(openFile => openFile.name === fileToOpen.name)
        ? prev
        : [...prev, fileToOpen]);
    }
  }, [router.isReady, router.asPath, router, setPathByNames, setOpenFiles]);

  return (
    <div className='flex bg-gruvbox-bg min-h-screen justify-center items-start pt-22'>
      <div className="min-w-[80%] sm:min-w-[75%] md:min-w-[70%]">
        <div className='mb-4 flex justify-between'>
          <h1 className="text-2xl text-gruvbox-green-dim">
            Demian Ilie
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
