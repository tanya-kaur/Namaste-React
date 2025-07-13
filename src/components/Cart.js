import { useDispatch, useSelector } from "react-redux";
// import About from "./About";
import ItemList from "./ItemList";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatchClear = useDispatch();
   const clearHandler = () => {
    dispatchClear(clearCart())
   }
return (
<div className="text-center m-4 p-4">
    <h2 className="font-bold text-2xl"> Cart</h2>
    <button className="w-20 text-white bg-black m-2 rounded-md" onClick={clearHandler}>Clear Cart</button>
    <div className="w-6/12 m-auto">
        {cartItems?.length === 0 && <h3>Cart is Empty! Add some items in the cart</h3>}
    <ItemList data={cartItems}/>
    </div>
</div>
)
}
export default Cart;