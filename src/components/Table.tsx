type TableProps = {
  headers: string[];
  rows: (number | string)[][];
};

const Table = ({ headers, rows }: TableProps) => {
  return (
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
                className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500"
              >
                {text}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default Table;
