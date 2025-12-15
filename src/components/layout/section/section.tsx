import styles from './section.module.css';

export const Section = (props: React.PropsWithChildren<{}>) => {
    return (
        <div className={styles["section"]}>
            {props.children}
        </div>
    );
};