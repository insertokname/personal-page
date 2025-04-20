import React from 'react';
import FileIcon from '../icons/FileIcon';
import { FileItem } from './types';

export class MeFileContent extends React.Component {
    render() {
        return <div>
            <h1>Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test</h1>
        </div>
    }
}

export const MeFile = new FileItem({
    type: {
        name: 'me.txt',
        kind: 'single',
        description: 'Text Document',
        content: MeFileContent,
        dateModified: '2023-10-26 10:05 AM',
    },
    icon: FileIcon,
});