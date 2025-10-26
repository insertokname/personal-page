import FolderIcon from '@/components/icons/FolderIcon';
import { FileItem } from '../types';
import { SnekFile } from './SnekFile';
import { DepyLink } from './DepyLink';
import { PbinfoCliLink } from './PbinfoCliLink';
import { PROHackLink } from './PROHackLink';

export const ProjectsDirectory = new FileItem({
    type: {
        name: "Projects",
        kind: 'directory',
        description: 'File folder',
        children: [
            PROHackLink,
            DepyLink,
            PbinfoCliLink,
            SnekFile
        ],
    },
    icon: FolderIcon
});