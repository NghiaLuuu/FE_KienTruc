// src/layouts/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-12 border-t">
      <div className="container mx-auto px-4 text-center text-sm">
        <p className="mb-2 font-semibold">Khách sạn Hòa Bình - Trải nghiệm đẳng cấp</p>
        <p>Địa chỉ: 123 Trần Phú, Quận 5, TP.HCM | Email: contact@hoabinhhotel.vn | Điện thoại: (028) 1234 5678</p>
        <p className="mt-2 text-gray-500">&copy; {new Date().getFullYear()} Hòa Bình Hotel. All rights reserved.</p>
      </div>
    </footer>
  );
}
