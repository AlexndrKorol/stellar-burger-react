import { createReducer } from '@reduxjs/toolkit'
import { Order } from '../../../types/order';
import { wsCloseOrder, wsConnectingOrder, wsErrorOrder, wsMessageOrder, wsOpenOrder } from './action';

export type TOrderList = {
    success: boolean,
    orders: Order[],
    total: number,
    totalToday: number
}

type TOrderState = {
    data: TOrderList | null
}

const initialState: TOrderState = {
    data: null
}

export const ordersReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(wsConnectingOrder, (state) => {
        })
        .addCase(wsOpenOrder, (state) => {
            console.log('OPEN WEBSOCKET');
        })
        .addCase(wsCloseOrder, (state) => {
            console.log('CLOSE WEBSOCKET');
        })
        .addCase(wsErrorOrder, (state, action) => {
        })
        .addCase(wsMessageOrder, (state, action) => {
            console.log(action.payload);

            state.data = action.payload
        })
})