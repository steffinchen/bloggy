import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const query = graphql`
  query {
    file(relativePath: { eq: "images/header.jpg" }) {
      childImageSharp {
        fixed(height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(query);
  return (
    <StyledHeader style={{}}>
      <Img fixed={data.file.childImageSharp.fixed} />
      <Title>
        <Link to="/">{siteTitle}</Link>
      </Title>
    </StyledHeader>
  );
};

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
