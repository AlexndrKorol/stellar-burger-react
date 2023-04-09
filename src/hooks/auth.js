import {
  useEffect
} from "react";
import {
  useDispatch, useSelector
} from "react-redux";
import {
  useNavigate
} from "react-router-dom";
import {
  authUser,
  authRefresh
} from "../services/reducers/auth";

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, refreshToken, accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    (async () => {
      if (user) {
        return;
      }

      if (accessToken) {
        try {
          const res = await dispatch(authUser()).unwrap();
          if (res.success) {
            return;
          } else {
            throw Error(JSON.stringify(res));
          }
        } catch (error) {
          console.error(error);
        }
      }
      
      if (refreshToken) {
        try {
          const res = await dispatch(authRefresh()).unwrap();
          if (res.success) {
            await dispatch(authUser()).unwrap();
            return;
          } else {
            throw Error(JSON.stringify(res));
          }
        } catch (error) {
          navigate('/login');
        }
      }
    })();

  }, [dispatch, navigate, user, accessToken, refreshToken]);
};