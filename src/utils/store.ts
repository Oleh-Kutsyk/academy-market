import { useDispatch, useSelector } from 'react-redux';
import { TAppDispatch, TRootState } from '../stores';

export const useAppDispatch = () => useDispatch<TAppDispatch>();

export const useAppSelector = () => useSelector((root: TRootState) => root);
