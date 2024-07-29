import data from '@/data/core.json'

const configs = data

export const getConfigValue = (key: string, defaultVal = '') =>
  configs.find((config) => config.key === key)?.value || defaultVal
