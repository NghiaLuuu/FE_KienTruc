// src/layouts/Header.tsx
export default function Header() {
  return (
    <header className="bg-white shadow-md py-5">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-700">
          🏨 Khách sạn Hòa Bình
        </div>
        <nav className="space-x-6 text-gray-700 text-sm font-medium">
          <a href="/" className="hover:text-blue-600">Trang chủ</a>
          <a href="/rooms" className="hover:text-blue-600">Phòng</a>
          <a href="/booking" className="hover:text-blue-600">Đặt phòng</a>
          <a href="/invoices" className="hover:text-blue-600">Hóa đơn</a>
          <a href="/contact" className="hover:text-blue-600">Liên hệ</a>
        </nav>
      </div>
    </header>
  );
}
