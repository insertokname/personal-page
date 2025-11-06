import React from 'react';
import { FileItem } from '../types';
import TrophyIcon from '@/components/icons/TrophyIcon';
import { ZoomableImage } from '../ZoomableImage';


const Infoeducatie2024Content: React.FC = () => (
    <ZoomableImage
        draggable={false}
        src={'/awards/2024infoedu.webp'}
        alt="O.D.I.C.D 2024 diploma"
    />
);

export const Infoeducatie2024 = new FileItem({
    type: {
        name: 'honorable mention (6th place) - O.D.I.C.D 2024',
        kind: 'single',
        description: 'Picture',
        content: Infoeducatie2024Content,
        dateModified: '02 Aug 2024',
    },
    icon: TrophyIcon,
});