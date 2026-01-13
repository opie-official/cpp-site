'use client'

import FirstPage from "@/components/pages/learn/FirstPage";
import SecondPage from "@/components/pages/learn/SecondPage";
import Chapters from "@/components/pages/learn/Chapters";
import React, {useEffect, useState} from "react";

interface Props{
    chapters: IChapter[];
    levels: ILevel[];
    lessons: ILesson[];
}


export default function LearnStorage(props: Props) {
    const {chapters, lessons, levels}=props;
    const [complete, setComplete] = useState<number[]>([]);
    const [last, setLast]=useState<number>(-1);
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        const raw = localStorage.getItem('lessons');
        const raw2 = localStorage.getItem("last")
        if (raw) {
            setComplete(JSON.parse(raw));
        }
        if (raw2){
            setLast(JSON.parse(raw2))
        }
        setHydrated(true);
    }, []);

    useEffect(() => {
        if (!hydrated) return;
        localStorage.setItem('lessons', JSON.stringify(complete));
    }, [complete, hydrated]);

    useEffect(() => {
        if (!hydrated)return;
        localStorage.setItem("last", JSON.stringify(last));
    }, [hydrated, last]);

    if (!hydrated){
        return <div id={"learn-inner"}></div>
    }

    return (
        <div id={"learn-inner"}>
            <FirstPage last={last} chapters={chapters.length}/>
            <SecondPage/>
            <div id={"learn-levels"}
                 style={{
                     width: "100%",
                     height: "5%",
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "center",
                     gap: "5%"
                 }}
            >
                {
                    levels.map((el, key) => {
                        return <div key={key}
                                    style={{
                                        width: "10%",
                                        height: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "5%"
                                    }}
                        >
                            <div
                                style={{
                                    background: el.color,
                                    borderRadius: "100%",
                                    height: "2vh",
                                    aspectRatio: "1/1"
                                }}
                            ></div>
                            <div style={{color: "white"}}>{el.level_name}</div>
                        </div>
                    })

                }
            </div>
            <Chapters last={last} setLast={setLast} complete={complete} setComplete={setComplete} levels={levels} chapters={chapters} lessons={lessons}/>
        </div>
    )
}