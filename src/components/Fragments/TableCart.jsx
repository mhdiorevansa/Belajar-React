import { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";

const TableCart = (props) => {
	const { products } = props;
	const cart = useSelector((state) => state.cart.data);
	const [totalPrice, setTotalPrice] = useState(0);
	const { isDarkMode } = useContext(DarkMode);

	useEffect(() => {
		if (products.length > 0 && cart.length > 0) {
			const sum = cart.reduce((acc, item) => {
				const product = products.find((product) => product.id === item.id);
				return acc + product.price * item.qty;
			}, 0);
			setTotalPrice(sum);
			localStorage.setItem("cart", JSON.stringify(cart)); // json stringfy mengkonversi menjadi json string
		}
	}, [cart, products]);

	const showTotalPriceRef = useRef(null);
	useEffect(() => {
		if (cart.length > 0) {
			showTotalPriceRef.current.style.display = "table-row";
		} else {
			showTotalPriceRef.current.style.display = "none";
		}
	}, [cart]);

	return (
		<table className={`table-auto text-left border border-gray-300 ${isDarkMode && "text-white"}`}>
			<thead>
				<tr>
					<th className="border border-gray-300 p-2">Product</th>
					<th className="border border-gray-300 p-2">Price</th>
					<th className="border border-gray-300 p-2">Quantity</th>
					<th className="border border-gray-300 p-2">Total</th>
				</tr>
			</thead>
			<tbody>
				{products.length > 0 ? (
					// jika menggunakan ref, gunakan fungsi tambahan yaitu current. contoh = cart.current.map()
					cart.map((item) => {
						const product = products.find((product) => product.id === item.id);
						if (!product) return null;
						return (
							<tr key={item.id}>
								<td className="border border-gray-300 p-2">{product.title.substring(0, 30)}...</td>
								<td className="border border-gray-300 p-2">
									{product.price.toLocaleString("us-US", {
										style: "currency",
										currency: "USD",
									})}
								</td>
								<td className="border border-gray-300 p-2">{item.qty}</td>
								<td className="border border-gray-300 p-2">
									{(item.qty * product.price).toLocaleString("us-US", {
										style: "currency",
										currency: "USD",
									})}
								</td>
							</tr>
						);
					})
				) : (
					<tr>
						<td colSpan={4} className="border border-gray-300 p-2 text-center">
							Tidak ada data
						</td>
					</tr>
				)}
				<tr ref={showTotalPriceRef}>
					<td colSpan={3} className="border border-gray-300 p-2">
						Total price
					</td>
					<td className="border border-gray-300 p-2">
						{totalPrice.toLocaleString("us-US", {
							style: "currency",
							currency: "USD",
						})}
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default TableCart;
