/**
 *
 */

'use client'


import "./styles/news.css"


interface Props{
    title: string;
    description: string;
    date: string;
    img: string;
}


export default function News(props: Props){
    return (
        <div className={"news"}>
            <div className={"news-img"}>
                <img src={props.img}/>
            </div>
            <p className={"news-date"}>{props.date}</p>
            <p className={"news-title"}>{props.title}</p>
            <p className={"news-desc"}>{props.description}</p>
        </div>
    )
}