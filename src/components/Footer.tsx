import { Link } from 'gatsby';
import { setLightness } from 'polished';
import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { colors } from '../styles/colors';
import { outer, inner } from '../styles/shared';
import config from '../website-config';

const SiteFooter = css`
  position: relative;
  padding-top: 40px;
  padding-bottom: 40px;
  color: ${colors.grey};
  background: linear-gradient(#fff, ${colors.iceberg} 50%);
`;

const SiteFooterContent = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3rem;
  a {
    color: ${colors.grey};
  }
  a:hover {
    text-decoration: none;
  }
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const SiteFooterNav = styled.nav`
  display: flex;

  a {
    position: relative;
    margin-left: 20px;
  }

  a:before {
    content: '';
    position: absolute;
    top: 11px;
    left: -11px;
    display: block;
    width: 2px;
    height: 2px;
    background: ${colors.grey};
    border-radius: 100%;
  }

  a:first-of-type:before {
    display: none;
  }
  @media (max-width: 650px) {
    a:first-child {
      margin-left: 0;
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <footer css={[outer, SiteFooter]}>
      <div css={[inner, SiteFooterContent]}>
        <section className="copyright">
          <Link to="/">{config.title}</Link> &copy; {new Date().getFullYear()}{' '}
          {config.footer && (
            <Link to="/">
              | {config.title} {config.footer}
            </Link>
          )}
        </section>
        <SiteFooterNav>
          <Link to="/">Latest Posts</Link>
          <Link to="privacy-policy">Privacy Policy</Link>
          {config.facebook && (
            <a href={config.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          )}
          {config.instagram && (
            <a href={config.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          )}
          {config.pinterest && (
            <a href={config.pinterest} target="_blank" rel="noopener noreferrer">
              Pinterest
            </a>
          )}
        </SiteFooterNav>
      </div>
    </footer>
  );
};

export default Footer;
