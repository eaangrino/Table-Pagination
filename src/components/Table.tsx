import React, { useState } from 'react';
import { IData } from '../interface/interface';
import useTable from './hook/useTable';
import TableFooter from './TableFooter';

const Table = ({
  data,
  rowsPerPage,
}: {
  data: IData[];
  rowsPerPage: number;
}) => {
  const [page, setPage] = useState<number>(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
      <table className={`table-container`}>
        <thead>
          <tr className={``}>
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
