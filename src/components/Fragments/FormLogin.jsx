import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth-service";

const FormLogin = () => {
	const [loginFailed, setLoginFailed] = useState("");

	const handleLogin = (event) => {
		event.preventDefault();
		const data = {
			username: event.target.username.value,
			password: event.target.password.value,
		};
		login(data, (status, res) => {
			if (status) {
				localStorage.setItem("token", res);
				window.location.href = "/products";
			} else {
				console.log(res);
				setLoginFailed(res.response.data);
			}
		});
	};

	const usernameRef = useRef(null);
	useEffect(() => {
		usernameRef.current.focus();
	}, []);

	return (
		<form onSubmit={handleLogin} autoComplete="off">
			<InputForm
				type="text"
				htmlFor="username"
				id="username"
				name="username"
				ref={usernameRef}
				placeholder="username">
				Username
			</InputForm>
			<InputForm
				type="password"
				htmlFor="password"
				id="password"
				name="password"
				placeholder="****">
				Password
			</InputForm>
			<Button classname="bg-blue-600 w-full" type="submit">
				Login
			</Button>
			{loginFailed && <p className="text-red-500 text-center mt-3">{loginFailed}</p>}
		</form>
	);
};

export default FormLogin;
