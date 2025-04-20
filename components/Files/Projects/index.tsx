import FolderIcon from '@/components/icons/FolderIcon';
import { FileItem } from '../types';

export const ProjectsDirectory = new FileItem({
    type: {
        name: "Projects",
        kind: 'directory',
        description: 'File folder',
        children: [],
    },
    icon: FolderIcon
});