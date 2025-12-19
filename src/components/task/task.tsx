import { useState } from 'react';
import { SquareChevronRight, ArrowBigRight, ArrowBigLeft } from 'lucide-react';

import styles from './task.module.css';

interface propsType {
    title?: string;
    details?: string;
    left?: boolean;
    right?: boolean;
    onDragStart?: (event: React.DragEvent<HTMLDivElement>) => void;
    onLeftClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onRightClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Task = (props: propsType) => {
    const [isShow, setShow] = useState<boolean>(false);

    const handleTask = () => {
        setShow(!isShow);
    }

    return (
        <div className={styles["task"]} onDragStart={props.onDragStart} draggable>
            <div className={styles["header"]}>
                {
                    !props.left && <button className={styles['statusBtn']} onClick={props.onLeftClick}><ArrowBigLeft className={styles["arrowIcon"]} /></button>
                }
                <div onClick={handleTask}>
                    {
                        isShow ? <SquareChevronRight className={styles["iconRotated"]} /> : <SquareChevronRight className={styles["icon"]} />
                    }
                    <p>{props.title}</p>
                </div>
                {
                    !props.right && <button className={styles['statusBtn']} onClick={props.onRightClick}><ArrowBigRight className={styles["arrowIcon"]} /></button>
                }
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