import React from 'react';
import s from "./Users.module.css";
import {UserType} from "../../redux/users-reducer";
import userPhoto from "../../assets/images/ava.png";
import {NavLink} from "react-router-dom";


type UsersPropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (UserId: number) => void
    unfollow: (UserId: number) => void

}

const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => <span className={props.currentPage === p ? s.selectedPage : ''}
                                      onClick={() => props.onPageChanged(p)}>{p}</span>)}
            </div>
            {props.users.map((u: UserType) => <div key={u.id}>
                <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img className={s.userPhoto} src={u.photos.small ? u.photos.small : userPhoto}
                                     alt={'avatar'}/>
                            </NavLink>
                            </div>
                        <div>
                            {u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                                <button onClick={() => props.follow(u.id)}>Follow</button>}

                        </div>
                    </span>
                <span>
                        <span>
                            <div>{u.name}</div>
                              <div>{u.status}</div>

                        </span>
                      <span>
                            <div>country</div>
                            <div>city</div>
                      </span>
                    </span>
            </div>)}
        </div>
    )
}

export default Users;