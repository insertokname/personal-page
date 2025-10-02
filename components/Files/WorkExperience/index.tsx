import FolderIcon from '@/components/icons/FolderIcon';
import { FileItem } from '../types';
import { PartiaFile as PartiaLink } from './PartiaLink';

export const WorkExperience = new FileItem({
    type: {
        name: "WorkExperience",
        kind: 'directory',
        description: 'File folder',
        children: [PartiaLink],
    },
    icon: FolderIcon
});