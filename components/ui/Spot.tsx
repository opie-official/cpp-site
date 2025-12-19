import "./styles/spot.css"



interface Props{
    width: number;
    height: number;
    x: number;
    y: number;
}



export default function Spot(props: Props){



    return (
        <div className={"spot"}
        style={{
            position: "absolute",
            top: `${props.y}%`,
            left: `${props.x}%`,
            width: `${props.width}%`,
            height: `${props.height}%`,
            opacity: 0.75,
        }}
        ></div>
    )
}