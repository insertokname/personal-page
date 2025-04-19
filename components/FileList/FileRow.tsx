import { File } from '@/types';
import { gruvbox } from '@/styles/theme';

interface FileRowProps {
  file: File;
}

export default function FileRow({ file }: FileRowProps) {
  return (
    <tr 
      className="cursor-pointer hover:opacity-90" 
      style={{ 
        backgroundColor: gruvbox.bg1, 
        color: gruvbox.fg,
        borderBottom: `1px solid ${gruvbox.bg3}`
      }}
    >
      <td className="px-4 py-2 whitespace-nowrap" style={{ color: file.type.includes('folder') ? gruvbox.brightBlue : gruvbox.fg }}>
        <span className="mr-2">{file.icon}</span>
        {file.name}
      </td>
      <td className="px-4 py-2 whitespace-nowrap" style={{ color: gruvbox.fg3 }}>{file.dateModified}</td>
      <td className="px-4 py-2 whitespace-nowrap" style={{ color: gruvbox.fg3 }}>{file.type}</td>
      <td className="px-4 py-2 whitespace-nowrap text-right" style={{ color: gruvbox.fg3 }}>{file.size}</td>
    </tr>
  );
}
