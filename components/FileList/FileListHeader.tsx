
export default function FileListHeader() {
  return (
    <thead className="border-b border-gruvbox-bg2">
      <tr>
        <th className="select-none px-4 py-2 text-left text-xs uppercase tracking-wider w-5/12 text-gruvbox-fg">Name</th>
        <th className="select-none hidden md:table-cell px-4 py-2 text-left text-xs uppercase tracking-wider text-gruvbox-fg3">Date modified</th>
        <th className="select-none hidden sm:table-cell px-4 py-2 text-right text-xs uppercase tracking-wider text-gruvbox-fg3">Info</th>
      </tr>
    </thead>
  );
}
