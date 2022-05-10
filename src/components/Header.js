import React from 'react';
import DataModal from './DataModal';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Main navigation">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Copy Pest
        </a>
        <button
          className="navbar-toggler p-0 border-0"
          type="button"
          id="navbarSideCollapse"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Change Variables
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
