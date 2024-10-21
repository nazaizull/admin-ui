import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import ForgotPassword from "./components/Fragments/ForgotPassword";
import ErrorRoute from "./pages/errorRoute";
import AuthLayout from "./components/Layouts/AuthLayout";

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <div>Halaman Utama</div>,
	  errorElement: <ErrorRoute/>,
    },
	{
		path: "/login",
		element: <SignInPage/>,
	},
	{
		path: "/register",
		element: <SignUpPage/>,
	},
	{
		path: "/forgot-password",
		element: <ForgotPassword /> ,
	},
	]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
