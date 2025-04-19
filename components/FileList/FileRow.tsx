import { File } from '@/types/File';

interface FileRowProps {
  file: File;
}

export default function FileRow({ file }: FileRowProps) {
  return (
    <tr className="cursor-pointer hover:opacity-90 border-gruvbox-bg2 hover:bg-gruvbox-bg2 active:bg-gruvbox-bg4">
      <td className={`select-none px-4 py-2 whitespace-nowrap ${file.type.includes("folder") ? "text-gruvbox-blue" : ""}`}>
        <file.icon className='mr-3 inline' />
        {file.name}
      </td>
      <td className="select-none hidden md:table-cell px-4 py-2 whitespace-nowrap text-gruvbox-fg3">{file.dateModified}</td>
      <td className="select-none hidden sm:table-cell px-4 py-2 whitespace-nowrap text-right text-gruvbox-fg3">{file.type}</td>
    </tr >
  );
}
