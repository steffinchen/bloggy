export default {
  colors: {
    background: '#fff',
    primary: '#0075A2',
    text: '#000',
    secondary: '#00F4BB',
    tertiary: '#752434',
    muted: '#f6f6f9',
    gray: '#dddddf',
  },
  fontFamily: 'sans-serif',
  breakpoints: ['40em', '52em', '64em'],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Poppins", sans-serif',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    avatar: 48,
  },
  radii: {
    default: 4,
    circle: 99999,
  },
  shadows: {
    card: '0 0 4px rgba(0, 0, 0, .125)',
  },
  // rebass variants
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    display: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: [5, 6, 7],
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
  },
  variants: {
    avatar: {
      width: 'avatar',
      height: 'avatar',
      borderRadius: 'circle',
    },
    card: {
      p: 2,
      bg: 'background',
      boxShadow: 'card',
    },
    link: {
      color: 'primary',
    },
    nav: {
      fontSize: 2,
      fontFamily: 'heading',
      fontWeight: 'bold',
      p: 2,
      color: 'inherit',
      textDecoration: 'none',
      ':hover,:focus,.active': {
        color: 'primary',
      },
    },
  },
  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: 'bold',
      color: 'background',
      bg: 'primary',
      borderRadius: 'default',
    },
    outline: {
      variant: 'buttons.primary',
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 2px',
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'background',
      bg: 'secondary',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
  },
};
