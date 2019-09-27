import { graphql, Link, StaticQuery } from 'gatsby';
import * as React from 'react';
import { css } from '@emotion/core';

import config from '../../website-config';

const SiteNavLogoStyles = css`
  img {
    width: auto;
    height: 40px;
    margin-right: 10px;
    z-index: 1;
  }
`;

interface SiteNavLogoProps {
  logo?: {
    childImageSharp: {
      fixed: any;
    };
  };
}

const SiteNavLogo = () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        logo: file(relativePath: { eq: "img/badge.png" }) {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    // tslint:disable-next-line:react-this-binding-issue
    render={(data: SiteNavLogoProps) => (
      <Link className="site-nav-logo" css={SiteNavLogoStyles} to="/">
        {data.logo ? (
          <img src={data.logo.childImageSharp.fixed.src} alt={config.title} />
        ) : (
          config.title
        )}
      </Link>
    )}
  />
);

export default SiteNavLogo;
