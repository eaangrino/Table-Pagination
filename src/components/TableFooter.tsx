import React, { useEffect } from 'react';
import { IData } from '../interface/interface';

const TableFooter = ({
  range,
  setPage,
  page,
  slice,
}: {
  range: number[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  slice: IData[];
}) => {
  const goToPreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const goToNextPage = () => {
    if (page < range.length) {
      setPage(page + 1);
    }
  };
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);
  return (
    <div className={'pagination'}>
      <button onClick={goToPreviousPage} disabled={page === 1}>
        Previous
      </button>
      <span>
        Page {page} of {range.length}
      </span>
      <button onClick={goToNextPage} disabled={page === range.length}>
        Next
      </button>
    </div>
  );
};

export default TableFooter;
