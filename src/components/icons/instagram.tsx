// tslint:disable:no-http-string
import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Instagram: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "img/instagram-icon.png" }) {
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

// const InstagramIcon: React.FC = () => (
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
//         d="M15720 12299 c0 -61 7 -87 46 -187 125 -315 268 -811 329 -1147 25
// -138 68 -445 63 -451 -2 -1 -28 57 -57 129 -124 303 -245 581 -310 712 l-69
// 140 -1 -82 c-1 -77 2 -87 50 -195 184 -405 364 -975 425 -1343 23 -136 26
// -564 6 -750 -81 -738 -207 -1307 -413 -1856 -68 -180 -70 -189 -67 -265 l3
// -79 81 205 c249 625 395 1249 454 1930 13 151 30 247 40 229 5 -8 16 -95 26
// -194 27 -256 27 -945 1 -1185 -78 -715 -243 -1328 -529 -1959 l-79 -175 3 -85
// 3 -85 64 129 c327 665 537 1387 620 2140 91 809 30 1655 -200 2808 -118 596
// -192 890 -309 1232 -54 158 -169 455 -176 455 -2 0 -4 -32 -4 -71z"
//       />
//     </g>
//   </svg>
// );
export default Instagram;
