import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button/Index";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";

const Navbar = () => {
	const username = useLogin();
	const [totalCart, setTotalCart] = useState(0);
	const cart = useSelector((state) => state.cart.data);
	const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

	useEffect(() => {
		const sum = cart.reduce((acc, item) => {
			return acc + item.qty;
		}, 0);
		setTotalCart(sum);
	}, [cart]);

	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.href = "/login";
	};
	return (
		<div className="flex justify-end items-center px-7 h-20 bg-blue-600 text-white">
			{username}
			<Button classname="bg-red-500 ms-5" onClick={handleLogout}>
				Logout
			</Button>
			<div className="flex items-center bg-gray-800 p-2 rounded-md mx-5">{totalCart}</div>
			<Button className="bg-black mx-5" onClick={() => setIsDarkMode(!isDarkMode)}>
				{isDarkMode ? "Light" : "Dark"}
			</Button>
		</div>
	);
};

export default Navbar;
