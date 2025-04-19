export interface File {
  id: number;
  name: string;
  type: string;
  dateModified: string;
  size: string;
  icon: string;
}

export interface FileListProps {
  files: File[];
}
