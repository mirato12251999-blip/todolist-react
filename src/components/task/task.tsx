import { useState } from 'react';
import { SquareChevronRight, ArrowBigRight } from 'lucide-react';

import styles from './task.module.css';

interface propsType {
    title: string;
    details: string;
    hanldeStatus?: () => void;
}

export const Task = (props: propsType) => {
    const [isShow, setShow] = useState(false);

    const handleTask = () => {
        setShow(!isShow);
    }

    return (
        <div className={styles["task"]} onClick={handleTask}>
            <div className={styles["header"]}>
                <div>
                    {
                        isShow ? <SquareChevronRight className={styles["iconRotated"]} /> : <SquareChevronRight className={styles["icon"]} />
                    }
                    <p>{props.title}</p>
                </div>
                <button className={styles["statusBtn"]} onClick={props.hanldeStatus}>
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