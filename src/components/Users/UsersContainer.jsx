import React from 'react';
import {connect} from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage,setTotalUsersCount, toggleIsFetching,toggleFollowingProgress,requestUsers} from '../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from './../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';
import { getUsers,getPageSize,getTotalUsersCount,getCurrentPage,getIsFetching,getFollowingInProgress,getUsersSuperSelector } from '../redux/users-selectors';


class UsersContainer extends React.Component {

    componentDidMount(){
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) =>{
        const {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize)
        
    }

    render  (){
                return <>
                {this.props.isFetching ? <Preloader /> : null }
                <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        followingInProgress={this.props.followingInProgress}

                
                
                />  
                </>
            }
}


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        //users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}




export default compose (
    withAuthRedirect,
    connect (mapStateToProps,{
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers: requestUsers
    }),
)(UsersContainer)
