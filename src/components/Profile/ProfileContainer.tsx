import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfilePageType, ProfileType, setProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import users from "../Users/Users";


export type MapStateToPropsType = {
    profile: ProfileType | null
}

export type MapDispatchToPropsType = {
    setProfile: (profile: ProfileType) => void
}

type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

type RouteParams = {
    userId: string | undefined
}

class ProfileContainer extends React.Component<RouteComponentProps<RouteParams> & ProfilePropsType> {
    componentDidMount() {
        debugger
        const {userId: id} = this.props.match.params // берем данные из урла через параметры функции withRouter
        debugger
        let userId= id ? id : 2

        // let userId = this.props.match.params
        // if (!userId) {
        //    userId = 2
        // }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            // полученные данные из урла запрашиваем у сервера
            this.props.setProfile(response.data)
        })
    }

    render() {
        debugger
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({profile: state.profilePage.profile})

let WithUrlDteContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setProfile})(WithUrlDteContainerComponent);