import data from '@/data/language.json'

const configs = data.sort((a, b) => {
  const displayA = a.display ?? 0
  const displayB = b.display ?? 0
  return displayB - displayA
})

export const getAllLangs = () =>
  configs.map((config) => ({
    ...config,
    lang_code: config.lang_code?.toLowerCase()
  }))

export const getAllLangCodes = () => configs.map((config) => config.lang_code?.toLowerCase())

export const getAllLangCodeUpper = () => configs.map((config) => config.lang_code)
