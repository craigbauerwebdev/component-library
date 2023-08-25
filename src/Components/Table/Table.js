function Table({ data, config, keyFn }) {
  const renederedHeaders = config.map((col) => {
    return <th key={col.label}>{col.label}</th>;
  });
  const renederedRows = data.map((row) => {
    return (
      <tr key={keyFn(row)}>
        {config.map((col) => {
          return (
            <td key={col.label} className="p-6">
              {col.render(row)}
            </td>
          );
        })}
      </tr>
    );
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renederedHeaders}</tr>
      </thead>
      <tbody>{renederedRows}</tbody>
    </table>
  );
}

export default Table;
