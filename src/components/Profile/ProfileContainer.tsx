import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfilePageType, setProfile} from "../../redux/profile-reducer";

export type MapStateToPropsType = {
profile: ProfilePageType
}

export type MapDispatchToPropsType = {
    setProfile: (profile: ProfilePageType) => void
}

type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType


class ProfileContainer extends React.Component<ProfilePropsType>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setProfile(response.data.items)
        })
    }

    render(){
        return (
                <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps =(state: AppStateType): MapStateToPropsType => ({profile: state.profilePage.profile}) as MapStateToPropsType

export default connect(mapStateToProps,{setProfile})(ProfileContainer);