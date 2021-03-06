import {useMemo, useState} from "react";
import {useTranslation} from "react-i18next";

import SportBg from "../../assets/images/gallery/sport-cover-bg.avif";
import SkeletonLoading from "../../components/SkeletonLoading";
import CallToAction from "../../components/CallToAction";
import Newsletter from "../../components/Newsletter";
import Marquee from "../../components/Marquee";
import Cards from "../../components/Cards";
import Title from "../../components/Tilte";
import Hero from "../../components/Hero";

const Sport = () => {
    const {t} = useTranslation();
    const [isLoading, setLoading] = useState(false);
    const sports = [
        {
            id: 1,
            link: "/news",
            type: t('news.item_6.type'),
            date: t('news.item_6.date'),
            title: t('sportBlog.text_1'),
            thumbnail: "https://images.unsplash.com/photo-1635710444991-f0f913392129?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
            caption: t('sportBlog.desc_1'),
            hashtags: [
                t('news.item_6.hashtags.tag_1'),
            ],
            description: t('news.item_6.desc'),
        },
        {
            id: 2,
            link: "/news",
            type: t('news.item_6.type'),
            date: t('news.item_6.date'),
            title: t('sportBlog.text_2'),
            thumbnail: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190",
            caption: t('sportBlog.desc_2'),
            hashtags: [
                t('news.item_6.hashtags.tag_1'),
            ],
            description: t('news.item_6.desc'),
        },
        {
            id: 3,
            link: "/news",
            type: t('news.item_6.type'),
            date: t('news.item_6.date'),
            title: t('sportBlog.text_3'),
            thumbnail: "https://images.unsplash.com/flagged/photo-1574786351749-2c2b5984a541?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
            caption: t('sportBlog.desc_3'),
            hashtags: [
                t('news.item_6.hashtags.tag_1'),
            ],
            description: t('news.item_6.desc'),
        },
    ];

    const content = useMemo(() => {
        if (isLoading) {
            return <SkeletonLoading/>
        }

        if (sports) {
            return (
                <>
                    <Title
                        title={t('blog.title')}
                        classnames="text-red-600 pt-16"
                    />
                    <p className="px-4">{t('blog.subTitle')}</p>
                    <Cards items={sports}/>
                </>
            )
        }

        return null;
    }, [isLoading, sports]);

    return (
        <>
            <div className="py-14 lg:py-3 lg:pt-12 max-w-layout">
                <Hero bg={SportBg} desc={t('sport.desc')} link="https://www.panarmenian.net/arm/news/299435/" />
            </div>
            <Marquee/>
            <div className="max-w-layout">
                <Newsletter/>
                {content}
                <CallToAction/>
            </div>
        </>
    );
}

export default Sport;
