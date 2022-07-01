import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from "./Whattodo.module.css"
import {FilterValuesType} from "../../App";

export type TaskType = {
    id: string,
    taskText: string,
    isDone: boolean
}

type WhatTodo1PropsType = {
    title: string,
    tasks: Array<TaskType>,
    removeTask: (id: string) => void,
    changeFilter: (value: FilterValuesType) => void,
    addTask: (newTaskTitle: string) => void,
}
const Whattodo = (props: WhatTodo1PropsType) => {
    const [newTaskTitle, setNewTaskTitle] = useState("");

    const newTaskTitleOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value);
    }
    const newTaskTitleOnEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            props.addTask(newTaskTitle);
            setNewTaskTitle("");
        }
    }
    const newTaskTitleMouseClickAddTask = () => {
        props.addTask(newTaskTitle);
        setNewTaskTitle("");
    }
    /*const removeTaskMouseClick = (idToRemove: string) => {
        props.removeTask(idToRemove)
    }*/
    const changeFilterTo = (filter: FilterValuesType) => {
        props.changeFilter(filter)
    }

    return (
        <div className={s.elements_conjuction}>
            <h4>{props.title}</h4>
            <div>
                <input value={newTaskTitle}
                       onChange={newTaskTitleOnChangeHandler}
                       onKeyPress={newTaskTitleOnEnter}
                />
                <button onClick={newTaskTitleMouseClickAddTask}>+
                </button>
            </div>
            <div className={s.tasks}>
                <ul className={s.ul_center}>
                    {props.tasks.map(el => {

                        const onRemoveHandler = () => {
                            props.removeTask(el.id)
                        }

                        return <li key={el.id}>
                            <input type={"checkbox"} checked={el.isDone}/>
                            <span>{el.taskText}</span>
                            <button onClick={() => {onRemoveHandler()} }>X</button>
                        </li>
                    })}
                </ul>
            </div>
            <div>
                <button onClick={() => {
                    changeFilterTo('all')
                }}>All
                </button>
                <button onClick={() => {
                    changeFilterTo("active")
                }}>Active
                </button>
                <button onClick={() => {
                    changeFilterTo("complited")
                }}>Complited
                </button>
            </div>
        </div>
    );
}

export default Whattodo;
