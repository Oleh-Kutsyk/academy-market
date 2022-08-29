export const getImage = (title: string): string => {
  switch (title) {
    case 'electronics':
      return 'http://s3.amazonaws.com/themorning-aruna/wp-content/uploads/2020/07/18181656/electronics2-.jpg';
    case 'jewelery':
      return 'https://m.media-amazon.com/images/I/81GgLKNTxNL._AC_UL1500_.jpg';
    case `men's clothing`:
      return 'https://thumbnails-visually.netdna-ssl.com/shenker-english-tips--mens-clothing-vocabulary_5501617101d15.png';
    case `women's clothing`:
      return 'https://image.shutterstock.com/image-photo/flat-lay-feminine-clothes-accessories-260nw-442156837.jpg';
    default:
      return 'https://image.shutterstock.com/image-photo/flat-lay-feminine-clothes-accessories-260nw-442156837.jpg';
  }
};
