'use client'

import "./styles/button.css"
import React from "react";
import Link from "next/link";


interface Props{
    text: string;
    path: string;
    id?:string
}



export default function Button(props: Props){
    return (
        <Link id={props.id} className={"button"} href={props.path}>
            <button>
                {props.text}
            </button>
        </Link>

    )
}