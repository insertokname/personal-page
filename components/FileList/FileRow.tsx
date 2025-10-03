import { useFile } from '@/contexts/FileContext';
import { DirectoryFileType, FileItem, SingleFileType } from '../Files/types';
import { usePath } from '@/contexts/PathContext';
import { useRouter } from 'next/router';

interface FileRowProps {
  file: FileItem;
}

export default function FileRow({ file }: FileRowProps) {
  const { open } = useFile();
  const { push, path } = usePath();
  const router = useRouter();

  const buildRoute = (segments: string[]) => {
    const encoded = segments.map(segment => encodeURIComponent(segment));
    return `/${encoded.join('/')}`;
  };

  const currentDirectorySegments = path.slice(1).map(dir => dir.name);
  const currentPathname = router.asPath.split(/[?#]/)[0];

  switch (file.type.kind) {
    case 'single':
      return <tr
        className="cursor-pointer hover:opacity-90 border-gruvbox-bg2 hover:bg-gruvbox-bg2 active:bg-gruvbox-bg4"
        onClick={() => {
          const targetPath = buildRoute([...currentDirectorySegments, file.type.name]);
          if (currentPathname !== targetPath) {
            router.push(targetPath, undefined, { shallow: true });
          }
          open(file.type as SingleFileType);
        }}>
        <td
          className="select-none px-4 py-2 whitespace-nowrap"
          style={{ color: file.color }}>
          <file.icon className='mr-3 inline align-middle' />
          {file.type.name}
        </td>
        <td className="select-none hidden md:table-cell px-4 py-2 whitespace-nowrap text-gruvbox-fg3">{file.type.dateModified}</td>
        <td className="select-none hidden sm:table-cell px-4 py-2 whitespace-nowrap text-right text-gruvbox-fg3">{file.type.description}</td>
      </tr >

    case 'link':
      const url = file.type.url;
      return <tr
        className="cursor-pointer hover:opacity-90 border-gruvbox-bg2 hover:bg-gruvbox-bg2 active:bg-gruvbox-bg4"
        onClick={() => {
          window.open(url, '_blank', 'noopener,noreferrer');
        }}>
        <td
          className="select-none px-4 py-2 whitespace-nowrap"
          style={{ color: file.color }}>
          <file.icon className='mr-3 inline align-middle' />
          {file.type.name}
        </td>
        <td className="select-none hidden md:table-cell px-4 py-2 whitespace-nowrap text-gruvbox-fg3">{file.type.dateModified}</td>
        <td className="select-none hidden sm:table-cell px-4 py-2 whitespace-nowrap text-right text-gruvbox-fg3">{file.type.description}</td>
      </tr >

    case 'directory':
      return <tr
        className="cursor-pointer hover:opacity-90 border-gruvbox-bg2 hover:bg-gruvbox-bg2 active:bg-gruvbox-bg4"
        onClick={() => {
          const targetPath = buildRoute([...currentDirectorySegments, file.type.name]);
          if (currentPathname !== targetPath) {
            router.push(targetPath, undefined, { shallow: true });
          }
          push(file.type as DirectoryFileType);
        }}>
        <td className="select-none px-4 py-2 whitespace-nowrap text-gruvbox-blue">
          <file.icon className='mr-3 inline' />
          {file.type.name}
        </td>
        <td className="select-none hidden md:table-cell px-4 py-2 whitespace-nowrap text-gruvbox-fg3">{file.type.dateModified}</td>
        <td className="select-none hidden sm:table-cell px-4 py-2 whitespace-nowrap text-right text-gruvbox-fg3">{file.type.description}</td>
      </tr >
  }
}
