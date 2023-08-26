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


import React from "react";

type ProfileStatusPropsType = {
    status: string | null
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {


    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status || ''} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus