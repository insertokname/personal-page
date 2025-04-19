import { File } from '@/types';

export async function getFiles(): Promise<File[]> {
  // In a real app, this would be an API call
  // For this example, we'll use mock data
  const filesData: File[] = [
    { id: 1, name: 'Documents', type: 'File folder', dateModified: '2023-10-26 10:00 AM', size: '', icon: '📁' },
    { id: 2, name: 'Images', type: 'File folder', dateModified: '2023-10-25 03:15 PM', size: '', icon: '📁' },
    { id: 3, name: 'Projects', type: 'File folder', dateModified: '2023-10-26 09:30 AM', size: '', icon: '📁' },
    { id: 4, name: 'resume_final.pdf', type: 'PDF Document', dateModified: '2023-10-20 11:20 AM', size: '1.2 MB', icon: '📄' },
    { id: 5, name: 'notes.txt', type: 'Text Document', dateModified: '2023-10-26 10:05 AM', size: '2 KB', icon: '📄' },
    { id: 6, name: 'app-screenshot.png', type: 'PNG image', dateModified: '2023-10-24 05:45 PM', size: '350 KB', icon: '🖼️' },
  ];
  
  // Simulate server delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return filesData;
}
