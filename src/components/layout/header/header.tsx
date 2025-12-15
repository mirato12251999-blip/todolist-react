import { HomeIcon } from 'lucide-react';
import styles from './header.module.css';

export const Header = () => {
    return (
        <header className={styles["header"]}>
            <button className={styles["homeButton"]}>
                <HomeIcon className={styles["homeIcon"]} />
            </button>
            <p className={styles["p"]}>Task Management</p>
            <button className={styles["logOut"]}>Log Out</button>
        </header>
    );
}