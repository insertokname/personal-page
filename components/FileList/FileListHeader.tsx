
export default function FileListHeader() {
  return (
    <thead className="border-b border-gruvbox-bg2">
      <tr>
        <th className="px-4 py-2 text-left text-xs uppercase tracking-wider w-1/2 text-gruvbox-blue">Name</th>
        <th className="px-4 py-2 text-left text-xs uppercase tracking-wider text-gruvbox-blue">Date modified</th>
        <th className="px-4 py-2 text-left text-xs uppercase tracking-wider text-gruvbox-blue">Type</th>
        <th className="px-4 py-2 text-right text-xs uppercase tracking-wider text-gruvbox-blue">Size</th>
      </tr>
    </thead>
  );
}
