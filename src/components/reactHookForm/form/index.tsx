import React from 'react';
import { AnyObjectSchema } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  useForm,
  UseFormReturn,
  FieldValues,
  DeepPartial,
  UseFormReset,
} from 'react-hook-form';

import * as Styled from './styled';

export type TOnSubmitFrom<TFormValues> = (
  reset: UseFormReset<TFormValues>,
  values: TFormValues
) => void;

type FormProps<TFormValues> = {
  onSubmit: TOnSubmitFrom<TFormValues>;
  defaultValues: DeepPartial<TFormValues>;
  validationSchema?: AnyObjectSchema;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
};

export const Form = <TFormValues extends FieldValues>({
  onSubmit,
  defaultValues,
  validationSchema,
  children,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({
    resolver: validationSchema ? yupResolver(validationSchema) : undefined,
    defaultValues,
  });
  console.log(methods.reset);
  const handleSubmit = () => (values: TFormValues) => {
    onSubmit(methods.reset, values);
  };
  return (
    <Styled.Form onSubmit={methods.handleSubmit(handleSubmit())}>
      {children(methods)}
    </Styled.Form>
  );
};
