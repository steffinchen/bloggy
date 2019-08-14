import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Card, Heading, Text, Box } from 'rebass';
import Img from 'gatsby-image';

const PostPreview = ({ slug, title, date, excerpt, image }) => {
  return (
    <Card
      sx={{
        p: 0,
        pb: 10,
        borderRadius: 5,
        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
      }}
      width={[
        1, // 100% width on small screens
        1 / 2, // 50% width from the next breakpoint and up
        1 / 3, // 33% width from the next breakpoint and up
        1 / 4, // 25% width for all larger breakpoints
      ]}
    >
      <StyledLink to={slug}>
        <StyledImg fluid={image.childImageSharp.fluid} />
        <Box p="25px 25px 0;">
          <Heading as="h3" fontSize="1" color="grey">
            Getting started
          </Heading>
          <Heading as="h3" fontFamily="heading" fontSize="3">
            {title}
          </Heading>
          <Text fontSize={0}>
            <p>{excerpt}</p>
          </Text>
        </Box>
      </StyledLink>
    </Card>
  );
};

const StyledImg = styled(Img)`
  border-radius: 5px 5px 0 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export default PostPreview;
