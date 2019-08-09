/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react';
//import preset from '@rebass/preset';
import theme from './src/common/theme';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fontFamily};
  }
`;

export const wrapRootElement = ({ element }) => {
  console.log('wrapRootElement', theme);
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        {element}
        <GlobalStyle />
      </React.Fragment>
    </ThemeProvider>
  );
};
