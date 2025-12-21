import styles from "./customBtn.module.css";

interface propsType {
    children: React.ReactNode;
    onhandleSaveClick: () => void;
}

export const CustomBtn = (props: propsType) => {
    return (
        <button onClick={props.onhandleSaveClick} className={styles["custom-btn"]}>
            {props.children}
        </button>
    );
};