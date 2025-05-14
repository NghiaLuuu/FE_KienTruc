import { useEffect, useState } from 'react';
import { fetchInvoices } from '@/apis/invoice.api';
import { Invoice } from '@/types/invoice.type';
import { Link } from 'react-router-dom';

export default function InvoiceList() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    const loadInvoices = async () => {
      try {
        const data = await fetchInvoices();
        
        // Kiểm tra dữ liệu nhận được có phải là mảng hay không
        if (Array.isArray(data)) {
          setInvoices(data);
        } else {
          console.error('Dữ liệu không phải là mảng');
        }
      } catch (err) {
        console.error('Lỗi tải hóa đơn:', err);
      }
    };
    loadInvoices();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Danh sách hóa đơn</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border">Mã hóa đơn</th>
            <th className="py-2 px-4 border">Booking ID</th>
            <th className="py-2 px-4 border">Số tiền</th>
            <th className="py-2 px-4 border">Trạng thái</th>
            <th className="py-2 px-4 border">Xem</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(invoices) && invoices.length > 0 ? (
            invoices.map(invoice => (
              <tr key={invoice._id} className="text-center">
                <td className="py-2 px-4 border">{invoice._id}</td>
                <td className="py-2 px-4 border">{invoice.bookingId}</td>
                <td className="py-2 px-4 border">{invoice.amount}đ</td>
                <td className="py-2 px-4 border">
                  <span className={invoice.status === 'paid' ? 'text-green-600' : 'text-yellow-600'}>
                    {invoice.status}
                  </span>
                </td>
                <td className="py-2 px-4 border">
                  <Link to={`/invoices/${invoice._id}`} className="text-blue-600 underline">
                  Xem chi tiết
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center py-2 px-4 border">
                Không có dữ liệu hóa đơn
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
