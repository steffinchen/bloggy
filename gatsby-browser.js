/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import theme from './src/common/theme';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import 'semantic-ui-css/semantic.min.css';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fontFamily};
  }

`;

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        {element}
        <GlobalStyle />
      </React.Fragment>
    </ThemeProvider>
  );
};
