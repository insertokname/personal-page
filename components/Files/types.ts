import { v4 as uuidv4 } from 'uuid';
import IconProps from '../icons/IconProps';

interface BaseFile {
    dateModified?: string
}

export interface DirectoryFileType extends BaseFile {
    name: string
    kind: "directory"
    description: string
    children: FileItem[]
}

export interface SingleFileType extends BaseFile {
    name: string
    kind: "single"
    description: string
    content: React.ComponentType
    width?: number
}

export interface LinkFileType extends BaseFile {
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
