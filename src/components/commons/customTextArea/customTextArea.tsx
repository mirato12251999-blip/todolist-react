import styles from './customTextArea.module.css';

interface propsType {
    label?: string;
    value?: string;
    title?: string;
    onhandleTextAreaChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const CustomTextArea = (props: propsType) => {
    return (
        <label className={styles["label"]}>
            {props.label && <span>{props.label + ": "}</span>}
            <textarea
                className={styles["textarea"]}
                value={props.value}
                onChange={props.onhandleTextAreaChange}
                placeholder={props.title ? "Input your " + props.title : "Custom textarea"}
            />
        </label>
    );
};  