import { CustomInput } from '../commons/customInput/customInput';

import styles from './insertField.module.css';

export const InsertField = () => {
    return (
        <div className={styles["insert-field"]}>
            <CustomInput />
        </div>
    );
}   