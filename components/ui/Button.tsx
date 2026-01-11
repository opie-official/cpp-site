'use client'

import "./styles/button.css"
import React from "react";
import Link from "next/link";

interface Props {
    text: string;
    path: string;
    id?: string
    classname?: string;
    transparent?: boolean;
}


export default function Button(props: Props) {
    return (
        <Link id={props.id} className={["button", props.classname].join(" ")} href={props.path}>
            <button>
                <div className={"button-bg"}></div>
                <span className={"button-text"}>{props.text}</span>
            </button>
        </Link>

    )
}