import { useEffect, useState } from "react";
import { authUser, authRefresh } from "../services/reducers/auth";
import { useAppDispatch, useAppSelector } from '../services/store';
import { getCookie } from "../utils/cookie";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user, refreshToken, accessToken } = useAppSelector((state) => state.auth);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    (async () => {
      console.log(document.cookie.indexOf('accessToken'));
      if (getCookie('accessToken')) { 
        console.log('access Token true auth');
        try {
          const res = await dispatch(authUser()).unwrap();
          if (res.success) {

          } else {
            throw Error(JSON.stringify(res));
          }
        } catch (error) {
          console.error(error);
        }
      } else {
        console.log('refresh token true auth');
        try {
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

      setIsFinished(true);
    })();

  }, [accessToken, refreshToken, dispatch]);


  return {
    user,
    isFinished,
  }
};