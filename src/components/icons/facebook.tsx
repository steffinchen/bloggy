// tslint:disable:no-http-string
import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Facebook: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "img/facebook-icon.png" }) {
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

// const Facebook: React.FC = () => (
//   <svg
//     version="1.0"
//     xmlns="http://www.w3.org/2000/svg"
//     width="1843.000000pt"
//     height="1843.000000pt"
//     viewBox="0 0 1843.000000 1843.000000"
//     preserveAspectRatio="xMidYMid meet"
//   >
//     <g
//       transform="translate(0.000000,1843.000000) scale(0.100000,-0.100000)"
//       fill="#000000"
//       stroke="none"
//     >
//       <path
//         d="M15192 12130 c4 -76 11 -103 67 -245 163 -420 293 -931 350 -1380 10
// -82 18 -151 17 -152 -1 -1 -49 111 -106 250 -109 266 -233 545 -293 662 l-36
// 70 -1 -82 c0 -77 3 -90 46 -185 200 -444 384 -1036 436 -1403 16 -117 16 -512
// 0 -675 -20 -193 -88 -662 -123 -837 -75 -387 -176 -740 -313 -1099 -41 -108
// -46 -130 -46 -200 1 -53 4 -74 10 -63 25 42 149 365 205 535 162 485 272 1015
// 320 1544 9 96 21 200 27 230 10 49 12 52 18 29 4 -15 16 -112 26 -215 26 -263
// 26 -891 1 -1139 -76 -727 -250 -1374 -538 -2000 l-69 -149 0 -91 1 -90 36 70
// c176 343 367 846 472 1245 152 580 215 1077 215 1695 -1 647 -67 1222 -244
// 2105 -118 590 -195 895 -313 1230 -54 153 -154 410 -164 420 -2 3 -3 -33 -1
// -80z"
//       />
//     </g>
//   </svg>
// );
export default Facebook;
