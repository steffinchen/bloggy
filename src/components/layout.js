import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { Flex } from 'rebass';

import Header from './header';
import NavBar from './nav-bar';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <React.Fragment>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Kaushan+Script&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} fontFamily="headings" />
      <div>
        <Flex justifyContent="center" width={[1]}>
          <Flex
            flexDirection="column"
            alignItems="center"
            width={[
              1, // 100% width on small screens
              0.8, // 50% width from the next breakpoint and up
              0.7, // 33% width from the next breakpoint and up
              0.7, // 25% width for all larger breakpoints
            ]}
          >
            <NavBar />
            {children}
          </Flex>
        </Flex>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
