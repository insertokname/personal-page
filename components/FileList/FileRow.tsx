import { useFile } from '@/contexts/FileContext';
import { DirectoryFileType, FileItem, SingleFileType } from '../Files/types';
import { usePath } from '@/contexts/PathContext';

interface FileRowProps {
  file: FileItem;
}

export default function FileRow({ file }: FileRowProps) {
  const { open } = useFile();
  const { push } = usePath();

  switch (file.type.kind) {
    case 'single':
      return <tr
        className="cursor-pointer hover:opacity-90 border-gruvbox-bg2 hover:bg-gruvbox-bg2 active:bg-gruvbox-bg4"
        onClick={() => open(file.type as SingleFileType)}>
        <td className="select-none px-4 py-2 whitespace-nowrap">
          <file.icon className='mr-3 inline' />
          {file.type.name}
        </td>
        <td className="select-none hidden md:table-cell px-4 py-2 whitespace-nowrap text-gruvbox-fg3">{file.type.dateModified}</td>
        <td className="select-none hidden sm:table-cell px-4 py-2 whitespace-nowrap text-right text-gruvbox-fg3">{file.type.description}</td>
      </tr >

    case 'directory':
      return <tr
        className="cursor-pointer hover:opacity-90 border-gruvbox-bg2 hover:bg-gruvbox-bg2 active:bg-gruvbox-bg4"
        onClick={() => push(file.type as DirectoryFileType)}>
        <td className="select-none px-4 py-2 whitespace-nowrap text-gruvbox-blue">
          <file.icon className='mr-3 inline' />
          {file.type.name}
        </td>
        <td className="select-none hidden md:table-cell px-4 py-2 whitespace-nowrap text-gruvbox-fg3"></td>
        <td className="select-none hidden sm:table-cell px-4 py-2 whitespace-nowrap text-right text-gruvbox-fg3">{file.type.description}</td>
      </tr >
  }
}
