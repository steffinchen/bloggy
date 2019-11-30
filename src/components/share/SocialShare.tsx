import React from 'react';
import styled from '@emotion/styled';

import config from '../../website-config';
import FacebookIcon from '../../content/svg/facebook.svg';
import EmailIcon from '../../content/svg/email.svg';
import TwitterIcon from '../../content/svg/twitter.svg';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  svg {
    height: 28px;
    border-radius: 4px;
  }
`;

const shareButtonDefault = `
    border-radius: 4px;
    color: white;
    padding-right: 10px;
`;

const Email = styled.div`
  background-color: #6d6e71;
  ${shareButtonDefault}
`;

const Facebook = styled.div`
  background-color: #4d67a4;
  ${shareButtonDefault}
`;

const Twitter = styled.div`
  background-color: #26a7df;
  ${shareButtonDefault}
`;

interface SocialShareProps {
  postPath: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ postPath }) => {
  const postUrl = config.siteUrl + postPath;
  setTimeout(() => {
    if (window && window.PinUtils) {
      // this replaces the below pinterest link with the actual save buttton
      // hover save buttons on images work without this, but the save button at the
      // bottom of the page only shows up when reloading the page so calling
      // this build method explicitly seems to help
      window.PinUtils.build();
    }
  }, 500);
  return (
    <Container>
      <a
        href="https://www.pinterest.com/pin/create/button/"
        data-pin-round={false}
        data-pin-do="buttonBookmark"
        data-pin-tall="true"
        data-pin-url={postUrl}
        target="blank"
        rel="nofollow noopener noreferrer"
      >
        Pin it
      </a>
      <a
        target="blank"
        rel="nofollow noopener noreferrer"
        href={`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`}
      >
        <Facebook>
          <FacebookIcon />
          Share
        </Facebook>
      </a>
      <a
        target="blank"
        rel="nofollow noopener noreferrer"
        href={`http://www.twitter.com/share?url=${postUrl}`}
      >
        <Twitter>
          <TwitterIcon />
          Tweet
        </Twitter>
      </a>
      <a
        href={`mailto:?subject=Check out this post from SkillfullyTangled!&body=${postUrl}`}
        target="blank"
        rel="nofollow noopener noreferrer"
      >
        <Email>
          <EmailIcon />
          <span>Email</span>
        </Email>
      </a>
    </Container>
  );
};

export default SocialShare;
