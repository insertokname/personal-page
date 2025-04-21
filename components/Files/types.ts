import { v4 as uuidv4 } from 'uuid';
import IconProps from '../icons/IconProps';

export interface DirectoryFileType {
    name: string
    kind: "directory"
    description: "File folder"
    children: FileItem[]
}

export interface SingleFileType {
    name: string
    kind: "single"
    description: string
    content: React.ComponentType
    dateModified: string
    width?: number
}

export interface LinkFileType {
    name: string
    kind: "link"
    description: string
    url: string
}

export type FileType = DirectoryFileType | SingleFileType | LinkFileType;

export class FileItem {
    key: string;
    type: FileType;
    color: string;
    icon: React.ComponentType<IconProps>;
    constructor(params: { type: FileType, icon: React.ComponentType<IconProps>, color?: string }) {
        this.key = uuidv4();
        this.type = params.type;
        this.icon = params.icon;
        this.color = params.color ?? "var(--color-gruvbox-fg)"
    }
}
