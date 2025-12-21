import {useEffect, useState} from "react";
import {motion} from "framer-motion"

interface Props {
    visible: boolean;
    text: string;
    setVisible: (i: boolean) => void;
}

export default function Alert(props: Props) {

    const [state, setState] = useState(0);


    const key = `${props.visible}-${state}`;

    return (
        props.visible &&
        <motion.div
            key={key}
            style={{
                position: "fixed",
                width: "20%",
                height: "10%",
                left: "40%",
                zIndex: 100
            }}

            animate={{
                top: state == 0 ? ["100%", "85%"] : ["85%", "100%"]
            }}
            transition={{
                duration: 0.2,
                delay: state==1? 0.7: 0,
                ease: "easeInOut",
            }}
            onAnimationComplete={
                () => {
                    if (state === 1) {
                        setState(0);
                        props.setVisible(false)
                    }else  {
                        setState(1)
                    }
                }
            }

        >
            <div style={{
                width: "100%",
                height: "100%",
                background: "rgba(20,20,20,0.7)",
                color: "white",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems:"center"
            }}>
                {props.text}
            </div>
        </motion.div>

    )
}