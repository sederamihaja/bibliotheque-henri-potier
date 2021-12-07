import NextLink from 'next/link';

import { NavLink } from './Navbar.config';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-custom">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
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
          </ul>
        </div>
      </nav>
    </>
  );
}
