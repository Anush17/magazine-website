import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                the: "The",
                appName: "Magazine",
                loading: 'Loading...',
                goBack: 'Go Back home',
                abbreviation: 'International news',
                notFound: {
                    title: 'OOPS! Page Not Found',
                    desc: 'We are sorry, but the page you requested was not found',
                },
                privacy: {
                    note: "Թարմացվել և ուժի մեջ է մտնում 2022թ. մայիսի 3-ից",
                },
                menu: {
                    news: " Լուրեր",
                    sport: "Սպորտ",
                    about: "Մեր մասին",
                    terms: "Օգտագործման պայմանները",
                    faq: "ՀՏՀ",
                    privacy: "Գաղտնիության քաղաքականություն",
                    music: "Տեսանյութեր",
                    business: "Տնտեսություն",
                    fun: "Ժամանց",
                    technology: "ՏՏ ոլորտ",
                },
                footer: {
                    allRights: "© {{date}} Բոլոր իրավունքները պաշտպանված են",
                },
                faq: {
                    title: "Հաճախակի տրվող հարցեր",
                    desc: "Պատասխանել ենք բոլոր հաճախակի տրվող հարցերին: \n Դեռ շփոթված ե՞ք. Ազատ զգացեք կապվել մեզ հետ:"
                },
                newsletter: {
                    placeholder: "որոնել նորություններ",
                    subscribe: "ԲԱԺԱՆՈՐԴԱԳՐՈՒԹՅՈՒՆ",
                    title: "Բաժանորդագրվեք մեր տեղեկագրին",
                    desc: "«Magazine»-ի տեղեկագրերը անվճար են: Գրանցվելու համար նշեք այն տեղեկագրերի մոտ գտնվող վանդակները, որոնք կցանկանայիք ստանալ: Բաժանորդագրությունը չեղյալ հայտարարելու համար տե՛ս էլեկտրոնային տեղեկագրի ստորին մասում գտնվող հրահանգները:",
                    notSpam: "Ոչ մի սպամ, մենք հոգում ենք ձեր տվյալների պաշտպանության մասին: \n Կարդացեք մեր "
                },
                titles: {
                    sections: "Բաժիններ",
                    todaysNews: "Todays News",
                    trending: "Շաբաթվա ամենաընթերցվածը",
                    sport: "Սպորտ",
                    recommended: "Recommended",
                    legacy : "Ստույգ տեղեկություններ",
                    more: "You may also be interested in:"
                },
                technology: {
                    desc: "How new technology is transforming cities and societies, from the latest apps to advances in renewable energy, computing, transportation, and more."
                },
                business: {
                    desc: "The Magazine's coverage of business and finance: the stock market, the economy, companies behaving badly, and more."
                },
                blog: {
                    title: "Blog",
                    subTitle: "Blogs that are loved by the community. Updated every hour.",
                    desc: "The powerful gravity waves resulting from the impact of the planets, were finally resolved in 2022"
                },
                about: {
                    desc: "Կայքում հրապարակված տեղեկատվության հեղինակային իրավունքը պատկանում է բացառապես «Magazine» լրատվական գործակալությանը: Բոլոր հրապարակումները նախատեսված են անհատական օգտագործման համար:\n" +
                        "Այլ լրատվամիջոցներում ցանկացած նյութի ամբողջական կամ մասնակի վերարտադրման համար պահանջվում է գրավոր թույլտվություն ստանալ «Արմենպրես» լրատվական գործակալությունից։ Հեղինակային իրավունքի խախտում թույլ տված անձինք կամ կազմակերպությունները կենթարկվեն պատասխանատվության օրենքով սահմանված կարգով։\n" +
                        "Կայքում արտահայտված կարծիքները պարտադիր չէ, որ համընկնեն կայքի խմբագրության տեսակետի հետ:\n" +
                        "Գովազդների բովանդակության համար կայքը պատասխանատվություն չի կրում:",
                   title: "Գործակալության մասին"
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
