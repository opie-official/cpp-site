import "./styles.css"
import List from "@/components/ui/List";
import NavBar from "@/components/ui/NavBar";
import Option from "@/components/ui/Option";
import React from "react";
import Page from "@/components/pages/example/Page";
import API from "@/lib/db";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import ExampleContent from "@/components/pages/example/ExampleContent";
import Button from "@/components/ui/Button";
import {Metadata} from "next";




interface Props{
    searchParams:{
        example: string;
    }
}




export async function generateMetadata(props: Props){
    const {example}=await props.searchParams;
    const data = await API.__getExampleById(+example) as IExample;
    return {
        title: `${data.title}`
    }
}
export default async function Example(props: Props){

    const {example} = await props.searchParams;

    // const data = await API.__getExampleById(+example) as IExample;
    const rows = await API.__getExamples() as IExample[];
    const data = rows.find(el=>el.id==+example);
    const next = rows.find(el=>el.id==+example+1);
    const prev = rows.find(el=>el.id==+example-1);
    return (
        <div id={"example-page"}>
            <NavBar/>
            <div id={"example-scroll"}>
                {data?<ExampleContent id={example} data={data}/>
                : <p
                    style={{
                        height: "80vh",
                        font: "20pt Roboto",
                        color: "white",
                        display: "flex",
                        alignItems:"center",
                        justifyContent:"center",
                        flexDirection:"column"
                    }}
                    >Nothing to show</p>
                }
            </div>
            <div id={"example-buttons"}>
                { (rows.length>1)?
                    <>
                        <Button text={prev? `${prev.title}`:"Go to examples"} path={prev? `/examples/example?example=${prev.id}`: `/examples`}/>
                        <Button text={next? `${next.title}`:"Go to examples"} path={next? `/examples/example?example=${next.id}`: `/examples`}/>
                    </>
                    :
                    <Button text={"Go to examples"} path={`/examples`}/>


                }
            </div>
            <Footer is={false} />
        </div>
    )
}