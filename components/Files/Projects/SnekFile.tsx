import React from 'react';
import { FileItem } from '../types';
import TerminalIcon from '@/components/icons/TerminalIcon';

export class SnekFileContent extends React.Component {
    state = {
        iframeWidth: typeof window !== 'undefined' && window.innerWidth < 768 ? window.innerWidth * 0.75 : 600
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    handleResize = () => {
        this.setState({ iframeWidth: window.innerWidth < 768 ? window.innerWidth * 0.75 : 600 });
    };

    render() {
        return (
            <div className='flex justify-center'>
                <iframe
                    src='https://insertokname.github.io/snek'
                    height={350}
                    width={this.state.iframeWidth}
                />
            </div>
        );
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