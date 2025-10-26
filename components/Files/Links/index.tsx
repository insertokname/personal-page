import FolderIcon from '@/components/icons/FolderIcon';
import { FileItem } from '../types';
import { GithubLink } from './GithubLink';
import { MailLink } from './WorkMailLink';

export const LinksDirectory = new FileItem({
    type: {
        name: "Links",
        kind: 'directory',
        description: 'File folder',
        children: [
            GithubLink,
            MailLink,
        ],
    },
    icon: FolderIcon
});