import { useState } from 'react';

import { Navbar } from '../navbar/navbar';
import { StatusBar } from '../../statusBar/statusBar';
import { Task } from '../../task/task';
import { InsertField } from '../../insertField/insertField';

import styles from './section.module.css';

interface taskType {
    id: number;
    title: string;
    details: string;
    status: string;
    start?: string;
    end?: string;
}

export const Section = (props: React.PropsWithChildren<{}>) => {
    const [tasks, setTasks] = useState<taskType[]>([
        { id: 0, title: 'Sample Task', details: 'This is a sample task detail.', status: '0', start: '2023-01-01', end: '2023-01-05' },
        { id: 1, title: 'Another Task', details: 'This is another task detail.', status: '1', start: '2023-01-06', end: '2023-01-10' },
        { id: 2, title: 'Third Task', details: 'This is the third task detail.', status: '2', start: '2023-01-11', end: '2023-01-15' },
        { id: 3, title: 'Fourth Task', details: 'This is the fourth task detail.', status: '3', start: '2023-01-16', end: '2023-01-20' }
    ]);

    const [visible, setVisible] = useState<boolean>(true);
    const [title, setTitle] = useState<string>("");
    const [details, setDetails] = useState<string>("");
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");


    /**
     * Handlers for Drag and Drop functionality
     * apply to StatusBar and Task components
     * date: 2025-12-18
     */

    const handleDragStatus = (event: React.DragEvent<HTMLDivElement>, idx: number) => {
        event.dataTransfer.setData("id", String(idx));
    }

    const handleOverStatus = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    }

    const handleDropStatus = (event: React.DragEvent<HTMLDivElement>, status: string) => {
        event.preventDefault();
        const idx = Number(event.dataTransfer.getData("id"));
        setTasks(prev => prev.map(task => task.id === idx ? { ...task, status } : task));
    }

    const handleRightClickStatus = (task: taskType) => {
        tasks.map(t => {
            if (t.id === task.id) return t.status = String((Number(t.status) + 1) % 4);
            return t;
        });
        setTasks([...tasks]);
    }

    const handleLeftClickStatus = (task: taskType) => {
        tasks.map(t => {
            if (t.id === task.id) return t.status = String((Number(t.status) + 3) % 4);
            return t;
        });
        setTasks([...tasks]);
    }

    /***
     * Handlers for Navbar buttons
     * apply to insert, filter, and sort tasks
     * date: 2025-12-20
     */

    const handleInsertTask = () => {
        setVisible(!visible);
    }

    const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const handleDetails = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDetails(event.target.value);
    }

    const handleStartDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStartDate(event.target.value);
    }

    const handleEndDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEndDate(event.target.value);
    }



    const handleSaveClick = () => {
        const newTask: taskType = {
            id: tasks.length,
            title: title,
            details: details,
            status: '0',
            start: startDate,
            end: endDate
        }
        setTasks([...tasks, newTask]);
        setVisible(false);
    }

    const handleFilterTask = () => {
        console.log("Filter button clicked");
    }

    const handleSortTask = () => {
        console.log("Sort button clicked");
    }


    return (
        <div className={styles["section"]}>
            <Navbar onClickInsert={handleInsertTask} onClickFilter={handleFilterTask} onClickSort={handleSortTask} />
            <div className={styles["task-field"]}>
                <StatusBar status='To Do' onDragOver={handleOverStatus} onDrop={(event) => { handleDropStatus(event, '0') }}>
                    {
                        visible ? <InsertField onhandleSaveClick={handleSaveClick} onhandleStartDate={handleStartDate} onhandleEndDate={handleEndDate} onhandleTitle={handleTitle} onhandleDescription={handleDetails} /> : null
                    }
                    {
                        tasks.filter(task => task.status === '0').map(task => (
                            <Task key={task.id} left={true} title={task.title} details={task.details} onDragStart={(event) => handleDragStatus(event, task.id)} onRightClick={(event) => { handleRightClickStatus(task) }} />
                        ))
                    }
                </StatusBar>
                <StatusBar status='In Progress' onDragOver={handleOverStatus} onDrop={(event) => { handleDropStatus(event, '1') }}>
                    {
                        tasks.filter(task => task.status === '1').map(task => (
                            <Task key={task.id} title={task.title} details={task.details} onDragStart={(event) => handleDragStatus(event, task.id)} onLeftClick={(event) => { handleLeftClickStatus(task) }} onRightClick={(event) => { handleRightClickStatus(task) }} />
                        ))
                    }
                </StatusBar>
                <StatusBar status='Review' onDragOver={handleOverStatus} onDrop={(event) => { handleDropStatus(event, '2') }}>
                    {
                        tasks.filter(task => task.status === '2').map(task => (
                            <Task key={task.id} title={task.title} details={task.details} onDragStart={(event) => handleDragStatus(event, task.id)} onLeftClick={(event) => { handleLeftClickStatus(task) }} onRightClick={(event) => { handleRightClickStatus(task) }} />
                        ))
                    }
                </StatusBar>
                <StatusBar status='Done' onDragOver={handleOverStatus} onDrop={(event) => { handleDropStatus(event, '3') }}>
                    {
                        tasks.filter(task => task.status === '3').map(task => (
                            <Task key={task.id} title={task.title} right={true} details={task.details} onDragStart={(event) => handleDragStatus(event, task.id)} onLeftClick={(event) => { handleLeftClickStatus(task) }} />
                        ))
                    }
                </StatusBar>
            </div>
        </div>
    );
};