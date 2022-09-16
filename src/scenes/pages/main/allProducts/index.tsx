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
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from '../../../../core/routes/routesPath';
import { PageTitle } from '../../../../components/pageTitle';

export const AllProducts = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
    navigate(ROUTES.main.productInfo.replace(':id', id.toString()));
  };

  return (
    <React.Fragment>
      <PageTitle title='Products' />
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
