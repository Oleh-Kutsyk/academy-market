import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../utils';
import { useParams } from 'react-router-dom';
import { singleProductThunk } from '../../../../stores';

import * as Styled from './styled';

export const ProductInfo = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const {
    products: { selectedProduct },
  } = useAppSelector();

  useEffect(() => {
    id && dispatch(singleProductThunk(id));
  }, [id]);

  return (
    <Styled.Root>
      <Styled.InfoContainer>
        <Styled.Title>{selectedProduct?.title}</Styled.Title>
        <Styled.Image>
          <img src={selectedProduct?.image} alt={selectedProduct?.title} />
        </Styled.Image>
        <Styled.Description>
          Price: {selectedProduct?.price}$
        </Styled.Description>
        <Styled.Description>
          Rating: {selectedProduct?.rating.rate}
        </Styled.Description>
      </Styled.InfoContainer>
      <Styled.InfoContainer>
        <Styled.Description>{selectedProduct?.description}</Styled.Description>
      </Styled.InfoContainer>
    </Styled.Root>
  );
};
