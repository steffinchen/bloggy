import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Card, Heading, Text, Image } from 'rebass';
import GImage from './image';

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
      <Image src={'../images/' + image} />
      <GImage name={image} />
      <Link to={slug}>
        <Heading as="h3">{title}</Heading>
        <Text fontSize={0}>
          <StyledDate>{date}</StyledDate>
          <p>{excerpt}</p>
        </Text>
      </Link>
    </Card>
  );
};

const StyledDate = styled.div``;

// const Box = styled.div`
//   border: 1px solid grey;
//   -moz-border-radius: 10px;
//   -webkit-border-radius: 10px;
//   border-radius: 10px;
//   margin: 10px;
//   padding: 10px;
//   max-width: 200px;
// `;

export default PostPreview;
