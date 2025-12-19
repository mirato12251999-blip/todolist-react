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
        { id: 0, title: 'Sample Task', details: 'This is a sample task detail.', status: '0' },
        { id: 1, title: 'Another Task', details: 'This is another task detail.', status: '1' },
        { id: 2, title: 'Third Task', details: 'This is the third task detail.', status: '2' },
        { id: 3, title: 'Fourth Task', details: 'This is the fourth task detail.', status: '3' }
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

    return (
        <div className={styles["section"]}>
            <StatusBar status='To Do' onDragOver={handleOverStatus} onDrop={(event) => { handleDropStatus(event, '0') }}>
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
    );
};