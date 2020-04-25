import React from 'react';
import wakImg from '../content/img/ambassadors-970x250-EN.gif';

const WAKAmbassador: React.FC = () => {
  return (
    <div>
      <a
        href="https://www.weareknitters.com/?utm_campaign=ambassadors&utm_medium=website&utm_source=AMBASSADOR_93425"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        <img src={wakImg} data-pin-nopin="true" />
      </a>
    </div>
  );
};

export default WAKAmbassador;
