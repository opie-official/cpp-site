import "./styles/sections.css"
import React from "react";


interface Props{
    children?: React.ReactNode;
    name: string;
}

export default function Option(props: Props){
    return (
        <div className={"install-section-option"}>
            <p className={"install-section-pos-sub"}>{props.name}</p>
            {props.children}
        </div>
    )
}