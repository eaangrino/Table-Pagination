import React, { useState } from 'react';
import { IData } from '../interface/interface';
import useTable from './../hook/useTable';
import Switch from './Switch';
import TableFooter from './TableFooter';

export default function Table({
  data,
  rowsPerPage,
  onChange,
}: {
  data: IData[];
  rowsPerPage: number;
  onChange: any;
}) {
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
            <th className={``}>Checked</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((item, index) => (
            <tr className={``} key={index}>
              <td className={``}>{item.name}</td>
              <td className={``}>{item.age}</td>
              <td className={``}>{item.genre}</td>
              <td className={``}>
                <Switch item={item} onChange={onChange} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
