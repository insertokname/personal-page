import { usePath } from '@/contexts/PathContext';
import FileListHeader from './FileListHeader';
import FileRow from './FileRow';

export default function FileList() {
  const { path, pop } = usePath();

  const files = path.at(-1)!.children;

  const sortedFiles = [...files].sort((a, b) => {
    const aIsDir = a.type.kind == 'directory';
    const bIsDir = b.type.kind == 'directory';;
    if (aIsDir !== bIsDir) {
      return aIsDir ? -1 : 1;
    }
    return a.type.name.localeCompare(b.type.name);
  });

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <FileListHeader />
        <tbody className="divide-y">
          {path.length>1 && <tr
            className="cursor-pointer hover:opacity-90 border-gruvbox-bg2 hover:bg-gruvbox-bg2 active:bg-gruvbox-bg4"
            onClick={() => pop()}>
            <td className="select-none px-4 py-2 whitespace-nowrap text-gruvbox-blue">
              ..
            </td>
            <td className="select-none hidden md:table-cell px-4 py-2 whitespace-nowrap text-gruvbox-fg3"></td>
            <td className="select-none hidden sm:table-cell px-4 py-2 whitespace-nowrap text-right text-gruvbox-fg3"></td>
          </tr >}
          {sortedFiles.map((file) => (
            <FileRow key={file.key} file={file} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
