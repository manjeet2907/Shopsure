import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import { CartDropdown } from "../containers";
// import { UserContext } from "../contexts/userContext";
// import { CartContext } from "../contexts/cartContext";
// import { signOutUser } from "../utils/firebase/firebase.utils";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCurrentUser } from "../reducers/user/userSelector";
import { signOutStart } from "../reducers/user/userAction";
import { selectIsCartOpen } from "../reducers/cart/cartSelector";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const signOutUser = () => dispatch(signOutStart());

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
