import React from 'react';
import { Link, Flex, Box } from 'rebass';
import styled from 'styled-components';
import instagram from '../images/icons/instagram.svg';
import facebook from '../images/icons/facebook.svg';
import etsy from '../images/icons/etsy.svg';
import rss from '../images/icons/rss.svg';
import Search from '../common/search';
import Hide from '../common/hide';
import MobileNav from './mobile-nav';

const NavBar = () => (
  <Container fontFamily="headings" px={2} alignItems="center">
    <Hide breakpoints={[2]}>
      <MobileNav />
    </Hide>
    <Hide breakpoints={[0, 1]} style={{ width: '100%' }}>
      <DesktopNav alignItems="center">
        <Link variant="nav" href="/">
          Home
        </Link>
        <Link variant="nav" href="https://rebassjs.org">
          Link
        </Link>
        <Link variant="nav" href="blog">
          Blog
        </Link>
        <Link variant="nav" href="patterns">
          Patterns
        </Link>
        <Link variant="nav" href="about">
          About
        </Link>
        <Box mx="auto" />
        <Search />
      </DesktopNav>
    </Hide>
    <Box mx="auto" breakpoints={[2]} />
    <Link href="http://www.instagram.com">
      <Icon src={instagram} />
    </Link>
    <Link href="http://www.facebook.com">
      <Icon src={facebook} />
    </Link>
    <Link href="http://www.etsy.com">
      <Icon src={etsy} />
    </Link>
    <Link href="http://">
      <Icon src={rss} />
    </Link>
  </Container>
);

const Icon = styled.img`
  height: 25px;
  padding-left: 20px;
  cursor: pointer;
`;

const Container = styled(Flex)`
  padding-bottom: 20px;
`;

const DesktopNav = styled(Flex)`
  * + * {
    padding-left: 20px;
  }
`;

export default NavBar;
