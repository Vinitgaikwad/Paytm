import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";
import Alert from "./components/Alert";

const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const TransactionPage = lazy(() => import('./pages/TransactionPage'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Alert />
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/dashboard" element={<DashboardPage />}></Route>
            <Route path="/transaction" element={<TransactionPage />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
