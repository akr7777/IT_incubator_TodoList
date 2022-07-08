import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import Whattodo, {TaskType} from "./components/Whattodo/Whattodo";
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "complited";

function App() {
    /*let myData = {
        whatToLearn: [
            {id: 1, taskText: "HMTL", isDone: true},
            {id: 2, taskText: "CSS", isDone: true},
            {id: 3, taskText: "JS", isDone: false},
            {id: 4, taskText: "React", isDone: false}
        ],
        whatToWatch: [
            {id: 1, taskText: "Armageddon", isDone: true},
            {id: 2, taskText: "The day after tomorrow", isDone: true},
            {id: 3, taskText: "Walking Dead", isDone: false},
            {id: 4, taskText: "Ted Lasso", isDone: false},
            {id: 5, taskText: "5555", isDone: true}
        ],
        whatToListenTo: [
            {id: 1, taskText: "Musicant 1", isDone: true},
            {id: 2, taskText: "Musicant 2", isDone: true},
            {id: 3, taskText: "Musicant 3", isDone: false},
            {id: 4, taskText: "Musicant 4", isDone: false}
        ]
    }*/

    let [tasks, setTasks] = useState< Array<TaskType> >([
        {id: v1(), taskText: "HMTL", isDone: true},
        {id: v1(), taskText: "CSS", isDone: true},
        {id: v1(), taskText: "JS", isDone: false},
        {id: v1(), taskText: "React", isDone: false}
    ]);
    let [filter, setFilter] = useState<FilterValuesType>("all");

    function changeTaskStatus (taskID: string, isDone: boolean) {
        let task = tasks.find(t => t.id === taskID);
        if (task) {
            task.isDone = isDone;
        }
        setTasks([...tasks])

    }
    function removeTask (id: string) {
        let filteredTasks = tasks.filter( t => t.id !== id);
        setTasks(filteredTasks);
    }

    function addTask (newTaskTitle: string) {
        let newTask = {id: v1(), taskText: newTaskTitle, isDone: false};
        let newTasks = [newTask, ...tasks];
        setTasks(newTasks);
    }

    function changeFilter (value: FilterValuesType) {
        setFilter(value);
    }

    let tasksForTodoList = tasks;
    if (filter==="complited") {
        tasksForTodoList = tasks.filter(t => t.isDone === true);
    }
    if (filter==="active") {
        tasksForTodoList = tasks.filter(t => t.isDone === false);
    }

    return (
        <div className={"app_wrapper"}>
            <Header/>
            {/*<Todolist removeTask={removeTask} whatToLearn={myData.whatToLearn} whatToWatch={myData.whatToWatch} whatToListenTo={myData.whatToListenTo}/>*/}
            <Whattodo title={'What to LEARN1:'}
                      tasks={tasksForTodoList}
                      removeTask={removeTask}
                      changeFilter = {changeFilter}
                      addTask = {addTask}
                      changeTaskStatus = {changeTaskStatus}
                      filter = {filter}
            />
            <Footer/>
        </div>
    );
}

export default App;
