// src/router.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import InvoiceListPage from "@/page/invoices/index"
import InvoiceDetailPage from "@/page/invoices/[id]"
import NotFound from "@/page/invoices/NotFound" 

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InvoiceListPage />} />
        <Route path="/invoices/:id" element={<InvoiceDetailPage />} />
        <Route path="*" element={<NotFound />} /> {/* Route mặc định cho trang không tìm thấy */}
      </Routes>
    </Router>
  )
}
