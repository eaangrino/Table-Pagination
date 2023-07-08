import * as React from 'react';
import Table from './components/Table';
import './style.css';
import { data } from './data';

export default function App() {
  return (
    <div>
      <Table data={data} rowsPerPage={10} />
    </div>
  );
}
