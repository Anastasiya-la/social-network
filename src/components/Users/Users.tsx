import React from 'react';
import s from "./Users.module.css";
import {UserType} from "../../redux/users-reducer";
import userPhoto from "../../assets/images/ava.png";
import {NavLink} from "react-router-dom";
import axios from "axios";


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
                            {u.followed ? <button onClick={() =>
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {'API-KEY': '9fd86adc-bb5c-4682-a108-96413caf4103'}
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                        })

                                }>Unfollow</button> :
                                <button onClick={() =>
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {'API-KEY': '9fd86adc-bb5c-4682-a108-96413caf4103'}
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        })
                                }
                                >Follow</button>}

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