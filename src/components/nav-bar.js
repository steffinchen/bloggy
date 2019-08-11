import React from 'react';
import { Link } from 'gatsby';

const NavBar = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="blog">Blog</Link>
    <Link to="patterns">Patterns</Link>
    <Link to="about">About</Link>
  </div>
);

export default NavBar;
