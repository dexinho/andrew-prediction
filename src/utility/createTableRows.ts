const createTableRows = <T extends { [s: string]: string | number | null }>(
  data: T[] | null
) => {
  let rows: (number | string | null)[][];

  if (data) rows = data.map((obj) => Object.values(obj));
  else return [];

  return rows;
};

export default createTableRows;
