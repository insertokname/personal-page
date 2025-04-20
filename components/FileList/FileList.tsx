import { File } from '@/types/File';
import FileListHeader from './FileListHeader';
import FileRow from './FileRow';

export interface FileListProps {
  files: File[];
}

export default function FileList({ files }: FileListProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <FileListHeader />
        <tbody className="divide-y">
          {files.map((file) => (
            <FileRow key={file.name} file={file} />
          ))}
        </tbody>
      </table>
    </div >
  );
}
