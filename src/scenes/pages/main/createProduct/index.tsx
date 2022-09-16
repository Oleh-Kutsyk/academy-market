import React, { useState } from 'react';
import { PageTitle } from '../../../../components/pageTitle';

import * as Styled from './styled';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { IProductBE } from '../../../../api';
import { useAppDispatch } from '../../../../utils';
import { addProductThunk } from '../../../../stores';

export const CreateProduct = () => {
  const dispatch = useAppDispatch();
  const [product, setProduct] = useState<IProductBE>({
    title: '',
    description: '',
    price: '',
    image: '',
    category: '',
  });

  const handleChangeCategory = (event: SelectChangeEvent) => {
    setProduct({ ...product, category: event.target.value });
  };

  const handleChangeProduct = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const save = () => {
    dispatch(addProductThunk(product));
  };

  return (
    <React.Fragment>
      <PageTitle title='Add product' />
      <Styled.Root>
        <Styled.Input
          onChange={handleChangeProduct}
          fullWidth
          value={product.title}
          name='title'
          label='Title'
          variant='outlined'
        />
        <Styled.Input
          onChange={handleChangeProduct}
          fullWidth
          value={product.description}
          name='description'
          label='Description'
          variant='outlined'
          rows={6}
          multiline
        />
        <Styled.Input
          onChange={handleChangeProduct}
          fullWidth
          value={product.price}
          name='price'
          label='Price'
          variant='outlined'
        />
        <Styled.Input
          onChange={handleChangeProduct}
          fullWidth
          value={product.image}
          name='image'
          label='Image'
          variant='outlined'
        />
        <FormControl fullWidth>
          <InputLabel id='category'>Category</InputLabel>
          <Select
            fullWidth
            labelId='category'
            id='category'
            value={product.category}
            label='Category'
            onChange={handleChangeCategory}
          >
            <MenuItem value={'electronics'}>electronics</MenuItem>
            <MenuItem value={'jewelery'}>jewelery</MenuItem>
            <MenuItem value={`men's clothing`}>men clothing</MenuItem>
            <MenuItem value={`women's clothing`}>women clothing</MenuItem>
          </Select>
        </FormControl>
        <Styled.Add onClick={save} fullWidth variant='contained'>
          Add
        </Styled.Add>
      </Styled.Root>
    </React.Fragment>
  );
};
