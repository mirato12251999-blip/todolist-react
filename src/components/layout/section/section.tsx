import { StatusBar } from '../../statusBar/statusBar';
import { Task } from '../../task/task';

import styles from './section.module.css';

export const Section = (props: React.PropsWithChildren<{}>) => {
    return (
        <div className={styles["section"]}>
            <StatusBar status='To Do'>
                <Task />
            </StatusBar>
            <StatusBar status='In Progress' />
            <StatusBar status='Review' />
            <StatusBar status='Done' />
        </div>
    );
};