import React from 'react';
import FileIcon from '../icons/FileIcon';
import { FileItem } from './types';
import NixosIcon from '../icons/NixosIcon';

export class MeFileContent extends React.Component {
    render() {
        return <div>
            <h1>Hello!</h1>
            <br />
            <p>I am Ilie, a developer based in romania!</p>
            <p>I have experience with c/c++ and rust, I also dabble in c# dart python JS/TS </p>
            <br />
            <p>Proud <NixosIcon className='inline align-middle' /> NixOS enjoyer </p>
        </div>
    }
}

export const MeFile = new FileItem({
    type: {
        name: 'me.txt',
        kind: 'single',
        description: 'Text Document',
        content: MeFileContent,
        dateModified: '18 Apr 2025',
    },
    icon: FileIcon,
});