// src/router.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import App from "./App"
import InvoiceListPage from "@/page/invoices/index"
import InvoiceDetailPage from "@/page/invoices/[id]"
import NotFound from "@/page/invoices/NotFound"

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/invoices" element={<App />}>
          <Route index element={<InvoiceListPage />} />
          <Route path="invoices/:id" element={<InvoiceDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}
