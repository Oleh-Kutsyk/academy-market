export const ROUTES = {
  matchAll: '*',

  auth: {
    root: '/auth',
    signIn: 'sign-in',
  },

  main: {
    root: '/',
    allProducts: '/all-products',
    createProduct: 'create',
    editProduct: ':id/edit',

    // bannerNotifications: '/banner-notifications',
    // createBannerNotification: 'create',
    // editBannerNotification: ':id/edit',
    //
    // popUpNotifications: '/pop-up-notifications',
    // createPopUpNotification: 'create',
    // editPopUpNotification: ':id/edit',
    //
    // atmButtonsConfiguration: 'atm-buttons-configuration',
    // depositInfo: 'deposit-info',
    // atmDepositInfo: 'atm-deposit-info',
    // brandConfiguration: 'brand-configuration',
    // leverageInfo: 'leverage-info',
  },
} as const;
