import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import colours from '../common/colours';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: colours.color3,
      marginBottom: `1.45rem`,
    }}
  >
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
