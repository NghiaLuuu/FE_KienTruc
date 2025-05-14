// src/App.tsx
import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">
        Quản lý hóa đơn
      </h1>
      <Outlet />
    </div>
  )
}

export default App
