import React, { useEffect } from 'react';

const TableFooter = ({
  range,
  setPage,
  page,
  slice,
}: {
  range: any;
  setPage: any;
  page: number;
  slice: any;
}) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);
  return (
    <div className={''}>
      {range.map((item: any, index: number) => (
        <button key={index} className={``} onClick={() => setPage(item)}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default TableFooter;
