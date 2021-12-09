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
      <nav class="navbar navbar-expand-md navbar-custom">
        <div class="container-fluid">
          <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
            <ul class="navbar-nav ms-auto flex-nowrap">
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
      {/* <nav className="navbar navbar-expand-md navbar-custom">
        <span className="navbar-brand">
          Test
        </span>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              a
            </li>
          </ul>
          <ul className="navbar-nav">
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
      </nav> */}
    </>
  );
}
