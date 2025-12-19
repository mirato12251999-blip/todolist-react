import { useState } from 'react';
import { SquareChevronRight, ArrowBigRight } from 'lucide-react';

import styles from './task.module.css';

interface propsType {
    title?: string;
    details?: string;
    onDragStart?: (event: React.DragEvent<HTMLDivElement>) => void;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Task = (props: propsType) => {
    const [isShow, setShow] = useState<boolean>(false);

    const handleTask = () => {
        setShow(!isShow);
    }

    return (
        <div className={styles["task"]} onDragStart={props.onDragStart} draggable>
            <div className={styles["header"]}>
                <div onClick={handleTask}>
                    {
                        isShow ? <SquareChevronRight className={styles["iconRotated"]} /> : <SquareChevronRight className={styles["icon"]} />
                    }
                    <p>{props.title}</p>
                </div>
                <button className={styles["statusBtn"]} onClick={props.onClick}>
                    <ArrowBigRight className={styles["arrowIcon"]} />
                </button>
            </div>
            {
                isShow && (
                    <div className={styles["details"]}>
                        <p>{props.details}</p>
                    </div>
                )
            }
        </div>
    );
};