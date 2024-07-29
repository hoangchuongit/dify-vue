import { createI18n } from 'vue-i18n'
import { getConfigValue } from './composables/config'
import { CoreConfigKey, DEFAULT_LANGUAGE } from './constants/common'
import { getAllLangCodes } from './composables/language'

const langCodes = getAllLangCodes()
const messages: any = {}

for (const code of langCodes) {
  const locale = await import(`./locales/${code.toLowerCase()}.json`).catch(() => {})
  messages[code] = { ...locale }
}

const defaultLang = getConfigValue(CoreConfigKey.defaultLang, DEFAULT_LANGUAGE).toLowerCase()

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: defaultLang,
  fallbackLocale: DEFAULT_LANGUAGE,
  messages
})

export default i18n
