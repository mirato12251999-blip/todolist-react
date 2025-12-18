import { useState } from 'react';
import { SquareChevronRight } from 'lucide-react';

import styles from './task.module.css';

export const Task = () => {
    const [isShow, setShow] = useState(false);

    const handleTask = () => {
        setShow(!isShow);
    }

    return (
        <div className={styles["task"]} onClick={handleTask}>
            <div className={styles["header"]}>
                {
                    isShow ? <SquareChevronRight className={styles["iconRotated"]} /> : <SquareChevronRight className={styles["icon"]} />
                }
                <p>Task Title</p>
            </div>
            {
                isShow && (
                    <div className={styles["details"]}>
                        <p>Task details go here. This section is visible when isShow is true.</p>
                    </div>
                )
            }
        </div>
    );
};