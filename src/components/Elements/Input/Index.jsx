import Label from "./Label";
import Input from "./Input";
import { forwardRef } from "react";

const InputForm = forwardRef((props, ref) => {
	const { children, type, id, placeholder, htmlFor, name } = props;
	return (
		<div className="mb-5">
			<Label htmlFor={htmlFor}>{children}</Label>
			<Input type={type} id={id} placeholder={placeholder} name={name} ref={ref}></Input>
		</div>
	);
});

InputForm.displayName = "InputForm";
export default InputForm;
