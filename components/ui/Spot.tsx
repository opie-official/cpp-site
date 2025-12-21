import "./styles/spot.css"



interface Props{
    width: number;
    height: number;
    x: number;
    y: number;
    is?:boolean;
    rotation?:number;
}



export default function Spot(props: Props){



    return (
        <div className={"spot"}
        style={{
            position: !props.is?"absolute":"relative",
            top: `${props.y}%`,
            left: `${props.x}%`,
            width: `${props.width}%`,
            height: `${props.height}%`,
            opacity: 0.75,
            rotate:`${props.rotation}deg`
        }}
        ></div>
    )
}