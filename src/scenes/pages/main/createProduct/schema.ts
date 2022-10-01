import * as yup from 'yup';

export const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
    price: yup.string().required(),
    image: yup.string().required(),
    category: yup.string().required(),
  })
  .required();
