'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchInvoiceById } from '@/apis/invoice.api';
import { Invoice } from '@/types/invoice.type';

export default function InvoiceDetail() {
  const { id } = useParams();
  const [invoice, setInvoice] = useState<Invoice | null>(null);

  useEffect(() => {
    const load = async () => {
      if (typeof id === 'string') {
        const data = await fetchInvoiceById(id);
        setInvoice(data);
      }
    };
    load();
  }, [id]);

  if (!invoice) return <p className="p-4">Đang tải hóa đơn...</p>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Chi tiết hóa đơn</h1>
      <div className="space-y-2">
        <div><strong>ID:</strong> {invoice._id}</div>
        <div><strong>Booking ID:</strong> {invoice.bookingId}</div>
        <div><strong>User ID:</strong> {invoice.userId}</div>
        <div><strong>Số tiền:</strong> {invoice.amount}đ</div>
        <div><strong>Phương thức thanh toán:</strong> {invoice.paymentMethod}</div>
        <div><strong>Trạng thái:</strong> {invoice.status}</div>
        <div><strong>Ngày tạo:</strong> {new Date(invoice.createdAt).toLocaleString()}</div>
      </div>
    </div>
  );
}
