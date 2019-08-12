import React from 'react';
import { Link, Flex, Box } from 'rebass';
import styled from 'styled-components';
import instagram from '../images/icons/instagram.svg';
import facebook from '../images/icons/facebook.svg';
import etsy from '../images/icons/etsy.svg';
import rss from '../images/icons/rss.svg';
import Search from '../common/search';

const NavBar = () => (
  <Container fontFamily="headings" px={2} alignItems="center">
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
    <Icon src={instagram} />
    <Icon src={facebook} />
    <Icon src={etsy} />
    <Icon src={rss} />
  </Container>
);

const Icon = styled.img`
  height: 25px;
`;

const Container = styled(Flex)`
  padding-bottom: 20px;
  * + * {
    padding-left: 20px;
  }
`;

export default NavBar;
