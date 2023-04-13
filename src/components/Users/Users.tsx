import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css';
import axios from "axios";
import userPhoto from '../../assets/images/ava.png'

const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => props.setUsers(response.data.items))
        debugger
        /* props.setUsers([
             {
                 id: 1,
                 photoUrl: 'https://e7.pngegg.com/pngimages/565/216/png-clipart-smiley-emoticon-computer-icons-graphics-smiley-miscellaneous-face.png',
                 followed: false,
                 fullName: 'Angelina D.',
                 status: 'Where your desire to be extraordinary?',
                 location: {country: 'Belarus', city: 'Minsk'}
             },
             {
                 id: 2,
                 photoUrl: 'https://e7.pngegg.com/pngimages/565/216/png-clipart-smiley-emoticon-computer-icons-graphics-smiley-miscellaneous-face.png',
                 followed: true,
                 fullName: 'Dariya S.',
                 status: 'Easy does it',
                 location: {country: 'Ukraine', city: 'Kiev'}
             },
             {
                 id: 3,
                 photoUrl: 'https://e7.pngegg.com/pngimages/565/216/png-clipart-smiley-emoticon-computer-icons-graphics-smiley-miscellaneous-face.png',
                 followed: false,
                 fullName: 'Davide P.',
                 status: 'Fed II',
                 location: {country: 'Italy', city: 'Naples'}
             }])*/
    }
    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                    <span>
                        <div><img className={s.userPhoto} src={u.photos.small ? u.photos.small : userPhoto}
                                  alt={'avatar'}/></div>
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