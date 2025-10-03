import { SingleFileType } from '@/components/Files/types';
import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';

type OpenFilesUpdater = SingleFileType[] | ((prev: SingleFileType[]) => SingleFileType[]);

interface FileContextType {
  openFiles: SingleFileType[];
  open: (file: SingleFileType) => void;
  close: (file: SingleFileType) => void;
  setOpenFiles: (updater: OpenFilesUpdater) => void;
}

const FileContext = createContext<FileContextType | undefined>(undefined);

export const FileProvider = ({ children }: { children: ReactNode }) => {
  const [openFiles, setOpenFilesState] = useState<SingleFileType[]>([]);
  const open = useCallback((file: SingleFileType) =>
    setOpenFilesState(prev => (prev.find((f) => f.name == file.name) != undefined ? prev : [...prev, file])), []);
  const close = useCallback((file: SingleFileType) =>
    setOpenFilesState(prev => prev.filter(f => f.name !== file.name)), []);
  const setOpenFiles = useCallback((updater: OpenFilesUpdater) =>
    setOpenFilesState(prev => typeof updater === 'function' ? updater(prev) : updater), []);

  return (
    <FileContext.Provider value={{ openFiles, open, close, setOpenFiles }}>
      {children}
    </FileContext.Provider>
  );
};

export const useFile = (): FileContextType => {
  const ctx = useContext(FileContext);
  if (!ctx) throw new Error('useFile must be used within FileProvider');
  return ctx;
};
