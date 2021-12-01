import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
       en: {
           translation: {
               appName: "Magazine",
               goBack: 'Go Back home',
               abbreviation: 'Raised to future awareness',
               notFound: {
                   title: 'OOPS! Page Not Found',
                   desc: 'We are sorry, but the page you requested was not found',
               },
               menu: {
                   news: "News",
                   sport: "Sport",
                   article: "Article",
                   business: "Business",
                   education: "Education",
                   technology: "Technology",
                   outOfArmenia: "Out of Armenia",
               },
               footer: {
                   copyright: "© Copyright 2022",
                   allRights: "All rights reserved"
               }
           }
       }
    },
    lng: 'en',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
