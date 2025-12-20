import { SlidersHorizontal, ArrowDownWideNarrow } from 'lucide-react';

import styles from './navbar.module.css';

export const Navbar = () => {
    return (
        <nav className={styles["navbar"]}>
            <div className={styles['edit-btn']}>
                <button>
                    + Add Task
                </button>
            </div>
            <div className={styles['edit-btn']}>
                <button>
                    <SlidersHorizontal className={styles["icon"]} />
                    Filter
                </button>
                <button>
                    <ArrowDownWideNarrow className={styles["icon"]} />
                    Sort by
                </button>
            </div>
        </nav>
    );
}   