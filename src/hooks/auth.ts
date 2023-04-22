import { useEffect } from "react";
import { authUser, authRefresh } from "../services/reducers/auth";
import { useAppDispatch, useAppSelector } from '../services/store';
import { RequestStatus } from '../types/etc';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user, refreshToken, accessToken, status } = useAppSelector((state) => state.auth);
  const isInitial = status === RequestStatus.INITIAL;
  const isPending = status === RequestStatus.PENDING;
  const isSuccess = status === RequestStatus.SUCCESS;
  const isError = status === RequestStatus.ERROR;

  useEffect(() => {
    (async () => {
      if (isPending || isSuccess) {
        return;
      }

      try {
        if (!accessToken) {
          throw Error('No access token');
        }
        const res = await dispatch(authUser()).unwrap();
        if (res.success) {

        } else {
          throw Error(JSON.stringify(res));
        }
      } catch (error) {
        try {
          if (!refreshToken) {
            throw Error('No refresh token');
          }
          const res = await dispatch(authRefresh()).unwrap(); 
          if (res.success) {
            await dispatch(authUser()).unwrap();
          } else {
            console.log('error1');
            throw Error(JSON.stringify(res));
          }
        } catch (error) {
          console.log('error2');
          console.error(error)
        }
      }
    })();
  }, []);


  return {
    user,
    isInitial,
    isPending,
    isSuccess,
    isError,
  }
};