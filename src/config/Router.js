import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../containers/Home";
import Checkout from "../components/Checkout";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
