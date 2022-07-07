import React from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import FirstPage from "./pages/firstpage";
import Login from "./pages/login";
import Sign from "./pages/sign";
import HomePage from "./pages/home";
import MyList from "./pages/myList";
import Contact from "./pages/contact";
import Pasreset from "./pages/pasreset";

function App() {

  const ProtectedRoute = ({ user, children }) => {
    const isLogin = localStorage.getItem("accessToken")
    if (isLogin === "") {
      return <Navigate to="/login" replace />;
    }

    return <Outlet />;
  };



  return (
    <Routes>
      <Route exact path="/" element={<FirstPage />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/sign" element={<Sign />} />
      <Route exact path="/pasreset" element={<Pasreset />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<HomePage />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/mylist" element={<MyList />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
