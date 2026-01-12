interface ILesson {
    id: number;
    chapter: number;
    title: string;
    text_: string;
    description: string;
    lang: string;
    level: number;
}
interface ILevel{
    id: number;
    level_name: string;
    color: string;
}

interface IChapter {
    id: number;
    title: string;
    number: number;
    lang: string;

}


interface IExample {
    id: number;
    title: string;
    desc: string;
    text_: string;
}


interface AsideArticle {
    id: string;
    title: string;
    isActive?:boolean;
    level: number;
    top: number;
}