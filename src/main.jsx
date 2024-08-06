import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/login";
import RegisterPage from "./Pages/register";
import ErrorPage from "./Pages/Error/404";
import ProductsPage from "./Pages/products";
import TestPage from "./Pages/test";
import ProfilePage from "./Pages/profile";
import DetailProduct from "./Pages/detailProduct";
import { Provider } from "react-redux";
import store from "./redux/store";
import DarkModeContectProvider from "./context/DarkMode";

const router = createBrowserRouter([
	{
		path: "/",
		element: <div>Hello World!</div>,
		errorElement: <ErrorPage></ErrorPage>,
	},
	{
		path: "/login",
		element: <LoginPage></LoginPage>,
	},
	{
		path: "/register",
		element: <RegisterPage></RegisterPage>,
	},
	{
		path: "/products",
		element: <ProductsPage></ProductsPage>,
	},
	{
		path: "/test",
		element: <TestPage></TestPage>,
	},
	{
		path: "/profile",
		element: <ProfilePage></ProfilePage>,
	},
	{
		path: "/product/:id",
		element: <DetailProduct></DetailProduct>,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<DarkModeContectProvider>
				<RouterProvider router={router}></RouterProvider>
			</DarkModeContectProvider>
		</Provider>
	</React.StrictMode>
);
