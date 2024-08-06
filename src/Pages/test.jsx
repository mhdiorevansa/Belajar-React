import { useState } from "react";

const TestPage = () => {
	const [name, setName] = useState([]);

	const changeName = (event) => {
		setName(event.target.value);
	};

	return (
		<div className="flex flex-col justify-center items-center w-full h-screen">
			<h1 className="font-bold text-3xl capitalize mb-3">isi identitas anda</h1>
			<div className="flex justify-center gap-5 w-full">
				<div className="border flex flex-col justify-center border-slate-200 shadow-md w-full max-w-sm rounded p-5 mb-7 text-center">
					<h1 className=" text-xl">Kartu Identitas wak</h1>
					<hr className="my-2 w-44 border mx-auto border-slate-200"></hr>
					<p className="capitalize">Nama : {name}</p>
				</div>
				<div className="border border-slate-200 shadow-md w-full max-w-sm rounded p-5 mb-7 text-center capitalize">
					<h1 className=" text-xl">validitas data</h1>
					<hr className="my-2 max-w-52 border border-slate-200 mx-auto"></hr>
					<p className={` ${name.length > 0 ? "text-green-500" : "text-red-500"}`}>
						{name.length > 0 ? "✓" : "✕"} Nama wajib diisi
					</p>
					<p className={` ${name.length >= 3 ? "text-green-500" : "text-red-500"}`}>
						{name.length >= 3 ? "✓" : "✕"} Nama minimal 3 karakter
					</p>
					<p
						className={`${
							name.length <= 10 && name.length > 0 ? "text-green-500" : "text-red-500"
						}`}>
						{name.length <= 10 && name.length > 0 ? "✓" : "✕"} nama maksimal 10 karakter
					</p>
				</div>
			</div>
			<div className="flex gap-3 justify-center w-full">
				<input
					type="text"
					className="p-2 w-full max-w-xs border border-slate-300 rounded-md focus:outline-slate-400"
					placeholder="input disini"
					onChange={changeName}
				/>
				<button className="bg-blue-400 text-white p-2 rounded">Submit</button>
			</div>
		</div>
	);
};
export default TestPage;
