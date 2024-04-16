type TableProps = {
  headers: string[];
  rows: (number | string)[][];
};

const Table = ({ headers, rows }: TableProps) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr>
            {row.map((text) => (
              <td>{text}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
