import FolderIcon from '@/components/icons/FolderIcon';
import { FileItem } from '../types';
import { Infoeducatie2025 } from './infoeducatie2025';
import { Infoeducatie2024 } from './infoeducatie2024';
import { Csharp2025 } from './csharp2025';
import { Interact2025 } from './interact2025';

export const AchievementsAndDiplomasDirectory = new FileItem({
    type: {
        name: "Achievements and Diplomas",
        kind: 'directory',
        description: 'File folder',
        children: [
            Infoeducatie2025,
            Csharp2025,
            Interact2025,
            Infoeducatie2024,
        ],
    },
    icon: FolderIcon
});