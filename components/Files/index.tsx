import IconProps from "../icons/IconProps";
import { MeFile } from "./MeFile";

export interface FileItem {
    name: string;
    type: string;
    dateModified: string;
    width?: number;
    icon: React.ComponentType<IconProps>;
    content: React.ComponentType;
}

export default function getRoot(): FileItem[] {
    return [
        MeFile
        // { name: 'Documents', type: 'File folder', dateModified: '2023-10-26 10:00 AM', icon: FolderIcon, content: MeFile },
        // { name: 'Images', type: 'File folder', dateModified: '2023-10-25 03:15 PM', icon: FolderIcon, content: MeFile },
        // { name: 'Projects', type: 'File folder', dateModified: '2023-10-26 09:30 AM', icon: FolderIcon, content: MeFile },
        // { name: 'resume_final.pdf', type: 'PDF Document', dateModified: '2023-10-20 11:20 AM', icon: FileIcon, content: MeFile },
        // { name: 'notes.txt', type: 'Text Document', dateModified: '2023-10-26 10:05 AM', icon: FileIcon, content: MeFile },
        // { name: 'app-screenshot.png', type: 'PNG image', dateModified: '2023-10-24 05:45 PM', icon: PhotoIcon, content: MeFile },
    ] as FileItem[]
};
