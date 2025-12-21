import { CustomInput } from '../commons/customInput/customInput';
import { CustomTextArea } from '../commons/customTextArea/customTextArea';
import { CustomBtn } from '../commons/customBtn/customBtn';

import styles from './insertField.module.css';

interface propsType {
    onhandleSaveClick: () => void;
    onhandleTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onhandleDescription: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onhandleStartDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onhandleEndDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InsertField = (props: propsType) => {
    return (
        <div className={styles["insert-field"]}>
            <CustomInput title={"Title"} onChange={props.onhandleTitle} />
            <CustomTextArea title={"Description"} onhandleTextAreaChange={props.onhandleDescription} />
            <div>
                <CustomInput type="date" label={"Start"} onChange={props.onhandleStartDate} />
                <CustomInput type="date" label={"End"} onChange={props.onhandleEndDate} />
            </div>
            <div>
                <CustomBtn onhandleSaveClick={props.onhandleSaveClick}>Save</CustomBtn>
            </div>
        </div>
    );
}   