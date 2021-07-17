import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../assets/images/logo.png"
import { BsSearch } from "react-icons/bs"
import { FiAlignJustify } from "react-icons/fi"
import { FaUser, FaPhone } from "react-icons/fa"

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <header className="navbar-header">
          <div className="navbar-header-logo">
            <Link to="/">
              <img src={logo} alt="acmedent" />
            </Link>
            <span>clone</span>
          </div>
          <button onClick={() => setShow(!show)}>
            <FiAlignJustify size={30} />
          </button>
        </header>
        <section
          className={show ? "navbar-links" : "navbar-links hide-navbar-links"}
        >
          <Link
            to="/"
            className="navbar-link"
            activeClassName="navbar-active-link"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="navbar-link"
            activeClassName="navbar-active-link"
          >
            Products
          </Link>
          <Link
            to="/promotions"
            className="navbar-link"
            activeClassName="navbar-active-link"
          >
            Promotions
          </Link>
          <FaUser className="navbar-link" />
          <BsSearch className="navbar-link" />
          <button>
            <p>Contact</p> <FaPhone className="icon-margin" />
          </button>
        </section>
      </div>
    </nav>
  )
}

export default Navbar
