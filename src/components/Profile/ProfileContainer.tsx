import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    getUserProfile,
    ProfileStatusPropsType,
    ProfileType,
    getProfileStatus,
    updateProfileStatus
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


export type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
}

export type MapDispatchToPropsType = {
    getUserProfile: (userId: string | number) => void
    getProfileStatus: (userId: string | number) => void
    updateProfileStatus: (status: ProfileStatusPropsType) => void
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
        // this.props.setProfileStatus(userId)
        this.props.updateProfileStatus({status:this.props.status})
    }

    render() {
        return (
            <Profile profile={this.props.profile} status={this.props.status} updateProfileStatus={this.props.updateProfileStatus}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {getUserProfile, getProfileStatus, updateProfileStatus}),
    withRouter
)(ProfileContainer)

// let WithUrlDataContainerComponent = withRouter(ProfileContainer)
// export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent));