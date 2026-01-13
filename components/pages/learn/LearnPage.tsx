import {GetChapters, GetLessons, GetLevels} from "@/app/learn/actions"
import FirstPage from "@/components/pages/learn/FirstPage";
import React from "react";
import SecondPage from "@/components/pages/learn/SecondPage";
import "./styles/learn_page.css"
import Chapters from "@/components/pages/learn/Chapters";
import Footer from "@/components/ui/Footer";
import LearnStorage from "@/components/pages/learn/LearnStorage";

export default async function LearnPage() {

    const chapters: IChapter[] = await GetChapters() as IChapter[];
    // console.log(chapters);
    const lessons: ILesson[] = await GetLessons() as ILesson[];
    const levels: ILevel[] = await GetLevels() as ILevel[];
    return (
        <div id={"learn-page"}>
            <LearnStorage chapters={chapters} levels={levels} lessons={lessons}/>
            <Footer/>
        </div>
    )
}