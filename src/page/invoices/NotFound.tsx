// src/pages/NotFound.tsx
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center bg-white shadow-lg p-6 rounded-md">
        <h1 className="text-4xl font-bold text-red-500">404</h1>
        <p className="text-xl text-gray-700">Trang bạn tìm không tồn tại</p>
        <p className="mt-4">
          <Link to="/" className="text-blue-600 hover:underline">
            Quay lại trang chủ
          </Link>
        </p>
      </div>
    </div>
  )
}
    