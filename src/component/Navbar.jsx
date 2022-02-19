import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineLocalMall,
  MdOutlineFavoriteBorder,
  MdPermIdentity,
} from "react-icons/md";

import { ProductContext} from "../Context"

function Navbar() {

  const { Wishlist } = useContext(ProductContext);

  return (
    <nav className="nav">
      <h2>
        <Link to="/">DL Shop</Link>
      </h2>
      <ul>
        <li className="icon-nav">
          <MdPermIdentity />
        </li>
        <li className="icon-nav">
          <MdOutlineFavoriteBorder />
        </li>
        <li className="icon-nav">
          <MdOutlineLocalMall />
        </li>
        <li className="name-nav">
          <Link to="/profile">Profile</Link>
        </li>
        <li className="name-nav">
          <Link to="/wishlist">Wishlist - {Wishlist.length > 0 && Wishlist.length}</Link>
        </li>
        <li className="name-nav">Bag</li>
      </ul>
    </nav>
  );
}

export default Navbar;
