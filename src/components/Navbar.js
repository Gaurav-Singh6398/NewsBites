import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export class Navbar extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsBits
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " to="/buisness">Buisness</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " to="/entertainment">Entertainment</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " to="/general">General</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " to="/health">Health</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " to="/science">Science</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " to="/sports">Sports</NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="/technology">Technology</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
