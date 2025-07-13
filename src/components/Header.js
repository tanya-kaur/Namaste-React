import { useContext, useEffect, useState } from "react";
import logo from "../../images/Treat.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [login, setLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedUser} = useContext(UserContext);
  const cartItems = useSelector((store)=>store.cart.items);
  console.log(cartItems);
  // console.log(data);
  useEffect(()=> {
    console.log("useEffect called");
  }, [login]);
  return (
    <div className="flex justify-between lg:bg-green-100 sm:bg-yellow-200 bg-pink-200 shadow-lg">
      <div className="logo-container">
        <img className="w-[150px] px-5 py-4 rounded-full" src={logo} />
      </div>
      <div className="flex items-center">
        <ul className="flex px-4 m-4">
          <li className="px-4">Online status: {onlineStatus ? "🟢" : "🔴" }</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4 font-bold"><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
          <button className="login px-2" onClick={()=>{
            login === "Login" ? setLogin("Logout") : setLogin("Login")
          }}>{login}</button>
          <li className="font-bold">{loggedUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
