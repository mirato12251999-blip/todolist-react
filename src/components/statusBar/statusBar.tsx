import styles from './statusBar.module.css';

interface StatusBarProps {
    status?: string;
    children?: React.ReactNode;
}

export const StatusBar = (props: StatusBarProps) => {
    const { children, status } = props;
    return (
        <div className={styles["statusBar"]}>
            <p className={styles["p"]}>{status}</p>
            <div className={styles["tasksContainer"]}>
                {
                    children
                }
            </div>
        </div>
    );
}