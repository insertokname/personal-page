import { File } from '@/types';

interface FileRowProps {
  file: File;
}

export default function FileRow({ file }: FileRowProps) {
  return (
    <tr className="cursor-pointer hover:opacity-90 border-gruvbox-bg2">
      <td className={`px-4 py-2 whitespace-nowrap ${file.type.includes("folder") ? "text-gruvbox-blue" : ""}`}>
        <span className="mr-2">{file.icon}</span> {file.name}
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-gruvbox-fg3">{file.dateModified}</td>
      <td className="px-4 py-2 whitespace-nowrap text-gruvbox-fg3">{file.type}</td>
      <td className="px-4 py-2 whitespace-nowrap text-right text-gruvbox-fg3">{file.size}</td>
    </tr>
  );
}
