import "./styles/title.css"


interface Props{
    text: string;
    id?: string;
}


export default function Title(props: Props){
    return (
        <div id={props.id} className={"title"}>
            {props.text}
        </div>
    )
}
