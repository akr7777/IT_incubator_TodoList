import React from "react";
import s from "./Todolist.module.css";
import Whattodo from "./Whattodo/Whattodo";

export const Todolist = (props: any) => {

    let whatToLearn = [
        {id: 1, taskText: "HMTL", isDone: true},
        {id: 2, taskText: "CSS", isDone: true},
        {id: 3, taskText: "JS", isDone: false},
        {id: 4, taskText: "React", isDone: false}
    ]

    let whatToWatch = [
        {id: 1, taskText: "Armageddon", isDone: true},
        {id: 2, taskText: "The day after tomorrow", isDone: true},
        {id: 3, taskText: "Walking Dead", isDone: false},
        {id: 4, taskText: "Ted Lasso", isDone: false}
    ]

    let whatToListenTo = [
        {id: 1, taskText: "Musicant 1", isDone: true},
        {id: 2, taskText: "Musicant 2", isDone: true},
        {id: 3, taskText: "Musicant 3", isDone: false},
        {id: 4, taskText: "Musicant 4", isDone: false}
    ]

    return (
        <div className={s.list_wrapper}>
            <h2>Plans:</h2>
            <div className={s.mytodolist}>
                <Whattodo title="What to Learn:" tasks={whatToLearn}/>
                <Whattodo title="What to Watch:" tasks={whatToWatch}/>
                <Whattodo title="What to Listen to:" tasks={whatToListenTo}/>
            </div>
        </div>
    );
}