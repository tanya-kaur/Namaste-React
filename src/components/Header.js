import { useEffect, useState } from "react";
import logo from "../../images/Treat.png";
const Header = () => {
  const [login, setLogin] = useState("Login");
  useEffect(()=> {
    console.log("useEffect called");
  }, [login]);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login" onClick={()=>{
            login === "Login" ? setLogin("Logout") : setLogin("Login")
          }}>{login}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
