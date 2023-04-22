import { Order, OrderStatus } from '../types/order';

export const getOrderStatus = (order: Order): string => {
  const map: Record<OrderStatus, string> = {
    [OrderStatus.CREATED]: 'Создан',
    [OrderStatus.PENDING]: 'В работе',
    [OrderStatus.DONE]: 'Выполнен',
  };

  return map[order.status];
}