import React from 'react';
import { Box, Link, Flex } from 'rebass';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Box
      backgroundColor="#ECECEC"
      pt="20px"
      px="20px"
      pb="60px"
      mt="20px"
      mb="-8px"
      mx="-8px"
      fontSize="0"
    >
      <footer>
        <Flex justifyContent="space-between">
          <div>© {new Date().getFullYear()} SkillfullyTangled</div>
          <div>
            <StyledLink
              href="http://instagram.com"
              sx={{ fontFamily: 'heading' }}
            >
              Instagram
            </StyledLink>
            <StyledLink href="http://facebook.com">Facebook</StyledLink>
            <StyledLink href="http://wwww.skillfullytangled.com">
              SkillfullyTangled
            </StyledLink>
          </div>
        </Flex>
      </footer>
    </Box>
  );
};

const StyledLink = styled(Link)`
  margin-left: 20px !important;
  color: black !important;
  text-decoration: none;
`;

export default Footer;
