import React, { useState } from 'react';
import useTable from './hook/useTable';
import TableFooter from './TableFooter';

const Table = ({
  data,
  rowsPerPage,
  children,
}: {
  data: any[];
  rowsPerPage: number;
  children: React.ReactNode;
}) => {
  const [page, setPage] = useState<number>(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
      <table className={``}>
        <thead className={``}>
          <tr>
            <th className={``}>Name</th>
            <th className={``}>Age</th>
            <th className={``}>Genre</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((item, index) => (
            <tr className={``} key={index}>
              <td className={``}>{item.name}</td>
              <td className={``}>{item.age}</td>
              <td className={``}>{item.genre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
