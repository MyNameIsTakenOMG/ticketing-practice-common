export enum OrderStatus {
  // when the order has been created, but the ticket
  // it is trying to order has not been reserved ( a race condition)
  Created = 'created',
  // the ticket the order is trying to reserve has already been reserved,
  // or when the user has cancelled the order
  // or the order has expired before payment
  Cancelled = 'cancelled',
  // the order has successfully reserved the ticket
  AwaitingPayment = 'awaiting:payment',
  // the order has reserved the ticket, and the user has paid the ticket successfully
  Complete = 'complete',
}
