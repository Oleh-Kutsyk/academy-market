import axios from 'axios';
import { apiRoutes } from './routes';

////////////////////////////////////
export interface ILoginBody {
  username: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
}

export const loginApi = async ({
  username,
  password,
}: ILoginBody): Promise<ILoginResponse> => {
  return await axios.post(apiRoutes.login, { username, password }, {});
};

////////////////////////////////////
export interface IUser {
  address: {
    geolocation: {
      lat: string;
      long: string;
    };
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
  id: 1;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
}

export const getProfile = async (): Promise<IUser> => {
  const res = await axios.get(apiRoutes.getProfile);
  return res.data;
};

////////////////////////////////////
export interface IProductsFilters {
  sort: string;
  limit: number;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface IProductBE {
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
}

export const getAllProducts = async (
  filters?: IProductsFilters
): Promise<Array<IProduct>> => {
  const res = await axios.get(apiRoutes.getProducts, {
    params: filters,
  });
  return res.data;
};

export const getAllProductsInCategory = async (
  category: string
): Promise<Array<IProduct>> => {
  const res = await axios.get(apiRoutes.getProductsInCategory(category));
  return res.data;
};

export const getSingleProduct = async (id: string): Promise<IProduct> => {
  const res = await axios.get(apiRoutes.getSingleProduct(id));
  return res.data;
};

export const addProduct = async (body: IProductBE): Promise<IProduct> => {
  const res = await axios.post(apiRoutes.getProducts, {
    body,
  });
  return res.data;
};

//////////////////////////////
export const getAllCategories = async (): Promise<Array<string>> => {
  const res = await axios.get(apiRoutes.getCategories);
  return res.data;
};
