import React, {ChangeEvent, useState} from "react";

const Status = () => {
    const [edit, setEdit] = useState<boolean>(true)
    const [value, setValue] = useState<string>('Say something')

    const editHandler = () => {
        setEdit(!edit)
            setValue(value)
    }

    const onBlurHandler = () => {
        setEdit(!edit)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    if (edit) {
        return <>
            <div>
                <span onDoubleClick={editHandler}>{value}</span>
            </div>
        </>
    }else{
        return  <input value={value} onChange={onChangeHandler} onBlur={onBlurHandler} type="text"/>
    }
}
    export default Status