'use client'
import "./styles/second_page.css"
import * as fs from "node:fs";
import React from "react";
import Button from "@/components/ui/Button";


const books=[
    "/literature1.png",
    "/literature2.png",
    "/literature3.png",
    "/literature4.png",
]
interface BookProps{
    src: string;
}


function Book(props: BookProps){


    return (
        <div className={"learn-second-book"}>
            <img src={props.src}/>
        </div>
    )
}




export default function SecondPage(){


    return (
        <div id={"learn-second-page"}>
            <div id={"learn-second-annotation"}>For training, you can use the following literature</div>
            <div id={"learn-second-literature"}>
                {books.map((el,key)=><Book src={el} key={key}/>)}
            </div>
            <div id={"learn-second-playground"}>
                <p id={"learn-second-playground-p"}>You can use the playground to write code.</p>
                <Button id={"learn-second-bt"} text={"Join the Playground"} path={"/playground"}/>
            </div>
        </div>
    )
}