import React, { ChangeEvent } from 'react';
import { Controller, Control } from 'react-hook-form';

interface IInput {
  id: string;
  type: string;
  label: string;
  control: Control;
  setSearchTerm?: any;
}

export default function Input({
  id,
  type,
  label,
  control,
  setSearchTerm,
}: IInput) {
  return (
    <Controller
      control={control}
      name={id}
      render={({ field: { onChange, onBlur, value, ref } }) => {
        return (
          <input
            id={id}
            type={type}
            placeholder={label}
            onChange={(onChangeInternal) => {
              setSearchTerm(onChangeInternal.target.value);
              onChange(onChangeInternal);
            }}
            onBlur={onBlur}
            value={value}
            ref={ref}
          />
        );
      }}
    />
  );
}
