module.exports = {
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js', 'nuxt.config.js']
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
