import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import {en} from "./En";
import {es} from "./Es";

const resources = {
    es: {
        translation: es
    },
    en: {
        translation: en
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng: 'es'
});

export default i18n;