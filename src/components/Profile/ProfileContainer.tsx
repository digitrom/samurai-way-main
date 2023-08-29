import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, ProfileType, setProfileStatus, updateProfileStatus} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


export type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
}

export type MapDispatchToPropsType = {
    getUserProfile: (userId: string | number) => void
    setProfileStatus: (userId: string | number) => void
    updateProfileStatus: (status: string) => void
}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

type RouteParams = {
    userId: string | undefined
}

// const dispatch = useDispatch<UsersDispatchType>()
class ProfileContainer extends React.Component<RouteComponentProps<RouteParams> & ProfilePropsType> {
    componentDidMount() {
        const {userId: id} = this.props.match.params // берем данные из урла через параметры функции withRouter
        let userId= id ? id : 2
        this.props.getUserProfile(userId)
        this.props.setProfileStatus(userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {getUserProfile, setProfileStatus, updateProfileStatus}),
    withRouter
)(ProfileContainer)

// let WithUrlDataContainerComponent = withRouter(ProfileContainer)
// export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent));