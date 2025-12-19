/**
 *
 */

import "./styles/second_page.css"
import React from "react";
import Title from "@/components/ui/Title";
import News from "@/components/ui/News";
import Button from "@/components/ui/Button";
import Spot from "@/components/ui/Spot";


const news = [
    {
        title: "Title",
        description: "роятно быстр и эффективен по использованию памяти: без рантайма или  сборщика мусора он может обеспечить работу критичных для  производительности сервисов, запускаться на встраиваемых устройствах и ",
        img: "null",
        date: Date.now()
    },
    {
        title: "Title",
        description: "роятно быстр и эффективен по использованию памяти: без рантайма или  сборщика мусора он может обеспечить работу критичных для  производительности сервисов, запускаться на встраиваемых устройствах и ",
        img: "null",
        date: Date.now()
    },
    {
        title: "Title",
        description: "роятно быстр и эффективен по использованию памяти: без рантайма или  сборщика мусора он может обеспечить работу критичных для  производительности сервисов, запускаться на встраиваемых устройствах и ",
        img: "null",
        date: Date.now()
    },
    {
        title: "Title",
        description: "роятно быстр и эффективен по использованию памяти: без рантайма или  сборщика мусора он может обеспечить работу критичных для  производительности сервисов, запускаться на встраиваемых устройствах и ",
        img: "null",
        date: Date.now()
    },

]
const months: { [key: number]: string } = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
}


function refreshDate(dat: number) {
    const date = new Date(dat);
    const month = months[(date.getMonth() > 12 ? 12 : date.getMonth()) + 1];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}th, ${year}`;
}


export default function SecondPage() {

    const posts = news.slice(0, 4).map((el)=> {
        return {
            title: el.title,
            description: el.description,
            img: el.img,
            date: refreshDate(el.date)
        }
    });


    return (
        <div id={"main-second-page"}>
            <Spot x={40} y={50} width={100} height={100} />
            <Title text={"Latest News"}/>
            <div id={"main-second-news"}>
                {posts.map((el, i)=><News key={i} {...el}/>)}
            </div>
            <Button id={"main-blog-button"} text={"Our Blog"} path={"/blog"}/>
        </div>
    )
}