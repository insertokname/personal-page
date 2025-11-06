import React from 'react';
import { FileItem } from '../types';
import TrophyIcon from '@/components/icons/TrophyIcon';
import { ZoomableImage } from '../ZoomableImage';


const Infoeducatie2025Content: React.FC = () => (
    <ZoomableImage
        draggable={false}
        src={'/awards/2025infoedu.webp'}
        alt="O.D.I.C.D 2025 diploma"
    />
);

export const Infoeducatie2025 = new FileItem({
    type: {
        name: '1st place - O.D.I.C.D 2025',
        kind: 'single',
        description: 'Picture',
        content: Infoeducatie2025Content,
        dateModified: '02 Aug 2025',
    },
    icon: TrophyIcon,
});