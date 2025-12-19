import "./styles/aspect.css"



interface Props{
    title: string;
    text: string;
}


export default function Aspect(props: Props){


    return (
        <div className={"aspect"}>
            <p className={"aspect-title"}>{props.title}</p>
            <p className={"aspect-text"}>{props.text}</p>
        </div>
    )
}