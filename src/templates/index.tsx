import { graphql } from 'gatsby';
import * as React from 'react';
import { css } from '@emotion/core';
import Helmet from 'react-helmet';

import Footer from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import SocialLinks from '../components/header/SocialLinks';
import PostCard from '../components/PostCard';
import Wrapper from '../components/Wrapper';
import IndexLayout from '../layouts';
import config from '../website-config';
import Pagination from '../components/Pagination';
import { colors } from '../styles/colors';

import {
  inner,
  outer,
  PostFeed,
  PostFeedRaise,
  SiteHeader,
  SiteHeaderContent,
  SiteMain,
  SiteTitle
} from '../styles/shared';
import { PageContext } from './post';
import styled from '@emotion/styled';

const HomePosts = css`
  @media (min-width: 795px) {
    .post-card:nth-of-type(6n + 1):not(.no-image) {
      flex: 1 1 100%;
      flex-direction: row;
    }

    .post-card:nth-of-type(6n + 1):not(.no-image) .post-card-image-link {
      position: relative;
      flex: 1 1 auto;
      border-radius: 5px 0 0 5px;
    }

    .post-card:nth-of-type(6n + 1):not(.no-image) .post-card-image {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .post-card:nth-of-type(6n + 1):not(.no-image) .post-card-content {
      flex: 0 1 357px;
    }

    .post-card:nth-of-type(6n + 1):not(.no-image) h2 {
      font-size: 2.6rem;
    }

    .post-card:nth-of-type(6n + 1):not(.no-image) p {
      font-size: 1.8rem;
      line-height: 1.55em;
    }

    .post-card:nth-of-type(6n + 1):not(.no-image) .post-card-content-link {
      padding: 30px 40px 0;
    }

    .post-card:nth-of-type(6n + 1):not(.no-image) .post-card-meta {
      padding: 0 40px 30px;
    }
  }
`;

const HeaderInner = styled.div`
  @media (min-width: 900px) {
    padding-bottom: 75px;
  }
`;

export interface IndexProps {
  pageContext: {
    currentPage: number;
    numPages: number;
  };
  data: {
    logo: {
      childImageSharp: {
        fixed: any;
      };
    };
    allMdx: {
      edges: Array<{
        node: PageContext;
      }>;
    };
  };
}

const IndexPage: React.FC<IndexProps> = props => {
  return (
    <IndexLayout css={HomePosts}>
      <Helmet>
        <html lang={config.lang} />
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <meta property="og:site_name" content={config.title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={config.title} />
        <meta property="og:description" content={config.description} />
        <meta property="og:url" content={config.siteUrl} />
        {config.facebook && (
          <meta property="article:publisher" content={config.facebook} />
        )}
        {config.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={config.googleSiteVerification}
          />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.title} />
        <meta name="twitter:description" content={config.description} />
        <meta name="twitter:url" content={config.siteUrl} />
        <meta
          name="p:domain_verify"
          content="47e07120c7c53b44cb0f5aa64c7ea293"
        />
        <script
          data-ad-client="ca-pub-9362348170874328"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </Helmet>
      <Wrapper>
        <header
          css={[outer, SiteHeader]}
          style={{
            background: `linear-gradient(${colors.iceberg}, #fff 60%)`
          }}
        >
          <HeaderInner css={inner}>
            <SiteNav isHome />
            <SiteHeaderContent>
              <SiteTitle>
                {props.data.logo ? (
                  <img
                    style={{ maxHeight: '170px' }}
                    src={props.data.logo.childImageSharp.fixed.src}
                    alt={config.title}
                  />
                ) : (
                  config.title
                )}
              </SiteTitle>
            </SiteHeaderContent>
            <SocialLinks />
          </HeaderInner>
        </header>
        <main id="site-main" css={[SiteMain, outer]}>
          <div css={inner}>
            <div css={[PostFeed, PostFeedRaise]}>
              {props.data.allMdx.edges.map(post => {
                // filter out drafts in production
                return (
                  (post.node.frontmatter.draft !== true ||
                    process.env.NODE_ENV !== 'production') && (
                    <PostCard key={post.node.fields.slug} post={post.node} />
                  )
                );
              })}
            </div>
          </div>
        </main>
        {props.children}
        <Pagination
          currentPage={props.pageContext.currentPage}
          numPages={props.pageContext.numPages}
        />
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    logo: file(relativePath: { eq: "img/logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          timeToRead
          frontmatter {
            title
            date
            tags
            draft
            image {
              childImageSharp {
                fluid(maxWidth: 3720) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            author {
              id
              bio
              avatar {
                children {
                  ... on ImageSharp {
                    fixed(quality: 90) {
                      src
                    }
                  }
                }
              }
            }
          }
          excerpt
          fields {
            layout
            slug
          }
        }
      }
    }
  }
`;
