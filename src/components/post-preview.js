import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Card, Heading, Text } from 'rebass';
import Img from 'gatsby-image';

const PostPreview = ({ slug, title, date, excerpt, image }) => {
  return (
    <Card
      p={10}
      borderRadius="5px"
      boxShadow="0 0 16px rgba(0, 0, 0, .25)"
      width={[
        1, // 100% width on small screens
        1 / 2, // 50% width from the next breakpoint and up
        1 / 3, // 33% width from the next breakpoint and up
        1 / 4, // 25% width for all larger breakpoints
      ]}
    >
      <StyledLink to={slug}>
        <Img fluid={image.childImageSharp.fluid} />
        <Heading as="h3" fontFamily="heading" fontSize="3">
          {title}
        </Heading>
        <Text fontSize={0}>
          <div>{date}</div>
          <p>{excerpt}</p>
        </Text>
      </StyledLink>
    </Card>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export default PostPreview;
