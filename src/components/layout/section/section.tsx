import { useState } from 'react';

import { StatusBar } from '../../statusBar/statusBar';
import { Task } from '../../task/task';

import styles from './section.module.css';

interface taskType {
    id: number;
    title: string;
    details: string;
    status: string;
}

export const Section = (props: React.PropsWithChildren<{}>) => {
    const [tasks, setTasks] = useState<taskType[]>([
        { id: 0, title: 'Sample Task', details: 'This is a sample task detail.', status: 'To Do' },
        { id: 1, title: 'Another Task', details: 'This is another task detail.', status: 'In Progress' },
        { id: 2, title: 'Third Task', details: 'This is the third task detail.', status: 'Review' },
        { id: 3, title: 'Fourth Task', details: 'This is the fourth task detail.', status: 'Done' }
    ]);

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

    return (
        <div className={styles["section"]}>
            <StatusBar status='To Do' onDragOver={handleOverStatus} onDrop={(event) => { handleDropStatus(event, 'To Do') }}>
                {
                    tasks.filter(task => task.status === 'To Do').map(task => (
                        <Task key={task.id} title={task.title} details={task.details} onDragStart={(event) => handleDragStatus(event, task.id)} />
                    ))
                }
            </StatusBar>
            <StatusBar status='In Progress' onDragOver={handleOverStatus} onDrop={(event) => { handleDropStatus(event, 'In Progress') }}>
                {
                    tasks.filter(task => task.status === 'In Progress').map(task => (
                        <Task key={task.id} title={task.title} details={task.details} onDragStart={(event) => handleDragStatus(event, task.id)} />
                    ))
                }
            </StatusBar>
            <StatusBar status='Review' onDragOver={handleOverStatus} onDrop={(event) => { handleDropStatus(event, 'Review') }}>
                {
                    tasks.filter(task => task.status === 'Review').map(task => (
                        <Task key={task.id} title={task.title} details={task.details} onDragStart={(event) => handleDragStatus(event, task.id)} />
                    ))
                }
            </StatusBar>
            <StatusBar status='Done' onDragOver={handleOverStatus} onDrop={(event) => { handleDropStatus(event, 'Done') }}>
                {
                    tasks.filter(task => task.status === 'Done').map(task => (
                        <Task key={task.id} title={task.title} details={task.details} onDragStart={(event) => handleDragStatus(event, task.id)} />
                    ))
                }
            </StatusBar>
        </div>
    );
};