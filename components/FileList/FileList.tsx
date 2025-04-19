import { FileListProps } from '@/types';
import FileListHeader from './FileListHeader';
import FileRow from './FileRow';
import { gruvbox } from '@/styles/theme';

export default function FileList({ files }: FileListProps) {
  return (
    <div className="overflow-x-auto" style={{ backgroundColor: gruvbox.bg0 }}>
      <table className="min-w-full text-sm" style={{ color: gruvbox.fg }}>
        <FileListHeader />
        <tbody className="divide-y" style={{ backgroundColor: gruvbox.bg1, borderColor: gruvbox.bg3 }}>
          {files.map((file) => (
            <FileRow key={file.id} file={file} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
