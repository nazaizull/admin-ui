import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/signIn";
import ForgotPassword from "./components/Fragments/ForgotPassword";
import AuthLayout from "./components/Layouts/AuthLayout";

const App = () => (
  <Router>
    <Routes>
	  <Route path="/" element={<SignInPage />} />
	  <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  </Router>
);

export default App;