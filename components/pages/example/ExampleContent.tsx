'use client'
import "./styles/example-content.css"

import Link from "next/link";
import Page from "@/components/pages/example/Page";
import React from "react";

interface Props{
    id: string;
    data: IExample;
}


export default function ExampleContent(props: Props){

    // const [articles, setArticles] = React.useState<IArticle[]>([]);

    const {data, id}=props;
    return (
        <div id={"example-content"}>
            <aside id={"example-aside"}>

            </aside>
            <Page text={data.text_}/>
        </div>

    )


}