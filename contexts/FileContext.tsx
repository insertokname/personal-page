import { SingleFileType } from '@/components/Files/types';
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface FileContextType {
  openFiles: SingleFileType[];
  open: (file: SingleFileType) => void;
  close: (file: SingleFileType) => void;
}

const FileContext = createContext<FileContextType | undefined>(undefined);

export const FileProvider = ({ children }: { children: ReactNode }) => {
  const [openFiles, setOpenFiles] = useState<SingleFileType[]>([]);
  const open = (file: SingleFileType) =>
    setOpenFiles(prev => (prev.find((f) => f.name == file.name) != undefined ? prev : [...prev, file]));
  const close = (file: SingleFileType) =>
    setOpenFiles(prev => prev.filter(f => f.name !== file.name));

  return (
    <FileContext.Provider value={{ openFiles, open, close }}>
      {children}
    </FileContext.Provider>
  );
};

export const useFile = (): FileContextType => {
  const ctx = useContext(FileContext);
  if (!ctx) throw new Error('useFile must be used within FileProvider');
  return ctx;
};
