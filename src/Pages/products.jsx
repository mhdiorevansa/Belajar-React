import { Fragment, useContext, useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product-service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layout/Navbar";
import { DarkMode } from "../context/DarkMode";

const ProductsPage = () => {
	// const handleLogout = () => {
	// 	localStorage.removeItem("token");
	// 	window.location.href = "/login";
	// };

	// const [cart, setCart] = useState([]);
	// const [totalPrice, setTotalPrice] = useState([0]);
	const { isDarkMode } = useContext(DarkMode);
	const [products, setProducts] = useState([]);
	// const username = useLogin();
	useLogin();

	// use effect sama seperti did mount, state pertama kali saat di load
	// useEffect(() => {
	// 	setCart(JSON.parse(localStorage.getItem("cart")) || []); // json parse mengkonversi json string menjadi object
	// })
	useEffect(() => {
		getProducts((data) => {
			setProducts(data);
		});
	}, []);

	// use effect juga bisa untuk did update, memantau perubahan pada sebuah state
	// useEffect(() => {
	// 	if (products.length > 0 && cart.length > 0) {
	// 		const sum = cart.reduce((acc, item) => {
	// 			const product = products.find((product) => product.id === item.id);
	// 			return acc + product.price * item.qty;
	// 		}, 0);
	// 		setTotalPrice(sum);
	// 		localStorage.setItem("cart", JSON.stringify(cart)); // json stringfy mengkonversi menjadi json string
	// 	}
	// }, [cart, products]);

	// const addToCart = (id) => {
	// 	if (cart.find((item) => item.id === id)) {
	// 		setCart(cart.map((item) => ({ ...item, qty: item.qty + 1 })));
	// 	} else {
	// 		setCart([...cart, { id, qty: 1 }]);
	// 	}
	// };

	// useRef (bisa berguna untuk DOM, mengambil di melalui atribut ref={})
	// const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

	// const handleAddToCartRef = (id) => {
	// 	cartRef.current = [...cartRef.current, { id, qty: 1 }];
	// 	localStorage.setItem("cart", JSON.stringify(cartRef.current));
	// };

	// const showTotalPriceRef = useRef(null);
	// useEffect(() => {
	// 	if (cart.length > 0) {
	// 		showTotalPriceRef.current.style.display = "table-row";
	// 	} else {
	// 		showTotalPriceRef.current.style.display = "none";
	// 	}
	// }, [cart]);

	// const [title, setTitle] = useState([]);
	// useEffect(() => {
	// 	localStorage.setItem("title", title);
	// }, [title]);
	// const gantiJudul = (event) => {
	// 	setTitle(event.target.value);
	// };

	return (
		<Fragment>
			{/* <div className="flex justify-end items-center px-7 h-20 bg-blue-600 text-white">
				{username}
				<Button classname="bg-red-500 ms-5" onClick={handleLogout}>
					Logout
				</Button>
			</div> */}
			{/* <div className="m-5">
				<p className="mb-2">{title.length > 10 ? `${title.substring(0, 10)}...` : title}</p>
				<input
					type="text"
					onChange={gantiJudul}
					placeholder="hai"
					className="border border-slate-500 p-2"
					id=""
				/>
			</div> */}
			<Navbar></Navbar>
			<div className={`flex justify-center py-10 ${isDarkMode && "bg-slate-900"}`}>
				<div className="w-2/4 flex flex-wrap justify-center">
					{products.length > 0 &&
						products.map((product) => (
							<CardProduct key={product.id}>
								<CardProduct.CardHeader
									imageurl={product.image}
									id={product.id}></CardProduct.CardHeader>
								<CardProduct.CardBody title={product.title}>
									{product.description}
								</CardProduct.CardBody>
								<CardProduct.CardFooter
									price={product.price.toLocaleString("us-US", {
										style: "currency",
										currency: "USD",
									})}
									id={product.id}
									// addToCart={addToCart}
								></CardProduct.CardFooter>
							</CardProduct>
						))}
				</div>
				<div className="w-2/4 px-24">
					<h1 className="text-3xl font-bold text-blue-600 mb-4">Cart</h1>
					<TableCart products={products}></TableCart>
				</div>
			</div>
		</Fragment>
	);
};

export default ProductsPage;
