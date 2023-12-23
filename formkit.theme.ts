// formkit.config.ts
import { fr } from '@formkit/i18n'
import { defaultConfig } from '@formkit/vue'
import rootClasses from './formkit.theme'

export default defaultConfig({
  locales: { fr },
  locale: 'fr',
  config: {
    rootClasses
  }
})
