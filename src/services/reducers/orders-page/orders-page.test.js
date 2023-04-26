import { ordersReducer } from './reducer';
import { wsMessageOrder } from './action';

describe('orders-page reducer', () => {
  const TOrderList = {
    success: true,
    orders: [
      { id: '1', name: 'Order 1' },
      { id: '2', name: 'Order 2' },
    ],
    total: 2,
    totalToday: 1,
  };

  it('should return the initial state', () => {
    expect(ordersReducer(undefined, {})).toEqual({
      data: null,
    });
  });

  it('should handle wsMessageOrder', () => {
    const newState = ordersReducer(undefined, wsMessageOrder(TOrderList));
    expect(newState).toEqual({
      data: TOrderList,
    });
  });
});