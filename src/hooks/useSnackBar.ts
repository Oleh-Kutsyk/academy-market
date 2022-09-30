import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';

import { ISnackBar, removeSideBar, TRootState } from '../stores';
import { useEffect } from 'react';
import { useAppDispatch } from '../utils';

export const useSnackBar = () => {
  const snackbar = useSnackbar();
  const dispatch = useAppDispatch();
  const snackbars = useSelector(({ app }: TRootState) => app.snackbars);

  const showNotification = (notification: ISnackBar) => {
    snackbar.enqueueSnackbar(notification.message, {
      autoHideDuration: notification.autoHideDuration,
      variant: notification.variant,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center',
      },
      onExit: () => dispatch(removeSideBar(notification.id)),
    });
  };

  useEffect(() => {
    snackbars.length && showNotification(snackbars[snackbars.length - 1]);
  }, [snackbars.length]);
};
