import React from 'react';
import useScript from './hooks/useScript';

const Ads: React.FC = () => {
  useScript({
    src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    async: true
  });
  useScript({
    innerHtml: '(adsbygoogle = window.adsbygoogle || []).push({});',
    async: false
  });

  return (
    <div>
      <hr />
      <ins
        className="adsbygoogle"
        style={{ display: 'block', margin: '20px' }}
        data-ad-client="ca-pub-9362348170874328"
        data-ad-slot="9294674936"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <hr />
    </div>
  );
};

export default Ads;
