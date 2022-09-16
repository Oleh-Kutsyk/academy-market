import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../utils';
import { useParams } from 'react-router-dom';
import { singleProductThunk } from '../../../../stores';

import * as Styled from './styled';
import { PageTitle } from '../../../../components/pageTitle';

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
    <React.Fragment>
      <PageTitle title={selectedProduct?.title} />
      <Styled.Root>
        <Styled.InfoContainer>
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
        <Styled.Description>{selectedProduct?.description}</Styled.Description>
      </Styled.Root>
    </React.Fragment>
  );
};
