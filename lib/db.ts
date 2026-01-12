import Database from "better-sqlite3"
// import {Sequelize, DataTypes, Deferrable} from "sequelize"
import path from "path"
import "dotenv/config"

const db_path = path.join(process.cwd(), "lib/data", "database.db");

let db: Database.Database;

/*

const app = new Sequelize(`${process.env["DB"]}`, `${process.env["USER"]}`, `${process.env["PASSWORD"]}`, {
    host: `${process.env["HOST"]}`,
    port: +`${process.env["PORT"]??0}`,
    dialect:"postgres"
});
(async()=>{
    await app.authenticate()
    await app.sync()
})()


const Chapters = app.define("chapters", {
        id: {type: DataTypes.INTEGER, primaryKey: true},
        title: {type: DataTypes.TEXT, allowNull: false},
    },
    {tableName: "chapters", timestamps: false})
const Examples = app.define("examples", {
        id: {type: DataTypes.INTEGER, primaryKey: true},
        title: {type: DataTypes.TEXT, allowNull: false},
        desc: {type: DataTypes.TEXT, allowNull: false},
        text_: {type: DataTypes.TEXT, allowNull: false},
    },
    {
        timestamps: false,
        tableName: "examples",
    })

const Lessons = app.define("lessons", {
        id: {type: DataTypes.INTEGER, primaryKey: true},
        chapter: {
            type: DataTypes.INTEGER, allowNull: false, references: {
                model: "chapters",
                key: "id",
                //@ts-ignore
                deferrable: Deferrable.INITIALLY_IMMEDIATE
            }
        },
        title: {type: DataTypes.TEXT, allowNull: false},
        text_: {type: DataTypes.TEXT, allowNull: false},
        description: {type: DataTypes.TEXT, allowNull: false}
    },
    {
        timestamps: false,
        tableName: "lessons",
    })

*/
/*

import { Sequelize, DataTypes, Deferrable } from "sequelize";

const globalForSequelize = globalThis as unknown as {
    sequelize?: Sequelize;
    sequelizeReady?: Promise<Sequelize>;
};

export const app =
    globalForSequelize.sequelize ??
    new Sequelize(process.env.DB!, process.env.USER_DB!, process.env.PASSWORD!, {
        host: process.env.HOST,
        port: Number(process.env.PORT ?? 5432),
        dialect: "postgres",
        logging: (msg) => console.log("[sequelize]", msg),
        // если у тебя локальный postgres — ssl обычно выключен
        dialectOptions: { ssl: false },

        pool: { max: 1, min: 0, idle: 10000, acquire: 30000 },
    });

if (process.env.NODE_ENV !== "production") {
    globalForSequelize.sequelize = app;
}

export const Chapters = app.define(
    "chapters",
    {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        title: { type: DataTypes.TEXT, allowNull: false },
    },
    { tableName: "chapters", timestamps: false }
);

export const Examples = app.define(
    "examples",
    {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        title: { type: DataTypes.TEXT, allowNull: false },
        desc: { type: DataTypes.TEXT, allowNull: false },
        text_: { type: DataTypes.TEXT, allowNull: false },
    },
    { tableName: "examples", timestamps: false }
);

export const Lessons = app.define(
    "lessons",
    {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        chapter: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "chapters",
                key: "id",
                // @ts-ignore
                deferrable: Deferrable.INITIALLY_IMMEDIATE,
            },
        },
        title: { type: DataTypes.TEXT, allowNull: false },
        text_: { type: DataTypes.TEXT, allowNull: false },
        description: { type: DataTypes.TEXT, allowNull: false },
    },
    { tableName: "lessons", timestamps: false }
);

export async function ensureDb() {
    if (!globalForSequelize.sequelizeReady) {
        await app.authenticate();
        globalForSequelize.sequelizeReady = (async () => {
            // await app.sync();
            return app;
        })();
    }
    return globalForSequelize.sequelizeReady;
}

*/

/*

namespace API {


    export const __getChapters = async () => {
        await ensureDb();
        return await Chapters.findAll({raw: true});
    }
    export const __getLessons = async () => {
        await ensureDb();
        return await Lessons.findAll({raw: true});
    }
    export const __getExamples=async ()=> {
        await ensureDb();
        return await Examples.findAll({raw: true});
    }

    export const __getChapterById=async(id: number)=> {
        await ensureDb();
        return await Chapters.findOne({where: {id: id}, raw: true});
    }
    export const __getLessonById=async(id: number)=> {
        await ensureDb();
        return await Lessons.findOne({where: {id: id}, raw: true});
    }
    export const __getExampleById=async(id: number)=> {
        await ensureDb();
        return await Examples.findOne({where: {id: id}, raw: true});
    }
    export const __getLessonsByChapter=async(chap: number)=> {
        await ensureDb();
        return await Lessons.findAll({where: {chapter: chap}, raw: true})
    }

}
*/










namespace API {

    export function __getChapters() {
        db = new Database(db_path);
        const data = db.prepare("SELECT * FROM chapters").all();
        db.close()

        return data;
    }

    export function __getLessons() {
        db = new Database(db_path);
        const data = db.prepare("SELECT * FROM lessons").all();
        db.close()
        return data;
    }


    export function __getChapterById(id: number) {
        db = new Database(db_path);
        const res = db.prepare("SELECT * FROM chapters WHERE id=?");
        const data = res.run(id);
        db.close()
        return data;
    }

    export function __getLessonsByChapter(chapter: number) {
        db = new Database(db_path);
        const res = db.prepare("SELECT * FROM lessons WHERE chapter=?")
        const res2 = res.run(chapter);
        const data = db.prepare("SELECT * FROM lessons WHERE chapter=?").get(res2.lastInsertRowid);
        db.close()
        return data;
    }

    export function __getLessonsById(id1: number) {
        db = new Database(db_path);
        const data = db.prepare("SELECT * FROM lessons WHERE id=?").get(id1)
        db.close()
        return data;

    }

    export function __getExamples() {
        db = new Database(db_path);
        const res = db.prepare("SELECT * FROM examples").all();
        db.close();
        return res;
    }

    export function __getExampleById(id: number) {
        db = new Database(db_path);
        const res = db.prepare("SELECT * FROM examples WHERE id=?").get(id);
        db.close();
        return res;
    }

    export function __getLevels(){
        db = new Database(db_path);
        const res = db.prepare("SELECT * FROM lesson_levels").all();
        db.close();
        return res;
    }
}
export default API;
