interface ILesson {
    id: number;
    chapter: number;
    title: string;
    text_: string;
    description: string;
}


interface IChapter {
    id: number;
    title: string;
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
    isActive?:boolean
}