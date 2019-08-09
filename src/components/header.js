import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import styled from 'styled-components';

import colours from '../common/colours';

const Header = ({ siteTitle }) => (
  <StyledHeader style={{}}>
    <Title>
      <Link to="/">{siteTitle}</Link>
    </Title>
  </StyledHeader>
);

const StyledHeader = styled.header`
  background: ${colours.color3};
  margin-bottom: 1.45rem;
  padding: 2em;
`;

const Title = styled.h1`
  font-size: 2em;
  & a {
    color: white;
  }
`;

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
