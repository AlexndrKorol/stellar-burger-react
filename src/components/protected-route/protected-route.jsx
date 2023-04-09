// import { authUser, useProvideAuth } from '../../services/reducers/auth';
// import { Navigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// export const ProtectedRouteElement = ({ element }) => {
//   let { useProvideAuth, ...auth } = authUser();
//   const [isUserLoaded, setUserLoaded] = useState(false);

//   const init = async () => {
//     await useProvideAuth();
//     setUserLoaded(true);
//   };

//   useEffect(() => {
//     init();
//   }, []);
  
//   if(!isUserLoaded) {
//     return null;
//   }

//   return auth.user ? element : <Navigate to="/login" replace />;
// }