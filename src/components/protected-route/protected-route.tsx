import { FC, ReactElement, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { authActions } from '../../services/reducers/auth'
import { useAppDispatch } from '../../services/store';


type TProtectedRouteElement = {
  element: ReactElement
}

export const ProtectedRouteElement: FC<TProtectedRouteElement> = ({ element }) => {
  const { user, isFinished } = useAuth();
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isFinished && !user) {
      dispatch(authActions.setReturnUrl(pathname));
    }
  }, [isFinished, user, dispatch, pathname]);

  if (!isFinished) {
    return null;
  }

  if (user) {
    return element;
  } else {
    return <Navigate to="/login" replace />;
  }
};
