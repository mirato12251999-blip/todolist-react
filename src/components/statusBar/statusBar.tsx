import React from 'react';
import styles from './statusBar.module.css';

interface StatusBarProps {
    status?: string;
    children?: React.ReactNode;
    onDrop?: (event: React.DragEvent<HTMLDivElement>) => void;
    onDragOver?: (event: React.DragEvent<HTMLDivElement>) => void;
}

export const StatusBar = (props: StatusBarProps) => {
    const { children, status } = props;
    return (
        <div className={styles["statusBar"]}>
            <p className={styles["p"]}>{status}</p>
            <div className={styles["tasksContainer"]} onDragOver={props.onDragOver} onDrop={props.onDrop}>
                {
                    children
                }
            </div>
        </div>
    );
}