import axios from 'axios';
import { Invoice } from '@/types/invoice.type';

// Lấy danh sách hóa đơn
export const fetchInvoices = async (): Promise<Invoice[]> => {
  const response = await axios.get('http://localhost:5004/api/invoices'); // Đảm bảo URL đúng với backend của bạn
  return response.data;
};

// Lấy hóa đơn theo ID
export const fetchInvoiceById = async (id: string): Promise<Invoice> => {
  const response = await axios.get(`http://localhost:5004/api/invoices/${id}`); // Đảm bảo URL đúng với backend của bạn
  return response.data;
};
