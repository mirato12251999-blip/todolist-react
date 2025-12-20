import { SlidersHorizontal, ArrowDownWideNarrow } from 'lucide-react';

import styles from './navbar.module.css';

interface propsType {
    onClickInsert?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onClickFilter?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onClickSort?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Navbar = (props: propsType) => {
    return (
        <nav className={styles["navbar"]}>
            <div className={styles['edit-btn']}>
                <button onClick={props.onClickInsert}>
                    + Add Task
                </button>
            </div>
            <div className={styles['edit-btn']}>
                <button onClick={props.onClickFilter}>
                    <SlidersHorizontal className={styles["icon"]} />
                    Filter
                </button>
                <button onClick={props.onClickSort}>
                    <ArrowDownWideNarrow className={styles["icon"]} />
                    Sort by
                </button>
            </div>
        </nav>
    );
}   