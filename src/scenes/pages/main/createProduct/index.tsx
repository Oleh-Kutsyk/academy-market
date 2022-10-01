import React from 'react';

import { useAppDispatch } from '../../../../utils';
import { addProductThunk } from '../../../../stores';
import { schema } from './schema';

import { PageTitle } from '../../../../components/pageTitle';
import {
  Controller,
  Form,
  TOnSubmitFrom,
} from '../../../../components/reactHookForm';

import * as Styled from './styled';

type TInitialState = {
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
};

const defaultValues = {
  title: '',
  description: '',
  price: '',
  image: '',
  category: '',
};

export const CreateProduct = () => {
  const dispatch = useAppDispatch();

  const save: TOnSubmitFrom<TInitialState> = (reset, data) => {
    dispatch(addProductThunk(data));
    reset(defaultValues);
  };

  return (
    <React.Fragment>
      <PageTitle title='Add product' />
      <Form<TInitialState>
        onSubmit={save}
        defaultValues={defaultValues}
        validationSchema={schema}
      >
        {({ register, control }) => (
          <>
            <Controller
              type='inputField'
              label='Title'
              control={control}
              fullWidth
              {...register('title')}
            />

            <Controller
              type='inputField'
              label='Description'
              control={control}
              fullWidth
              rows={6}
              multiline
              {...register('description')}
            />
            <Controller
              type='inputField'
              label='Image'
              control={control}
              fullWidth
              {...register('image')}
            />
            <Controller
              type='inputField'
              label='Price'
              control={control}
              fullWidth
              {...register('price')}
            />
            <Controller
              type='selectField'
              label='Category'
              control={control}
              fullWidth
              options={[
                'electronics',
                'jewelery',
                `men's clothing`,
                `women's clothing`,
              ]}
              {...register('category')}
            />
            <Styled.Add type='submit' fullWidth variant='contained'>
              Add
            </Styled.Add>
          </>
        )}
      </Form>
    </React.Fragment>
  );
};
