import "./styles/fifth_page.css"
import React from "react";
import Title from "@/components/ui/Title";
import Spot from "@/components/ui/Spot";


const path=[
    "/csgo.svg",
    "/unity.svg",
    "/ue.svg",
    "/ai.svg",
    "/ps.svg",
    "/ae.svg",
    "/blender.svg",
    "/steam.svg",
    "/office.svg",
    "/firefox.svg",
    "/vs.svg",
    "/opera.svg",
    "/google.svg",
    "/windows.svg",
    "/clion.svg",
]

interface Props{
    img: string,
}

function ProjectImage(props: Props)
{
    return (
        <div className={"main-fifth-img"}>
            <img src={props.img}/>
        </div>
    )
}

export default function FifthPage(){


    return (
        <div id={"main-fifth-page"}>
            <Spot x={50} y={50} width={100} height={100}/>
            <Title id={"main-fifth-title"} text={"Projects on C++"}/>
            <div id={"main-fifth-content"}>
                <p id={"main-fifth-desc"}>C++ is used where maximum performance and control over hardware are important: in game engines, system software, browsers, financial platforms, and embedded devices. It underlies modern games with realistic graphics, operating systems, high‑frequency trading, search engines, and programs for working with 3D graphics and multimedia.</p>
                <div id={"main-fifth-logos"}>
                    {path.map((el, key)=> <ProjectImage img={el} key={key}/>)}
                </div>
            </div>
        </div>
    )
}