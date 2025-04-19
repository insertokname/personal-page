import { GetServerSideProps } from 'next';
import FileList from '@/components/FileList';
import { FileListProps } from '@/types/File';
import { getFiles } from '@/lib/data';

export default function Home({ files }: FileListProps) {
  return (
    <div className="p-4 sm:p-8 min-h-screen bg-gruvbox-bg">
      <h1 className="mb-4 text-2xl">
        File Explorer
      </h1>
      <FileList files={files} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<FileListProps> = async () => {
  const files = await getFiles();

  return {
    props: {
      files,
    },
  };
};
