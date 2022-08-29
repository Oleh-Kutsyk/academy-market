const baseUrl = 'https://fakestoreapi.com';

export const apiRoutes = {
  login: `${baseUrl}/auth/login`,
  getProfile: `${baseUrl}/users/1`, // we will get just current user
  getProducts: `${baseUrl}/products`,
  getProductsInCategory: (category: string) =>
    `${baseUrl}/products/category/${category}`,
  getSingleProduct: (id: string) => `${baseUrl}/products${id}`,
  getCategories: `${baseUrl}/products/categories`,
};
