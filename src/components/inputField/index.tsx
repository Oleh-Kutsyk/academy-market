import React from 'react';
import * as Styled from './styled';
import { OutlinedTextFieldProps } from '@mui/material/TextField/TextField';

export interface IInputField
  extends Omit<OutlinedTextFieldProps, 'variant' | 'helperText'> {
  helperText?: string;
}

// eslint-disable-next-line react/display-name
export const InputField = React.forwardRef<HTMLInputElement, IInputField>(
  (props, ref) => {
    return (
      <Styled.Root>
        <Styled.Input fullWidth variant='outlined' {...props} ref={ref} />
      </Styled.Root>
    );
  }
);
