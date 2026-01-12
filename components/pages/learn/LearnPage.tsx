import {GetChapters, GetLessons, GetLevels} from "@/app/learn/actions"
import FirstPage from "@/components/pages/learn/FirstPage";
import React from "react";
import SecondPage from "@/components/pages/learn/SecondPage";
import "./styles/learn_page.css"
import Chapters from "@/components/pages/learn/Chapters";
import Footer from "@/components/ui/Footer";

export default async function LearnPage() {

    const chapters: IChapter[] = await GetChapters() as IChapter[];
    console.log(chapters);
    const lessons: ILesson[] = await GetLessons() as ILesson[];
    const levels: ILevel[] = await GetLevels() as ILevel[];
    return (
        <div id={"learn-page"}>
            <div id={"learn-inner"}>
                <FirstPage chapters={chapters.length}/>
                <SecondPage/>
                <div id={"learn-levels"}
                style={{
                    width: "100%",
                    height: "5%",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    gap: "5%"
                }}
                >
                    {
                        levels.map((el,key)=>{
                            return <div key={key}
                                style={{
                                    width: "10%",
                                    height: "100%",
                                    display:"flex",
                                    alignItems:"center",
                                    justifyContent:"center",
                                    gap: "5%"
                                }}
                            >
                                <div
                                style={{
                                    background: el.color,
                                    borderRadius:"100%",
                                    height: "2vh",
                                    aspectRatio: "1/1"
                                }}
                                ></div>
                                <div style={{color: "white"}}>{el.level_name}</div>
                            </div>
                        })

                    }
                </div>
                <Chapters levels={levels} chapters={chapters} lessons={lessons}/>
            </div>
            <Footer/>
        </div>
    )
}