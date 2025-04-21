import React from 'react';
import { FileItem } from '../types';
import TerminalIcon from '@/components/icons/TerminalIcon';

export class SnekFileContent extends React.Component {
    render() {
        return <div className='flex justify-center'>
            <iframe src='https://insertokname.github.io/snek' height={350} width={600}></iframe>
        </div>
    }
}

export const SnekFile = new FileItem({
    type: {
        width: 700,
        name: 'snek',
        kind: 'single',
        description: 'Executable',
        content: SnekFileContent,
        dateModified: '2023-10-26 10:05 AM',
    },
    icon: TerminalIcon,
    color: "var(--color-gruvbox-green)"
});