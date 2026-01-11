import "./styles.css"
import NavBar from "@/components/ui/NavBar";
import React from "react";
import API from "@/lib/db";
import ExampleContent from "@/components/pages/example/ExampleContent";





interface Props{
    searchParams:{
        example: string;
    }
}




// @ts-ignore
export async function generateMetadata(props: Props): Promise<{title: string}>{
    const {example}=await props.searchParams;
    const data = await API.__getExampleById(+example) as IExample;
    return {
        title: `${data.title}`
    }
}
export default async function Example(props: Props){

    const {example} = await props.searchParams;

    const rows = await API.__getExamples() as IExample[];
    const data = rows.find(el=>el.id==+example);




    return (
        <div id={"example-page"}>
            <NavBar type={"Examples"}/>
                {data?<ExampleContent rows={rows} id={example} data={data}/>
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

            {/*<Footer is={false} />*/}
        </div>
    )
}