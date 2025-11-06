import React from 'react';
import { FileItem } from '../types';
import TrophyIcon from '@/components/icons/TrophyIcon';
import { ZoomableImage } from '../ZoomableImage';


const Interact2025Content: React.FC = () => (
    <ZoomableImage
        draggable={false}
        src={'/awards/2025interact.webp'}
        alt="interact 2025 diploma"
    />
);

export const Interact2025 = new FileItem({
    type: {
        name: 'Volunteership at Interact',
        kind: 'single',
        description: 'Picture',
        content: Interact2025Content,
        dateModified: '01 Jul 2025',
    },
    icon: TrophyIcon,
});