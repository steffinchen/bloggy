import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Box } from 'rebass';
import Layout from '../components/layout';

export default ({ data }) => {
  const {
    html,
    frontmatter: { title, image },
  } = data.markdownRemark;
  let featuredImgFluid = image.childImageSharp.fluid;
  console.log('TCL: featuredImgFluid', featuredImgFluid);
  return (
    <Layout>
      <h1>{title}</h1>
      <Box width="200px">
        <Img fluid={featuredImgFluid} />
      </Box>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
