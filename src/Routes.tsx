import { DefaultLayout } from "./layouts/DefaultLayout";
import { CompleteOrderPage } from "./pages/CompleteOrder";
import { HomePage } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { OrderConfirmedPage } from "./pages/OrderComfirmed";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/completeOrder" element={<CompleteOrderPage />} />
                <Route path="/OrderConfirmed" element={<OrderConfirmedPage />} />
            </Route>
        </Routes>
    )
}