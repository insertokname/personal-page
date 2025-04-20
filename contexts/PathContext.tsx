import getRoot from '@/components/Files';
import { DirectoryFileType, SingleFileType } from '@/components/Files/types';
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface PathContextType {
  path: DirectoryFileType[];
  push: (dir: DirectoryFileType) => void;
  pop: () => void;
}

const PathContext = createContext<PathContextType | undefined>(undefined);

export const PathProvider = ({ children }: { children: ReactNode }) => {
  const [path, setPath] = useState<DirectoryFileType[]>([getRoot()]);
  const push = (dir: DirectoryFileType) =>
    setPath(prev => [...prev, dir]);
  const pop = () =>
    setPath(prev => prev.length > 1 ? prev.slice(0, -1) : prev);

  return (
    <PathContext.Provider value={{ path, push, pop }}>
      {children}
    </PathContext.Provider>
  );
};

export const usePath = (): PathContextType => {
  const ctx = useContext(PathContext);
  if (!ctx) throw new Error('usePath must be used within PathProvider');
  return ctx;
};
