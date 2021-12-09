import { useState, useEffect } from 'react';
import NextLink from 'next/link';

import { NavLink } from './Navbar.config';
import { SvgCart } from "components/Icone/Icone";

export default function Navbar() {
  const [myCart, setMyCart] = useState([]);

  useEffect(() => {
    let cart = localStorage.getItem('cart');
    setMyCart(JSON.parse(cart));
  }, [myCart]); 

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-md navbar-custom">
        <NextLink href="/" className="navbar-brand">
          <a className="navbar-brand">
            Next.js
          </a>
        </NextLink>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav">
            {NavLink.map((navLink, index) => {
              return (
                <li className="nav-item" key={index}>
                  <NextLink
                    href={navLink.path}
                    
                  >
                    <a className="nav-link">{navLink.label}</a>
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
      </nav>
    </>
  );
}
