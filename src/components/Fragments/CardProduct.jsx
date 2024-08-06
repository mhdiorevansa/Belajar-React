import { Link } from "react-router-dom";
import Button from "../Elements/Button/Index";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const CardProduct = (props) => {
	const { children } = props;
	return (
		<div className="w-full max-w-xs border ms-2 my-2 border-gray-700 bg-gray-800 rounded-md shadow-md flex flex-col justify-between">
			{children}
		</div>
	);
};

const CardHeader = (props) => {
	const { imageurl, id } = props;
	return (
		<Link to={`/product/${id}`}>
			<img src={imageurl} alt="product" className="p-5 h-60 w-full object-cover" />
		</Link>
	);
};

const CardBody = (props) => {
	const { title, children } = props;
	return (
		<div className="px-5 pb-5 h-full">
			<a href="">
				<h5 className="text-xl font-semibold mb-2 text-white">{title.substring(0, 20)}...</h5>
				<p className="text-sm text-white">{children.substring(0, 100)}...</p>
			</a>
		</div>
	);
};

const CardFooter = (props) => {
	const {
		price,
		id,
		// addToCart
	} = props;
	const dispatch = useDispatch();
	return (
		<div className="flex justify-between items-center pb-5 px-5">
			<span className="text-xl font-bold text-white">
				{price.toLocaleString("us-US", { styles: "currency", currency: "USD" })}
			</span>
			<Button classname="bg-blue-600" onClick={() => dispatch(addToCart({ id, qty: 1 }))}>
				Add to cart
			</Button>
			{/* <Button classname="bg-blue-600" onClick={() => addToCart(id)}>
				Add to cart
			</Button> */}
		</div>
	);
};

CardProduct.CardHeader = CardHeader;
CardProduct.CardBody = CardBody;
CardProduct.CardFooter = CardFooter;

export default CardProduct;
