import React, { useState } from 'react';
import { Flex, Link, Box } from 'rebass';
import styled, { css } from 'styled-components';

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <Box fontSize={[4]} onClick={() => setOpen(!open)}>
        ☰
      </Box>
      <StyledDrawer flexDirection="column" open={open}>
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
      </StyledDrawer>
    </React.Fragment>
  );
};

const StyledDrawer = styled(Flex)`
  max-height: 0;
  overflow: hidden;
  transition: all 1s linear;
  ${props => props.open && 'max-height: 150px; padding: 10px 10px 10px 23px;'};
  ${props => !props.open && 'padding: 0;'};
`;

export default MobileNav;
