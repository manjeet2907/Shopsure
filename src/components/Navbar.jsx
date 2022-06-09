import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
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
            <Link to='/signin'>Sign In</Link>
          </div>
          <div className='rightSide_navbarItem'>
            <Link to='/cart'>Cart</Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
