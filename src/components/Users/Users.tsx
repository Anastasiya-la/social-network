import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/ava.png";
import axios from "axios";
import {UserType} from "../../redux/users-reducer";

class Users extends React.Component<any, any> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => this.props.setUsers(response.data.items))
    }

    render() {
        return (
            <div>
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