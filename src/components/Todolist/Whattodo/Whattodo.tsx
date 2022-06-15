import React from "react";
import s from "./Whattodo.module.css"

type TaskType = {
    id: number,
    taskText: string,
    isDone: boolean
}
type WhattodoPropsType = {
    title: string,
    tasks: Array<TaskType>
}

const Whattodo =(props: WhattodoPropsType) => {

    return(
        <div className={s.elements_conjuction}>
            <h4>{props.title}</h4>
            <div>
                <input/>
                <button>+</button>
            </div>
            <div className={s.tasks}>
                <ul className={s.ul_center}>
                    <li> <input type={"checkbox"} checked={props.tasks[0].isDone} /> {props.tasks[0].taskText} </li>
                    <li> <input type={"checkbox"} checked={props.tasks[1].isDone} /> {props.tasks[1].taskText} </li>
                    <li> <input type={"checkbox"} checked={props.tasks[2].isDone} /> {props.tasks[2].taskText} </li>
                    <li> <input type={"checkbox"} checked={props.tasks[3].isDone} /> {props.tasks[3].taskText} </li>
                </ul>
            </div>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Complited</button>
            </div>
        </div>
    );
}

export default Whattodo;
