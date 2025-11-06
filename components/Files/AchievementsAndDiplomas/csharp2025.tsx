import React from 'react';
import { FileItem } from '../types';
import TrophyIcon from '@/components/icons/TrophyIcon';
import { ZoomableImage } from '../ZoomableImage';


const Csharp2025Content: React.FC = () => (
    <ZoomableImage
        draggable={false}
        src={'/awards/2025csharp.webp'}
        alt={'C# Olympiad 2025 diploma'}
    />
);

export const Csharp2025 = new FileItem({
    type: {
        name: 'honorable mention (12th) - C# Olympiad 2025',
        kind: 'single',
        description: 'Picture',
        content: Csharp2025Content,
        dateModified: '16 May 2025',
    },
    icon: TrophyIcon,
});