/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import theme from './src/common/theme';
import {
  createGlobalStyle,
  ThemeProvider as SCThemeProvider,
} from 'styled-components';
import { ThemeProvider as EThemeProvider } from 'emotion-theming';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fontFamily};
  }

`;

export const wrapRootElement = ({ element }) => {
  return (
    <SCThemeProvider theme={theme}>
      <EThemeProvider theme={theme}>
        <React.Fragment>
          {element}
          <GlobalStyle />
        </React.Fragment>
      </EThemeProvider>
    </SCThemeProvider>
  );
};

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`);
    console.log(`# IntersectionObserver is polyfilled!`);
  }
};
