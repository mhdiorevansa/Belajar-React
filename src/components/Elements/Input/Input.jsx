import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
	const { type, placeholder, id, name } = props;
	return (
		<input
			type={type}
			className="text-sm border rounded w-full py-2 px-4 text-slate-700 placeholder:opacity-70"
			id={id}
			placeholder={placeholder}
			autoComplete="off"
			name={name}
			ref={ref}
		/>
	);
});

Input.displayName = "Input";
export default Input;
