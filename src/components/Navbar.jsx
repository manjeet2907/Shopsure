import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import { CartDropdown } from "../containers";
import { UserContext } from "../contexts/userContext";
import { CartContext } from "../contexts/cartContext";
import { signOutUser } from "../utils/firebase/firebase.utils";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <div className='navbar'>
      <nav>
        <div className='leftSide_navbar'>
          <Link to='/'>
            <h3>ShopSure</h3>
          </Link>
        </div>
        <div className='rightSide_navbar'>
          <div className='rightSide_navbarItem'>
            <Link to='/shop'>Shop</Link>
          </div>
          <div className='rightSide_navbarItem'>
            <Link to='/contact'>Contact</Link>
          </div>
          <div className='rightSide_navbarItem'>
            {currentUser ? (
              <Link to='/auth' className='sout' onClick={signOutUser}>
                Sign Out
              </Link>
            ) : (
              <Link to='/auth'>Sign In</Link>
            )}
          </div>
          <div className='rightSide_navbarItem'>
            <CartIcon />
          </div>
        </div>
        <div className='rightSide_navbarItem'>
          {isCartOpen && <CartDropdown />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
