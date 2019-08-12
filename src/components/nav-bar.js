import React from 'react';
import { Link, Flex, Box } from 'rebass';
import styled from 'styled-components';

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
    <input type="text" placeholder="Search" />
  </Container>
);

const Container = styled(Flex)`
  padding-bottom: 20px;
  * + * {
    padding-left: 10px;
  }
`;

export default NavBar;
