import { createReducer } from "@reduxjs/toolkit";
import { Order } from "../../../types/order";
import {
  wsCloseFeed,
  wsConnectingFeed,
  wsErrorFeed,
  wsMessageFeed,
  wsOpenFeed,
} from "./action";

export type TOrderList = {
  success: boolean;
  orders: Order[];
  total: number;
  totalToday: number;
};

type TOrderState = {
  data: TOrderList | null;
};

const initialState: TOrderState = {
  data: null,
};

export const feedReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(wsConnectingFeed, (state) => {})
    .addCase(wsOpenFeed, (state) => {
      console.log("OPEN WEBSOCKET");
    })
    .addCase(wsCloseFeed, (state) => {
      console.log("CLOSE WEBSOCKET");
    })
    .addCase(wsErrorFeed, (state, action) => {})
    .addCase(wsMessageFeed, (state, action) => {
      console.log(action.payload);

      state.data = action.payload;
    });
});
