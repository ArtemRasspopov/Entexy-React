import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ImagePage from "./pages/imagePage/ImagePage";
// import LoginPage from "./pages/loginPage/LoginPage";
// import MainPage from "./pages/mainPage/MainPage";

function App() {
  return (
    <div className="app">
      {/* <LoginPage /> */}
      <Header/>
      {/* <MainPage/> */}
      <ImagePage/>
      <Footer/>
    </div>
  );
}

export default App;
