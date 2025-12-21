import "./styles/ide.css"
import React from "react";






interface Props{
    icon: string;
    name: string;
    desc: string;
    children: React.ReactNode;
    only?:string;
}



export default function IDE(props: Props){


    return (
        <div className={"install-ide"}>
            <div className={"ide-icon"}>
                <img src={props.icon}/>
            </div>
            <p className={"ide-h"}>{props.name}</p>
            <p className={"ide-only"}>{props.only}</p>
            <p className={"ide-desc"}>{props.desc}</p>
            <div className={"ide-buttons"}>
                {props.children}

            </div>
        </div>
    )
}