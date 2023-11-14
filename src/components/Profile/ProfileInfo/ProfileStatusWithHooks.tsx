// import React, {ChangeEvent, useState} from "react";
//
// type ProfileStatusPropsType = {
//     status: string | null
// }
//
// const ProfileStatus = (props:ProfileStatusPropsType) => {
//     const [edit, setEdit] = useState<boolean>(false)
//     const [value, setValue] = useState<string>(props.status || '')
//
//     const editHandler = () => {
//         setEdit(true)
//             setValue(value)
//     }
//
//     const onBlurHandler = () => {
//         setEdit(false)
//     }
//
//     const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//         setValue(e.currentTarget.value)
//     }
//     if (edit) {
//         return <>
//             <div>
//                 <span onDoubleClick={editHandler}>{value}</span>
//             </div>
//         </>
//     }else{
//         return  <input autoFocus={true} value={value} onChange={onChangeHandler} onBlur={onBlurHandler} type="text"/>
//     }
// }
//     export default ProfileStatus


import React, {ChangeEvent, useState} from "react";
import {ProfileStatusPropsType} from "../../../redux/profile-reducer";


export type StatusPropsType = {
    status: string
    updateStatus: (status: ProfileStatusPropsType) => void }


export const  ProfileStatusWithHooks = (props:StatusPropsType ) => {
    const [editMode, setEditMode]=useState<boolean>(false)
    const [status, setStatus]= useState<string>(props.status)

    const  activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus({status})
    }

    const onStatusChange=(e:ChangeEvent<HTMLInputElement>) =>{
        setStatus(e.currentTarget.value)
}

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || '--------'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={status}/>
                </div>
            }
        </div>
    )
}





//     componentDidUpdate(prevProps: any, prevState: Readonly<{}>, snapshot?: any) {
//         if (prevProps.status !== this.props.status){
//             this.setState({
//                 status: this.props.status
//             })
//         }
//     }
//
//     render() {
//
//     }
// }

export default ProfileStatusWithHooks