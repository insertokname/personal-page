import getRoot from '@/components/Files';
import { DirectoryFileType, SingleFileType } from '@/components/Files/types';
import React, { createContext, useState, useContext, ReactNode, useMemo, useCallback } from 'react';

interface PathUpdateResult {
  matched: boolean;
  file?: SingleFileType;
}

interface PathContextType {
  path: DirectoryFileType[];
  push: (dir: DirectoryFileType) => void;
  pop: () => void;
  setPathByNames: (segments: string[]) => PathUpdateResult;
}

const PathContext = createContext<PathContextType | undefined>(undefined);

export const PathProvider = ({ children }: { children: ReactNode }) => {
  const root = useMemo(() => getRoot(), []);
  const rootPath = useMemo(() => [root], [root]);
  const [path, setPathState] = useState<DirectoryFileType[]>(rootPath);

  const replacePath = useCallback((nextPath: DirectoryFileType[]) => {
    setPathState(prev => {
      if (prev.length === nextPath.length && prev.every((dir, idx) => dir === nextPath[idx])) {
        return prev;
      }
      return nextPath;
    });
  }, []);

  const push = useCallback((dir: DirectoryFileType) =>
    setPathState(prev => [...prev, dir]), []);
  const pop = useCallback(() =>
    setPathState(prev => prev.length > 1 ? prev.slice(0, -1) : prev), []);

  const resolvePath = useCallback((segments: string[]) => {
    const sanitized = segments.map(segment => segment.trim()).filter(Boolean);
    let currentDir = root;
    const directories: DirectoryFileType[] = [root];
    let file: SingleFileType | undefined;

    for (let i = 0; i < sanitized.length; i++) {
      const segment = sanitized[i];
      const matchingItem = currentDir.children.find(child => child.type.name === segment);
      if (!matchingItem) {
        return null;
      }

      if (matchingItem.type.kind === 'directory') {
        directories.push(matchingItem.type);
        currentDir = matchingItem.type;
        continue;
      }

      if (matchingItem.type.kind === 'single') {
        if (i !== sanitized.length - 1) {
          return null;
        }
        file = matchingItem.type;
        break;
      }

      return null;
    }

    return { directories, file };
  }, [root]);

  const setPathByNames = useCallback((segments: string[]): PathUpdateResult => {
    if (segments.length === 0) {
      replacePath(rootPath);
      return { matched: true };
    }

    const result = resolvePath(segments);
    if (!result) {
      replacePath(rootPath);
      return { matched: false };
    }

    replacePath(result.directories);
    return { matched: true, file: result.file };
  }, [replacePath, resolvePath, rootPath]);

  return (
    <PathContext.Provider value={{ path, push, pop, setPathByNames }}>
      {children}
    </PathContext.Provider>
  );
};

export const usePath = (): PathContextType => {
  const ctx = useContext(PathContext);
  if (!ctx) throw new Error('usePath must be used within PathProvider');
  return ctx;
};
