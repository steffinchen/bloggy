import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';
import { Heading } from 'rebass';

const query = graphql`
  query {
    file(relativePath: { eq: "images/header.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(query);
  return (
    <StyledHeader>
      <StyledImage fluid={data.file.childImageSharp.fluid}>
        <Link to="/">
          <Heading fontSize={[5, 6, 7]} color="white" variant="title">
            {siteTitle}
          </Heading>
        </Link>
      </StyledImage>
    </StyledHeader>
  );
};

const StyledImage = styled(BackgroundImage)`
  display: flex;
  height: 160px;
  justify-content: center;
  align-items: center;
`;

const StyledHeader = styled.header`
  background: ${props => props.theme.colors.primary};
  margin: -8px -8px 8px -8px;
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
