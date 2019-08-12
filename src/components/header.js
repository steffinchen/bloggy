import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import styled from 'styled-components';

const Header = ({ siteTitle }) => (
  <StyledHeader style={{}}>
    <Title>
      <Link to="/">{siteTitle}</Link>
    </Title>
  </StyledHeader>
);

const StyledHeader = styled.header`
  background: ${props => props.theme.colors.primary};
  margin-bottom: 1.45rem;
  padding: 2em;
`;

const Title = styled.h1`
  font-family: 'Kaushan Script', cursive;
  font-size: 2em;
  & a {
    text-decoration: none;
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
