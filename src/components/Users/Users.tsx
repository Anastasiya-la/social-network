import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/ava.png";
import axios from "axios";
import {UserType} from "../../redux/users-reducer";

class Users extends React.Component<any, any> {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => this.props.setUsers(response.data.items))
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(p => <span className={this.props.currentPage === p ? s.selectedPage : ''}
                                          onClick={() => this.onPageChanged(p)}>{p}</span>)}
                </div>
                {this.props.users.map((u: UserType) => <div key={u.id}>
                    <span>
                        <div><img className={s.userPhoto} src={u.photos.small ? u.photos.small : userPhoto}
                                  alt={'avatar'}/></div>
                        <div>
                            {u.followed ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button> :
                                <button onClick={() => this.props.follow(u.id)}>Follow</button>}

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
        );
    }

}

export default Users;