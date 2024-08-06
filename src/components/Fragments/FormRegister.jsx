import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";

const FormRegister = () => {
	return (
		<form action="" autoComplete="off">
			<InputForm type="text" htmlFor="fullname" id="fullname" placeholder="insert yourname here..">
				Fullname
			</InputForm>
			<InputForm type="email" htmlFor="email" id="email" placeholder="example@gmail.com">
				Email
			</InputForm>
			<InputForm type="password" htmlFor="password" id="password" placeholder="****">
				Password
			</InputForm>
			<InputForm type="password" htmlFor="confirmpw" id="confirmpw" placeholder="****">
				Confirm Password
			</InputForm>
			<Button classname="bg-blue-600 w-full">Register</Button>
		</form>
	);
};

export default FormRegister;
