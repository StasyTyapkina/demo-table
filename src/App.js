import React from "react";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { UserInfoPage } from "./pages/UserInfoPage";
import { UserDetailPage } from "./pages/UserDetailPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserInfoPage />} />
        <Route path="/user/:id" element={<UserDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
};
