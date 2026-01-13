'use client'
import "./styles/lesson.css"

import Link from "next/link";
import React, {useState} from "react";

interface LessonProps {
    num: number;
    lesson: ILesson;
    level: ILevel;
    contains: boolean;
    setComplete: React.Dispatch<React.SetStateAction<number[]>>;
    setLast: React.Dispatch<React.SetStateAction<number>>;
    id:number;
}


export default function Lesson(props: LessonProps) {
    const [visible, setVisible] = useState(false);
    return (
        <Link href={`/learn/lesson?lesson=${props.lesson.id}`} className={"lesson-page"}
              style={{
                  opacity: props.contains ? 0.5 : 1,
              }}
        >
            <div onClick={()=>{
                props.setLast(props.id)
                props.setComplete(prev=>{
                    const res=[...prev];
                    res.push(props.id)
                    return [...new Set(res)];
                })
            }}

                className={"lesson-page-in"}>
                <div className={"lesson-top"}>
                    <div className={"lesson-top-num"}>{props.num+1}</div>
                    <p className={"lesson-top-title"}>{props.lesson.title}</p>
                </div>
                <div className={"lesson-desc"}>{props.lesson.description}</div>
                <div
                    onMouseEnter={() => setVisible(true)}
                    onMouseLeave={() => setVisible(false)}
                    style={{
                        background: props.level.color,
                        width: visible? "50%":"",
                        height: "15%",
                        aspectRatio: visible?"":"1/1",
                        left: visible?"55%":"95%",
                        borderRadius:visible?"20px":"100%",

                    }}
                    className={"lesson-top-level"}>
                    <div style={{
                        color:"black",
                        display: "flex",
                        justifyContent:"center",
                        alignItems:"center",
                        flexDirection:"column",
                        visibility: visible ? "visible" : "hidden",
                    }}>{props.level.level_name}</div>
                </div>
            </div>
        </Link>

    )
}
