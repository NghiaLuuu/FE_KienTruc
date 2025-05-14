export interface Invoice {
  _id: string;
  bookingId: string;
  userId: string;
  amount: number;
  paymentMethod: string;
  status: 'paid' | 'pending';
  createdAt: string;
}