import React, { useEffect } from 'react';
import { categoriesThunk } from '../../../../stores';
import { useAppDispatch, useAppSelector } from '../../../../utils';
import { Card } from '../../../../components/card';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { getImage } from '../../../../utils/categoryImage';
import { PageTitle } from '../../../../components/pageTitle';

export const AllCategories = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { categories } = useAppSelector();

  useEffect(() => {
    dispatch(categoriesThunk());
  }, []);

  const handleClick = (title: string) => () => {
    navigate(`/${title}/products`);
  };

  return (
    <React.Fragment>
      <PageTitle title='Categories' />
      <Box display='flex'>
        {categories.list.map(category => (
          <Card
            key={category}
            title={category}
            img={getImage(category)}
            onCardClick={handleClick(category)}
          />
        ))}
      </Box>
    </React.Fragment>
  );
};
