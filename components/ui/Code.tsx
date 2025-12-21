'use client'


interface Props{
    text: string;
    classname?:string;
    visible: boolean;
    setVisible: (i:boolean)=>void
}



export default function Code(props: Props){

    async function click(){
        await navigator.clipboard.writeText(props.text);
        props.setVisible(true);
    }
    return (
        <div className={["code", props.classname].join(" ")}
            style={{
                background:"var(--bg)",
                width: "50%",
                height: "12%",
                display:"flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                color: "var(--subtitle)",
                font:"12pt 'Roboto Light'",
                paddingLeft: "1%"

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