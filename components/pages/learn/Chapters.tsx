'use client'
import "./styles/chapters.css"
import ChapterPage from "@/components/pages/learn/ChapterPage";
import React, {useEffect} from "react";


interface Props {
    chapters: IChapter[]
    lessons: ILesson[];
    levels: ILevel[];
    complete: number[];
    setComplete: React.Dispatch<React.SetStateAction<number[]>>;
    last: number;
    setLast: React.Dispatch<React.SetStateAction<number>>;
}

interface ILessons {
    [key: number]: ILesson[];
}


export default function Chapters(props: Props) {


    const lessons_filter: ILessons = []
    for (let i = 0; i < props.chapters.length; i++) {
        lessons_filter[i] = props.lessons.filter((el) => el.chapter == props.chapters[i].id);
    }
    return (
        <div id={"learn-chapters"}>
            {props.chapters.map((el, key) => {
                return <ChapterPage {...props} levels={props.levels} lessons={lessons_filter[key]} key={key} num={el.id} title={el.title}/>
            })}
        </div>
    )
}