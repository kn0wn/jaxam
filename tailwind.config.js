module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./index.html', './src/**/*.vue', './src/**/*.js', './src/**/*.ts']
  },
  theme: {
    fontFamily: {
      display: 'Ballpoint Signature'
    },
    colors: {
      transparent: 'transparent',
      grey: '#F2E5E3',
      white: '#ffffff',
      green: {
        default: '#00A86B',
        dark: '#0D3C44'
      }
    }
  },
  variants: {},
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  },
  experimental: {
    applyComplexClasses: true
  }
}
