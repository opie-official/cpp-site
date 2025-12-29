import "./styles.css"
import StartPage from "@/components/pages/examples/StartPage";
import {Metadata} from "next";
import React from "react";
import Spot from "@/components/ui/Spot";





export const metadata: Metadata={
    title: "Examples of C++"
}

export default function Examples(){


    return (
        <div id={"examples-page"}>
            <Spot width={100} height={100} x={60} y={-50}/>
            <StartPage/>

        </div>
    )
}


