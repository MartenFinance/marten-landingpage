import {
  defineConfig,
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
  },
  presets: [presetUno(), presetTypography(), presetWebFonts()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
