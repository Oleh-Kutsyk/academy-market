import React, { useEffect } from 'react';
import {
  productsInCategoryThunk,
  productsThunk,
  removeProducts,
} from '../../../../stores';
import { useAppDispatch, useAppSelector } from '../../../../utils';
import { Card } from '../../../../components/card';
import { IProduct } from '../../../../api';

import * as Styled from './styled';
import { useParams } from 'react-router-dom';

export const AllProducts = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { products } = useAppSelector();

  useEffect(() => {
    if (params.id) {
      dispatch(productsInCategoryThunk(params.id));
    } else {
      dispatch(productsThunk());
    }
  }, [params.id]);

  useEffect(() => {
    return () => {
      dispatch(removeProducts());
    };
  }, []);

  const handleClick = (id: number) => () => {
    console.log('id', id);
  };

  return (
    <React.Fragment>
      <h1>Products</h1>
      <Styled.Products>
        {products.list.map((product: IProduct) => (
          <Card
            key={product.id}
            title={product.title}
            img={product.image}
            description={product.description}
            onCardClick={handleClick(product.id)}
          />
        ))}
      </Styled.Products>
    </React.Fragment>
  );
};
