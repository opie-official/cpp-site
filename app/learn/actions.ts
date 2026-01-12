"use server"





import API from "@/lib/db";


export async function GetChapters(){
    console.log(JSON.stringify(API))
    console.log(API.__getChapters)
    return  API.__getChapters();
}

export async function GetLessons(){
    return API.__getLessons();

}

export async function GetLevels(){
    return API.__getLevels();
}