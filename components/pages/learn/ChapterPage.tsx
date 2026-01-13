'use client'

import "./styles/chapter_page.css"
import React from "react";
import Lesson from "@/components/ui/Lesson";



interface Props{
    num: number;
    title: string;
    lessons: ILesson[];
    levels: ILevel[];
    complete: number[];
    setComplete:React.Dispatch<React.SetStateAction<number[]>>
}



export default function ChapterPage(props: Props) {
    return (
        <div className={"chapter-page"}>
            <div className={"chapter-name"}>{props.num} Chapter: {props.title}</div>
            <div className={"chapter-lessons"}>
                <div className={"chapter-flex"}>
                    {props.lessons.length>0?props.lessons.map((el, key)=>
                            <Lesson
                                contains={props.complete.includes(el.id)}
                                setComplete={props.setComplete}
                                level={props.levels[el.level-1]}
                                num={key}
                                id={el.id}
                                lesson={el}
                                key={key}/>
                        )
                        :
                        <p style={{
                            color: "var(--subtitle)",
                            fontSize:"20pt"
                        }}>Nothing to show</p>
                    }
                </div>

            </div>
        </div>
    )
}