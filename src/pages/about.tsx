import * as React from 'react';
import { css } from '@emotion/core';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';

import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import SocialLinks from '../components/header/SocialLinks';
import { colors } from '../styles/colors';
import { graphql } from 'gatsby';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const StyledImage = styled.img`
  float: right;
  border-radius: 50%;
  margin-left: 10px !important;
  margin-top: 0 !important;
`;

interface AboutProps {
  data: {
    img: {
      childImageSharp: { fixed: any };
    };
  };
}

const About: React.FC<AboutProps> = ({ data }) => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header
        css={[outer, SiteHeader]}
        style={{
          background: `linear-gradient(${colors.iceberg}, #fff 80%)`,
        }}
      >
        <div css={inner}>
          <SiteNav />
          <SocialLinks />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>About</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <StyledImage src={data.img.childImageSharp.fixed.src} alt="Portrait" />
              <p>
                Hi, I am Steffi! I am the maker behind SkillfullyTangled and I love all things yarn
                related. I first learned to knit and crochet when I was in elementary school,
                although I didn't stick with it for very long.
              </p>
              <p>
                About four years ago I decided to get back into crochet, mainly to crochet some
                stuffed balls for our little kittens. From there I ventured more into amigurumi -
                the Japanese art of creating 3-dimensional objects with crochet - and hats and
                scarves. But one needs only so many teddy bears and hearts, and I wanted to make
                more wearables like sweaters and socks. I decided to give knitting another go, and
                thanks to online tutorials and videos (isn't the internet great!) I knitted my first
                hat!
              </p>
              <p>
                I totally caught the bug, and and since then I've rarly put my needles down. I've
                dabbled in dying yarn as well, and hope to do more of that soon. At some point I am
                also intrigued in trying out weaving and spinning.
              </p>
              <p>
                In my spare time I also enjoy reading: mainly crime novels, whodunnits and
                thrillers. Some of my favorite authors are Agatha Christie, Anthony Horowitz and
                Harlan Coben.
              </p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export const pageQuery = graphql`
  query {
    img: file(relativePath: { eq: "img/me.jpg" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default About;
