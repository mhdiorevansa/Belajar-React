import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayout = (props) => {
	const { title, children, type } = props;
	// DarkMode didapatkan dari variabel DarkModeContect
	const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

	return (
		<div className={`flex justify-center h-screen items-center ${isDarkMode && "bg-slate-900"}`}>
			<div className="w-full max-w-xs">
				<button
					className="absolute right-5 top-5 bg-blue-600 p-2 text-white rounded"
					onClick={() => setIsDarkMode(!isDarkMode)}>
					{isDarkMode ? "Light" : "Dark"}
				</button>
				<h1 className="text-blue-600 text-3xl mb-2 font-bold">{title}</h1>
				<p className="font-medium text-slate-500 mb-5">Welcome, please enter your details</p>
				{children}
				<AuthType type={type}></AuthType>
			</div>
		</div>
	);
};

const AuthType = (props) => {
	const { type } = props;
	if (type === "login") {
		return (
			<p className="text-sm mt-5 text-center">
				Don't have an account?{" "}
				<Link to="/register" className="font-bold text-blue-600">
					Register
				</Link>
			</p>
		);
	} else {
		return (
			<p className="text-sm mt-5 text-center">
				Already have an account?{" "}
				<Link to="/login" className="font-bold text-blue-600">
					Login
				</Link>
			</p>
		);
	}
};

export default AuthLayout;
