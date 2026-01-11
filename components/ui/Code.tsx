'use client'
import "./styles/code.css"
import {useState} from "react";
import CodeParser from "@/components/ui/CodeParser";

interface Props{
    text: string;
    classname?:string;
    visible: boolean;
    setVisible: (i:boolean)=>void;
    width?:number
    height?:number
    margin?:string;
    isCpp?:boolean
}



export default function Code(props: Props){

    const [btVisible, setBtVisible]=useState(false)

    async function click(){
        await navigator.clipboard.writeText(props.text);
        props.setVisible(true);
    }
    function enter(){
        setBtVisible(true);
    }
    function leave(){
        setBtVisible(false)
    }
    return (
        <div className={["code", props.classname].join(" ")}
            style={{
                position:"relative",
                margin: props.margin&&props.margin,
                background:`#090909`,
                width: props.width?`${props.width}%`: "50%",
                height: props.height?`${props.height}%`: "12%",
                display:"flex",
                justifyContent: "start",
                alignItems: "center",
                color: "var(--subtitle)",
                font:"12pt 'Roboto Light'",
                padding: "2% 2%",
                borderRadius:"10px"

            }}
             onMouseEnter={enter}
             onMouseLeave={leave}
        >
            <div className={"code-in"}>
                <pre>
                <code>
                    {props.isCpp? <CodeParser text={props.text}/>:props.text}
                </code>
            </pre>
            </div>
            <button className={btVisible?"code-bt": "code-bt code-bt-hidden"} onClick={click}>
                <img src={"/copy.svg"}/>
            </button>
        </div>
    )
}