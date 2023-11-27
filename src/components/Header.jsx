import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <nav>
      <h2>Master Cart</h2>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>
          <FiShoppingBag />
          <p>{cartItems.length}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
