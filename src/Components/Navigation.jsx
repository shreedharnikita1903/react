import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div>
      <div class="vertical-menu">
        <div class="navbar-brand-box">
          <a href="index" class="logo logo-dark">
            <span class="logo-sm">
              <img src="../assets/images/truck.png" alt="" />
            </span>
            <span class="logo-lg">
              <img src="../assets/images/truck.png" alt="" />
            </span>
          </a>
        </div>

        <button
          type="button"
          class="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn"
        >
          <i class="fa fa-fw fa-bars"></i>
        </button>

        <div data-simplebar class="sidebar-menu-scroll">
          <div id="sidebar-menu">
            <ul class="metismenu list-unstyled" id="side-menu">
              <li class="menu-title">Menu</li>

              <li>
                <a href="index">
                  <i class="uil-home-alt"></i>
                  <span> Super Admin</span>
                </a>
              </li>
              <li>
                <a href="javascript: void(0);" class="has-arrow waves-effect">
                  <i class="uil-list-ui-alt"></i>
                  <span>Creat Truck </span>
                </a>
                <ul class="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/"> Create New Truck</Link>
                  </li>
                  <li>
                    <Link to="/CreateDriver"> Create New Driver</Link>
                  </li>
                  <li>
                    <Link to="/Createclient"> Create New Client</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
