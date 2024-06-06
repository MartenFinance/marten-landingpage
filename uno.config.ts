import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      darknavi: '#0c0c4f',
    },
    container: {
      screens: {
        sm: '425px',
        sm1: '576px',
        md: '768px',
        lg: '992px',
        lg1: '1200px',
        xl: '1440px',
        '2xl': '1920px',
        '3xl': '2560px',
      },
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.75rem',
        sm1: '2.5rem',
        lg: '3rem',
        xl: '6rem',
        '2xl': '11rem',
        '3xl': '31rem',
      },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
