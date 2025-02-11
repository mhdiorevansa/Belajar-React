import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();
	return (
		<div className="flex justify-center h-screen items-center flex-col">
			<h1 className="text-3xl font-bold">Oops!</h1>
			<p className="my-2 text-xl">Sorry, an unpexted error has occured</p>
			<p className="text-lg">{error.statusText || error.message}</p>
		</div>
	);
};

export default ErrorPage;
