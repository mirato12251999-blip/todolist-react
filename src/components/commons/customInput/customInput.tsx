import styles from './customInput.module.css';

export const CustomInput = (props: { onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void, title?: string }) => {
    {
        return <input type="text" onChange={props.onChange} className={styles["customInput"]} placeholder={props.title ? props.title : "Custom Input"} />;
    }
};