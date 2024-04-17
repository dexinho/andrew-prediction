type TableProps = {
  title: string;
  headers: string[];
  rows: (number | string | null)[][];
};

const Table = ({ title, headers, rows }: TableProps) => {
  return (
    <div className="flex gap-4 flex-col">
      <h1 className="text-center text-3xl font-bold">{title}</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded shadow-sm">
        <thead className="bg-gray-100">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((text, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500 ${
                    rowIndex % 2 ? "bg-slate-200" : "bg-white"
                  }`}
                >
                  {text}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
