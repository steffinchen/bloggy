import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { Flex, Box } from 'rebass';

import Header from './header';
import NavBar from './nav-bar';
import Footer from './footer';

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
        <Flex
          alignItems="center"
          flexDirection="column"
          m="auto"
          my="20px"
          width={[
            1, // 100% width on small screens
            0.8, // 50% width from the next breakpoint and up
            0.7, // 33% width from the next breakpoint and up
            0.7, // 25% width for all larger breakpoints
          ]}
          sx={{ boxShadow: '0 0 16px rgba(0, 0, 0, .25)' }}
        >
          <Box alignSelf="stretch">
            <NavBar />
          </Box>
          {children}
        </Flex>
        <Footer />
      </div>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
