import "./styles/fourth_page.css"
import React from "react";
import Title from "@/components/ui/Title";
import CreateInfo from "@/components/ui/CreateInfo";
import Spot from "@/components/ui/Spot";


interface Info{
    title: string,
    text: string;
    img: string;
}


const info: Info[]=[
    {
        title:"System Software",
        text:"OS (Windows, Linux), drivers and compilers (GCC) use C++ for memory control and high speed",
        img:"/system.svg",
    },
     {
        title:"Game",
        text:"Game engines and games: 2D and 3D games, engines with heavy graphics, physics and network logic.",
        img:"/game.svg",
    },
     {
        title:"Network software",
        text:"Servers, MySQL, Google — millions of requests with minimal latency.",
        img:"/network.svg",
    },
     {
        title:"Microcontrollers",
        text:"Game engines and games: 2D and 3D games, engines with heavy graphics, physics and network logic.",
        img:"/micro.svg",
    },
     {
        title:"Science",
        text:"NASA simulations, big data parallelism, and Eigen libraries.",
        img:"science.svg",
    },

]



export default function FourthPage(){
    return (
        <div id={"main-fourth-page"}>
            <Spot x={0} y={0} width={100} height={100}/>
            <Title text={"Create with C++"}/>
            <div id={"main-fourth-info"}>
                {info.map((el,key)=><CreateInfo {...el} key={key}/>)}
            </div>
        </div>
    )
}