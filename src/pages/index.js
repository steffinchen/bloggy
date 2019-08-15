import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostPreview from '../components/post-preview';
import { Flex } from 'rebass';

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;

const IndexPage = props => {
  const data = props.data;

  console.log(data.allMarkdownRemark.edges[0].node.frontmatter.image);

  return (
    <Layout>
      <SEO title="Home" />
      <Flex
        justifyContent="space-evenly"
        flexWrap="wrap"
        sx={{ margin: '0 -5px' }}
      >
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostPreview
            key={node.id}
            slug={node.fields.slug}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
            image={node.frontmatter.image}
          />
        ))}
      </Flex>
    </Layout>
  );
};

export default IndexPage;
