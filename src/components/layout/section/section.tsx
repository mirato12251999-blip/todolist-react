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
    const tasks: taskType[] = [
        { id: 0, title: 'Sample Task', details: 'This is a sample task detail.', status: 'To Do' },
        { id: 1, title: 'Another Task', details: 'This is another task detail.', status: 'In Progress' },
        { id: 2, title: 'Third Task', details: 'This is the third task detail.', status: 'Review' },
        { id: 3, title: 'Fourth Task', details: 'This is the fourth task detail.', status: 'Done' }
    ]

    const handleDragStatus = (event: React.DragEvent<HTMLDivElement>, idx: number) => {
        console.log(event.dataTransfer, idx);
    }

    const handleOverStatus = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        // console.log('Dragging over status:', event.target);
    }

    const handleDropStatus = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        console.log(event.dataTransfer);
    }

    return (
        <div className={styles["section"]}>
            <StatusBar status='To Do'>
                {
                    /* Example of passing drag-and-drop handlers to Task component */
                    tasks.filter(task => task.status === 'To Do').map(task => (
                        <Task key={task.id} title={task.title} details={task.details} onDragStart={(event) => handleDragStatus(event, task.id)} onDragOver={handleOverStatus} onDrop={handleDropStatus} />
                    ))
                }
            </StatusBar>
            <StatusBar status='In Progress'>
                {
                    /* Example of passing drag-and-drop handlers to Task component */
                    tasks.filter(task => task.status === 'In Progress').map(task => (
                        <Task key={task.id} title={task.title} details={task.details} onDragStart={(event) => handleDragStatus(event, task.id)} onDragOver={handleOverStatus} onDrop={handleDropStatus} />
                    ))
                }
            </StatusBar>
            <StatusBar status='Review'>
                {
                    /* Example of passing drag-and-drop handlers to Task component */
                    tasks.filter(task => task.status === 'Review').map(task => (
                        <Task key={task.id} title={task.title} details={task.details} onDragStart={(event) => handleDragStatus(event, task.id)} onDragOver={handleOverStatus} onDrop={handleDropStatus} />
                    ))
                }
            </StatusBar>
            <StatusBar status='Done'>
                {
                    /* Example of passing drag-and-drop handlers to Task component */
                    tasks.filter(task => task.status === 'Done').map(task => (
                        <Task key={task.id} title={task.title} details={task.details} onDragStart={(event) => handleDragStatus(event, task.id)} onDragOver={handleOverStatus} onDrop={handleDropStatus} />
                    ))
                }
            </StatusBar>
        </div>
    );
};