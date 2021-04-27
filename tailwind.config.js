const colors = {
  ...{
    main: {
      400: '#46B325',
      500: '#3d9d20'
    },
    yellow: {
      400: '#FFB600'
    },
    red: {
      400: '#E02322'
    },
    gray: {
      100: '#F7F7F7',
      200: '#F2F2F2',
      300: '#DDDDDD',
      400: '#B0B0B0',
      500: '#717171',
      600: '#484848',
      700: '#404040',
      800: '#222222'
    },
    white: '#FFFFFF',
    black: '#000000',
    facebook: '#1877f2'
  }
}

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors
  },
  variants: {
    extend: {}
  },
  plugins: []
}
