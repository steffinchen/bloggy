import React, { useState } from 'react';
import { Flex, Link, Box } from 'rebass';

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  console.log('TCL: MobileNav -> open', open);
  return (
    <React.Fragment>
      <Box fontSize={[4]} onClick={() => setOpen(!open)}>
        ☰
      </Box>
      {open && (
        <Flex flexDirection="column" backgroundColor="grey">
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
        </Flex>
      )}
    </React.Fragment>
  );
};

export default MobileNav;
