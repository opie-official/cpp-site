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
    const [complete, setComplete]=useState<number[]>(() => {
        if (typeof window === 'undefined') return [];
        const data = localStorage.getItem('lessons');
        return data ? JSON.parse(data) : []
    }
    )
    // useEffect(() => {
    //     const data = localStorage.getItem("lessons");
    //     if (!data){
    //         return
    //     }
    //     setComplete([...JSON.parse(data)].map(el=>+el))
    //     console.log(localStorage)
    // });

    useEffect(() => {
        const data = [...complete];
        console.log("complete", data)
        localStorage.setItem("lessons", JSON.stringify(data));
    }, [complete]);

    return (
        <div id={"learn-inner"}>
            <FirstPage chapters={chapters.length}/>
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
            <Chapters complete={complete} setComplete={setComplete} levels={levels} chapters={chapters} lessons={lessons}/>
        </div>
    )
}