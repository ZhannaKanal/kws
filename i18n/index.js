import en from './json/en.json'
import ru from './json/ru.json'
import kz from './json/kz.json'


export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'ru',
    messages: {
      en,
      ru,
      kz,
    }
  }))