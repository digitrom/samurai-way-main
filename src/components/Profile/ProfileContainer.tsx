import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";


export type MapStateToPropsType = {
    profile: ProfileType | null
    isAuth: boolean
}

export type MapDispatchToPropsType = {
    getUserProfile: (userId: string | number) => void
}

type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

type RouteParams = {
    userId: string | undefined
}

// const dispatch = useDispatch<UsersDispatchType>()
class ProfileContainer extends React.Component<RouteComponentProps<RouteParams> & ProfilePropsType> {
    componentDidMount() {
        const {userId: id} = this.props.match.params // берем данные из урла через параметры функции withRouter
        let userId= id ? id : 2
        this.props.getUserProfile(userId)
    }

    render() {
        return <Redirect to={'/login'}/>
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})


let WithUrlDteContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {getUserProfile})(WithUrlDteContainerComponent);