import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

import KakaoOAuthHandler from "../components/sections/auth/KakaoOAuthHandler";

export default function AppRoutre() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/oauth/callback" element={<KakaoOAuthHandler />} />
      </Routes>
    </BrowserRouter>
  );
}
