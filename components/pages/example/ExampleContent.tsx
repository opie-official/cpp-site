'use client'
import "./styles/example-content.css"

import Link from "next/link";
import Page from "@/components/pages/example/Page";
import React, {useEffect} from "react";
import Button from "@/components/ui/Button";

interface Props{
    id: string;
    data: IExample;
    rows: IExample[]
}

function Aside(props: {id:string}){

    const [articles, setArticles] = React.useState<AsideArticleEx[]>([]);

    useEffect(() => {
        const list: AsideArticleEx[]=[]
        const root = document.getElementById("example-in") as HTMLDivElement;
        const h = [...root.querySelectorAll("h1")];
        for (let i of h){
            list.push({
                id: i.id,
                title: i.textContent
            })
        }
        setArticles(list)

    }, [props.id]);

    return (
        <aside id={"example-aside"}>
            <div id={"example-aside-in"}>
                {articles.map((el,key)=>{
                    return <a className={"example-a"} key={key} href={`/examples/example?example=${props.id}#${el.id}`}>{el.title}</a>
                })}
            </div>
        </aside>
    )
}


export default function ExampleContent(props: Props){


    const {data, id, rows}=props;


    return (
        <div id={"example-content"}>
            <Aside id={id}/>
            <Page rows={rows} id={id} text={data.text_}/>

        </div>

    )


}