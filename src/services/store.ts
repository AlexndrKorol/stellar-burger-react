import {
  configureStore,
  combineReducers,
} from "@reduxjs/toolkit";
import ingredientsReducer from "./reducers/ingredients";
import burgerConstructorReducer from "./reducers/burger-constructor";
import currentIngredientReducer from "./reducers/current-ingredient";
import createdOrderReducer from "./reducers/created-order";
import authReducer from "./reducers/auth";
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { wsConnectOrder, wsConnectingOrder, wsCloseOrder, wsDisconnectOrder, wsErrorOrder, wsMessageOrder, wsOpenOrder } from './reducers/orders-page/action';
import { wsConnectFeed, wsConnectingFeed, wsCloseFeed, wsDisconnectFeed, wsErrorFeed, wsMessageFeed, wsOpenFeed } from './reducers/feed-page/action';
// import { socketMiddleware } from "./middleware/socket-middleware";
import { authRegister } from "../utils/api"; 

const wsActionsFeed = {
  wsConnect: wsConnectFeed,
  wsDisconnect: wsDisconnectFeed,
  wsConnecting: wsConnectingFeed,
  wsOpen: wsOpenFeed,
  wsClose: wsCloseFeed,
  wsError: wsErrorFeed,
  wsMessage: wsMessageFeed
}

const wsActionsOrder = {
  wsConnect: wsConnectOrder,
  wsDisconnect: wsDisconnectOrder,
  wsConnecting: wsConnectingOrder,
  wsOpen: wsOpenOrder,
  wsClose: wsCloseOrder,
  wsError: wsErrorOrder,
  wsMessage: wsMessageOrder,
}

// const websocketOrderMiddleware = socketMiddleware(wsActionsOrder);
// const websocketFeedMiddleware = socketMiddleware(wsActionsFeed);

export const store = configureStore({
  reducer: combineReducers({
    ingredients: ingredientsReducer,
    burgerConstructor: burgerConstructorReducer,
    currentIngredient: currentIngredientReducer,
    createdOrder: createdOrderReducer,
    auth: authReducer,
  }),
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     thunk: {
  //       extraArgument: ,
  //     },
  //   }).concat(websocketOrderMiddleware, websocketFeedMiddleware),
});

export default store;

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch() as AppDispatch;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
