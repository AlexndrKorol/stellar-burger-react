import { createReducer } from '@reduxjs/toolkit'
import { wsCloseOrder, wsConnectingOrder, wsErrorOrder, wsMessageOrder, wsOpenOrder } from './action';

type TOrder = {
    _id: string,
    ingredients: string[],
    status: string,
    name: string,
    createdAt: Date,
    updatedAt: Date,
    number: number
}

export type TOrderList = {
    success: boolean,
    orders: TOrder[],
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