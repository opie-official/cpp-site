'use client'
import "./styles/code.css"

interface Props{
    text: string;
    classname?:string;
    visible: boolean;
    setVisible: (i:boolean)=>void;
    width?:number
    height?:number
    margin?:string;
}



export default function Code(props: Props){

    async function click(){
        await navigator.clipboard.writeText(props.text);
        props.setVisible(true);
    }
    return (
        <div className={["code", props.classname].join(" ")}
            style={{
                margin: props.margin&&props.margin,
                background:`#090909`,
                width: props.width?`${props.width}%`: "50%",
                height: props.height?`${props.height}%`: "12%",
                display:"flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                color: "var(--subtitle)",
                font:"12pt 'Roboto Light'",
                padding: "2% 1%"

            }}

             onClick={click}
        >
            <pre>
                <code>
                    {props.text}
                </code>
            </pre>
        </div>
    )
}