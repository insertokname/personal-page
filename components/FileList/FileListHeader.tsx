import { gruvbox } from '@/styles/theme';

export default function FileListHeader() {
  return (
    <thead style={{ backgroundColor: gruvbox.bg2, borderColor: gruvbox.bg3 }} className="border-b">
      <tr>
        <th className="px-4 py-2 text-left text-xs uppercase tracking-wider w-1/2" style={{ color: gruvbox.brightAqua }}>Name</th>
        <th className="px-4 py-2 text-left text-xs uppercase tracking-wider" style={{ color: gruvbox.brightAqua }}>Date modified</th>
        <th className="px-4 py-2 text-left text-xs uppercase tracking-wider" style={{ color: gruvbox.brightAqua }}>Type</th>
        <th className="px-4 py-2 text-right text-xs uppercase tracking-wider" style={{ color: gruvbox.brightAqua }}>Size</th>
      </tr>
    </thead>
  );
}
