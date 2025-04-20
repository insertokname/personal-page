import React from 'react';
import { FileItem } from '.';
import FileIcon from '../icons/FileIcon';

export class MeFileContent extends React.Component {
    render() {
        return <div>
            <h1>Hello! I'm Ilie a developer based in romania! Hello! I'm Ilie a developer based in romania! Hello! I'm Ilie a developer based in romania!Hello! I'm Ilie a developer based in romania! Hello! I'm Ilie a developer based in romania!</h1>
        </div>
    }
}

export const MeFile: FileItem = {
    name: 'me.txt',
    type: 'Text Document',
    dateModified: '2023-10-26 10:05 AM',
    icon: FileIcon,
    content: MeFileContent
};