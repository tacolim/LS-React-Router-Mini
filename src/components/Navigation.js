import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Nav className="App">
        <h1>React Router Mini</h1>
        <NavItem>
          <NavLink exact activeClassName='nav-link--active' to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink activeClassName='nav-link--active' to="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink activeClassName='nav-link--active' to="/contact">Contact</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navigation;
