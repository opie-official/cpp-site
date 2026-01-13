import "./styles.css"
import NavBar from "@/components/ui/NavBar";
import {getLessonsById} from "@/app/learn/lesson/actions";
import {GetLessons, GetLevels} from "@/app/learn/actions"
import {Metadata} from "next";
import LessonPage from "@/components/pages/lesson/LessonPage"
import React from "react";


interface Props {
    searchParams: {
        lesson: string;
    }
}

export async function generateMetadata(props: Props): Promise<Metadata> {
    const {lesson} = await props.searchParams;
    const data = await getLessonsById(+lesson) as ILesson;
    return {
        title: `${data.title}`
    }
}

/*

const myTheme = {
    'code[class*="language-"]': {
        color: '#f8f8f2',
        background: '#090909',
        fontFamily: 'Jetbrains Mono, monospace',
        fontSize: '16px',
    },
    'pre[class*="language-"]': {
        background: "#090909",
        padding: "5% 3%",
        margin: "5% 0",
        borderRadius: " 15px",
    },
    'keyword': {color: '#ffa223', fontWeight: 'bold'},
    'string': {color: '#f1fa8c'},
    'function': {color: '#50fa7b'},
    'comment': {color: '#6272a4', fontStyle: 'italic'},
    'token.preprocessor': { color: '#8be9fd', fontWeight: 'bold' }, // препроцессор
};

*/

export default async function Lesson(props: Props) {

    const {lesson} = await props.searchParams;

    const levels = await GetLevels() as ILevel[];

    let lessons: ILesson[] = await GetLessons() as ILesson[]

    let lesson_: ILesson = await getLessonsById(+lesson) as ILesson;

    return (<div id={"lesson-page"}>
            <NavBar type={"Learn"}/>
            <LessonPage levels={levels} lesson={+lesson} lessons={lessons} lesson_={lesson_}/>
        </div>
    )
}