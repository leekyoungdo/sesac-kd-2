import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import PhotosPage from "./pages/PhotosPage";
import PhotoDtailPage from "./pages/PhotoDetailPage";
// import SignUp from "./components/Singup";
function App() {
  return (
    <BrowserRouter>
      {/* Routes, Route 감싸야 함. */}
      <Header />
      <main>
        {/* Routes는 무조건 Route 컴포넌트를 감싸고 있어야 함.  */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/photos" element={<PhotosPage/>} />
          <Route path="/photo/:id" element={<PhotoDtailPage />} />
          <Route path="*" element={<NotFoundPage />} />

        </Routes>
      </main>
    </BrowserRouter>
  );
}
export default App;