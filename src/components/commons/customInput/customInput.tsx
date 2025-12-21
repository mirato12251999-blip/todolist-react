import styles from './customInput.module.css';

interface propsType {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    type?: string;
    title?: string;
}

export const CustomInput = (props: propsType) => {
    {
        return (
            <label className={styles["customLabel"]}>
                {props.label && <span>{props.label + ": "}</span>}
                <input type={props.type ? props.type : "text"} onChange={props.onChange} className={styles["customInput"]} placeholder={props.title ? "Input your " + props.title : "Custom Input"} />
            </label>
        );
    }
};