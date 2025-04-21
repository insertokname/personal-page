import FolderIcon from '@/components/icons/FolderIcon';
import { FileItem } from '../types';
import { GithubLink } from './GithubLink';

export const LinksDirectory = new FileItem({
    type: {
        name: "Links",
        kind: 'directory',
        description: 'File folder',
        children: [GithubLink],
    },
    icon: FolderIcon
});