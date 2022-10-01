import React from 'react';
import * as Styled from './styled';

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from '@mui/material';

export interface ISelectField
  extends Omit<SelectProps, 'variant' | 'helperText'> {
  helperText?: string;
  options: Array<string>;
}

// eslint-disable-next-line react/display-name
export const SelectField = React.forwardRef<HTMLSelectElement, ISelectField>(
  (props, ref) => {
    return (
      <Styled.Root>
        <FormControl fullWidth>
          <InputLabel>{props.label}</InputLabel>
          <Select {...props} ref={ref}>
            {props.options.length &&
              props.options.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Styled.Root>
    );
  }
);
