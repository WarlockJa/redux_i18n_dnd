import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import I18NextHttpBackend from 'i18next-http-backend'

i18next
    .use(initReactI18next)
    .use(I18NextHttpBackend)
    .init({
        // debug: true,
        fallbackLng: 'en'
    })