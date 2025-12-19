import "./styles/create_info.css"


interface Props{
    title: string,
    text: string;
    img: string;
}

export default function CreateInfo(props: Props){
    return (
        <div className={"create-info"}>
            <div className={"create-info-logo"}>
                <div className={"create-info-img"}>
                    <img src={props.img}/>

                </div>
                <p className={"create-info-title"}>{props.title}</p>
            </div>
                <p className={"create-info-text"}>{props.text}</p>
        </div>
    )
}
