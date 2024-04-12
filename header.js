import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnReact, setBtnReact] = useState("login");
  const cartItems = useSelector((store) => store.cart.items);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between shadow-lg p-3 m-3 bg-gray-300 ">
      <div className="flex">
        <img
          className="w-28"
          src="https://tse3.mm.bing.net/th?id=OIP.Und7xWROVGYYybvLuW4cXgHaFy&pid=Api&P=0&h=180"
          alt="swiggy"
        ></img>
      </div>

      <div className="flex items-center">
        <ul className="flex p-3 m- px-4 font-bold">
          <li className="px-4">onlineStatus:{onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/home" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link to="/about" style={{ textDecoration: "none" }}>
              About
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contact" style={{ textDecoration: "none" }}>
              contact
            </Link>
          </li>
          <li>
            {/* <button
              onClick={() => {
                btnReact === "login"
                  ? setBtnReact("logout")
                  : setBtnReact("login");
              }}
            >
              {btnReact}
            </button> */}
          </li>
          <li className="px-4">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/004/798/846/small/shopping-cart-logo-or-icon-design-vector.jpg"
              className="w-14 py-0 px-2 "
            />
            <Link to="/cart" style={{ textDecoration: "none" }}>
              cart-({cartItems.length})
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
