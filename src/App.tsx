import * as React from 'react';
import Table from './components/Table';
import './style.css';
import { data } from './data';
import { useForm } from 'react-hook-form';
import Input from './components/Input';
import { IData } from './interface/interface';

export default function App() {
  const {
    register,
    control,
    formState: { errors },
  } = useForm({ mode: 'onTouched' });

  const [searchTerm, setSearchTerm] = React.useState<any>('');
  const [dataTemp, setDataTemp] = React.useState<IData[]>(data);

  const handleSwitchChange = (item: IData) => {
    console.log(item);
  };

  return (
    <div>
      <Input
        type={'text'}
        setSearchTerm={setSearchTerm}
        control={control}
        id={'search'}
        label={'Search'}
      />
      <Table
        onChange={handleSwitchChange}
        data={dataTemp
          .filter((val: IData) => {
            if (
              val?.name
                ?.toLocaleLowerCase()
                ?.includes(searchTerm?.toLocaleLowerCase()) ||
              `${val?.age}`
                ?.toLocaleLowerCase()
                ?.includes(searchTerm?.toLocaleLowerCase())
            ) {
              return true;
            } else if (
              [undefined, null, ''].includes(searchTerm?.toLocaleLowerCase())
            ) {
              return true;
            }
          })
          .map((item: IData) => {
            return item;
          })}
        rowsPerPage={15}
      />
    </div>
  );
}
