import React from "react";
import {connect} from "react-redux";
import {followAC, loadMoreAC, unfollowAC} from "../../../redux/usersReducer";
import Users from "./Users";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followAC(id))
        },
        unfollow: (id) => {
            dispatch(unfollowAC(id))
        },
        loadMore: () => {
            dispatch(loadMoreAC())
        }
    }
}


let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;
