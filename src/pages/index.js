import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostPreview from '../components/post-preview';

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
            image
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

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h1>Amazing Pandas Eating Things</h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
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
      </div>
    </Layout>
  );
};

export default IndexPage;
