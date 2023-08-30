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


import React, {ChangeEvent} from "react";
import {ProfileStatusPropsType} from "../../../redux/profile-reducer";


export type StatusPropsType = {
    status: string
    updateStatus: (status: ProfileStatusPropsType) => void
}

class ProfileStatus extends React.Component<StatusPropsType> {


    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        console.log('this:', this)
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        console.log(this.props)
        this.props.updateStatus({status:this.state.status})
    }

    onStatusChange =(e:ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '--------'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} onChange={this.onStatusChange} value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus