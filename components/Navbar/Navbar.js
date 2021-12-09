import { useState, useEffect } from 'react';
import NextLink from 'next/link';

import { NavLink } from './Navbar.config';
import { SvgCart } from "components/Icone/Icone";

export default function Navbar() {
  const [myCart, setMyCart] = useState([]);

  useEffect(() => {
    let cart = localStorage.getItem('cart');
    setMyCart(JSON.parse(cart));
  }, []); 

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-custom">
        <div className="container-fluid">
          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
            <ul className="navbar-nav ms-auto flex-nowrap">
              {NavLink.map((navLink, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <NextLink href={navLink.path}>
                      <a 
                        className="nav-link"
                      >
                        {navLink.label}
                      </a>
                    </NextLink>
                  </li>
                );
              })}
              <li className="nav-item">
                <span
                  className="nav-link"
                >
                  <SvgCart />
                  {myCart?.length || 0}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
