import React from 'react';
import {
  FieldValues,
  Control,
  Path,
  ControllerProps,
  Controller as RHFController,
} from 'react-hook-form';

import { ISelectField, SelectField } from '../../selectField';
import { IInputField, InputField } from '../../inputField';

type TInputType = 'inputField';
type TSelectType = 'selectField';

type TCustomChangeValue = string | number | Date | Array<string> | boolean;

interface ICommonProps<TFormValues> {
  control: Control<TFormValues>;
  name: Path<TFormValues>;
  onCustomChange?: (value: TCustomChangeValue, name: string) => void;
}

interface IInput<TFormValues>
  extends Omit<IInputField, 'name'>,
    ICommonProps<TFormValues> {
  type: TInputType;
}

interface ISelect<TFormValues>
  extends Omit<ISelectField, 'name'>,
    ICommonProps<TFormValues> {
  type: TSelectType;
}

type TFormFiled<T extends FieldValues> = IInput<T> | ISelect<T>;

export const Controller = <TFormValues extends FieldValues>({
  type,
  control,
  onCustomChange,
  ...rest
}: TFormFiled<TFormValues>) => {
  const render: ControllerProps<TFormValues, Path<TFormValues>>['render'] = ({
    field,
    fieldState: { error },
  }) => {
    const fieldProps = {
      ...field,
      helperText: rest.helperText || error?.message,
      error: !!error?.message,
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (event: any) => {
      onCustomChange && onCustomChange(event.target.value, event.target.name);
      field.onChange(event);
    };

    switch (type) {
      case 'selectField':
        return (
          <SelectField
            {...(rest as ISelectField)}
            {...fieldProps}
            onChange={handleChange}
          />
        );
      case 'inputField':
      default:
        return (
          <InputField
            {...(rest as IInputField)}
            {...fieldProps}
            onChange={handleChange}
          />
        );
    }
  };

  return (
    <RHFController<TFormValues, Path<TFormValues>>
      control={control}
      name={rest.name}
      render={render}
    />
  );
};
