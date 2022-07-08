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
    changeTaskStatus: (taskID: string, isDone: boolean) => void,
    filter: FilterValuesType,
}
const Whattodo = (props: WhatTodo1PropsType) => {

    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [error, setError] = useState<string | null>(null)

    const newTaskTitleOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value);
    }

    const addNewTask = () => {
        if (newTaskTitle.trim() !== '') {
            props.addTask(newTaskTitle);
            setNewTaskTitle("");
        } else {
            setError('Field is required!!!')
        }
    }
    const newTaskTitleOnEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.charCode === 13) {
            addNewTask()
        }
    }
    const newTaskTitleMouseClickAddTask = () => {
        addNewTask()
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
                       className={ error ? "error" : ""}
                />
                <button onClick={newTaskTitleMouseClickAddTask}>+</button>
                { error && <div className="error_message">{error}</div> }
            </div>
            <div className={s.tasks}>
                <ul className={s.ul_center}>
                    {props.tasks.map(el => {

                        const onRemoveHandler = () => {
                            props.removeTask(el.id)
                        }
                        const onCheckBoxClickHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            //console.log(e.currentTarget.checked)
                            props.changeTaskStatus(el.id, e.currentTarget.checked);
                        }

                        return <li key={el.id} className={el.isDone ? "is_done" : ""}>
                            <input type={"checkbox"} checked={el.isDone} onChange={(e) => {onCheckBoxClickHandler(e)}}/>
                            <span>{el.taskText}</span>
                            <button onClick={() => {onRemoveHandler()} }>X</button>
                        </li>
                    })}
                </ul>
            </div>
            <div>
                <button className={props.filter === 'all' ? "active_filter" : ""}
                        onClick={() => {
                    changeFilterTo('all')
                }}>All
                </button>
                <button className= {props.filter === 'active' ? "active_filter" : ""}
                        onClick={() => {
                    changeFilterTo("active")
                }}>Active
                </button>
                <button className={props.filter === 'complited' ? "active_filter" : ""}
                        onClick={() => {
                    changeFilterTo("complited")
                }}>Complited
                </button>
            </div>
        </div>
    );
}

export default Whattodo;
