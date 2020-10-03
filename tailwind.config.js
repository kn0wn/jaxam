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
      grey: '#F1EFEF',
      white: '#ffffff',
      green: {
        default: '#00A86B',
        dark: '#0D3C44'
      }
    }
  },
  variants: {
    cursor: ['responsive', 'disabled'],
    backgroundColor: ['dark', 'hover', 'disabled'],
    borderColor: ['dark', 'active', 'focus', 'disabled'],
    textColor: ['dark', 'hover', 'active', 'disabled'],
    opacity: ['dark', 'hover', 'active', 'focus', 'disabled']
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  },
  experimental: {
    darkModeVariant: true,
    applyComplexClasses: true,
    uniformColorPalette: true,
    extendedSpacingScale: true,
    defaultLineHeights: true,
    extendedFontSizeScale: true
  },
  dark: 'class'
}
