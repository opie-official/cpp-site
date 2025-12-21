import "./styles/sections.css"
import React from "react";


interface Props{
    children?: React.ReactNode;
    name: string;
}

export default function List(props: Props){
    return (
        <div className={"install-section-list"}>
            <p className={"install-section-pos"}>{props.name}</p>
            {props.children}
        </div>
    )
}

