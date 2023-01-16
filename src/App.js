import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import RequireAuth from "./hoc/RequireAuth";
import ImagePage from "./pages/imagePage/ImagePage";
import LoginPage from "./pages/loginPage/LoginPage";
import MainPage from "./pages/mainPage/MainPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/*"
          element={
            <RequireAuth>
              <Header />
              <Routes>
                <Route index element={<MainPage />} />
                <Route path="/image/:id" element={<ImagePage />} />
              </Routes>
              <Footer />
            </RequireAuth>
          }
        />
        <Route path="*" element={<h2>Ресурс не найден</h2>} />
      </Routes>
    </div>
  );
}

export default App;
