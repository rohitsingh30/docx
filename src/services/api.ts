export type PaymentHistoryItem = {
  id: string;
  date: string;
  amount: number;
  status: string;
};

export const fetchPaymentHistory = async (): Promise<PaymentHistoryItem[]> => {
  // Mock data for demonstration purposes
  return [
    { id: '1', date: '2023-01-01', amount: 100, status: 'Completed' },
    { id: '2', date: '2023-01-02', amount: 150, status: 'Pending' },
    { id: '3', date: '2023-01-03', amount: 200, status: 'Failed' },
  ];
};
