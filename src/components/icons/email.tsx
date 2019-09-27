// tslint:disable:no-http-string
import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Email: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "img/email-icon.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return <img style={{ maxHeight: '50px' }} src={data.img.childImageSharp.fixed.src} />;
};

export default Email;
