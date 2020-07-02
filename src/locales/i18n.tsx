// Translations
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import Backend from 'i18next-chained-backend';
import LocalStorageBackend from 'i18next-localstorage-backend'; // primary use cache
import XHR from 'i18next-xhr-backend';
// fallback xhr load
i18n.use(Backend)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        ns: ['common', 'app'],
        defaultNS: 'translation',
        fallbackLng: 'en',
        fallbackNS: 'translation',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        saveMissing: false, // do not send not translated keys to endpoint
        lng: 'fin',
        backend: {
            backends: [
                LocalStorageBackend, // primary
                XHR, // fallback
            ],
            backendOptions: [
                {
                    /* below options */
                    // prefix for stored languages
                    prefix: 'i18next_res_',

                    // expiration
                    expirationTime: 60 * 10,

                    // language versions
                    versions: { version: '0.1' },

                    // can be either window.localStorage or window.sessionStorage. Default: window.localStorage
                    store: window.localStorage,
                },
                {
                    loadPath: '/public/locales/{{lng}}/{{ns}}.json', // xhr load path for my own fallback
                },
            ],
        },
        // special options for react-i18next
        // learn more: https://react.i18next.com/components/i18next-instance
        react: {
            useSuspense: false,
            wait: true,
        },
    });

export default i18n;
