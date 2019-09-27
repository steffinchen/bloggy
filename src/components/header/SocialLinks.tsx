import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import config from '../../website-config';
import Facebook from '../icons/facebook';
import Instagram from '../icons/instagram';
import SubscribeModal from '../subscribe/SubscribeOverlay';
import Email from '../icons/email';

const SocialLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (min-width: 500px) {
    margin-top: -50px;
  }
`;

const SubscribeButton = styled.a`
  display: block;
  padding: 4px 10px;
  border: #fff 1px solid;
  color: #fff;
  font-size: 1.2rem;
  line-height: 1em;
  border-radius: 10px;
  opacity: 0.8;

  :hover {
    text-decoration: none;
    opacity: 1;
    cursor: pointer;
  }
`;

const Icon = css`
  opacity: 1;
  :hover {
    opacity: 0.8;
  }
`;

class Social extends React.Component {
  subscribe = React.createRef<SubscribeModal>();

  openModal = () => {
    if (this.subscribe.current) {
      this.subscribe.current.open();
    }
  };

  render() {
    return (
      <SocialLinks>
        {config.instagram && (
          <a
            css={Icon}
            href={config.instagram}
            title="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
        )}
        {config.facebook && (
          <a
            css={Icon}
            href={config.facebook}
            target="_blank"
            title="Facebook"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
        )}
        {config.email && (
          <a css={Icon} href={'mailto:' + config.email} title="Email" rel="noopener noreferrer">
            <Email />
          </a>
        )}

        {config.showSubscribe && (
          <SubscribeButton onClick={this.openModal}>Subscribe</SubscribeButton>
        )}
        {config.showSubscribe && <SubscribeModal ref={this.subscribe} />}
      </SocialLinks>
    );
  }
}

export default Social;
