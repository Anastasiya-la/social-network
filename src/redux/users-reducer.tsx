const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean


    // location?: {
    //     country: string
    //     city: string
    // }

}


type FollowActionType = {
    type: typeof FOLLOW
    userId: number
}

type UnfollowActionType = {
    type: typeof UNFOLLOW
    userId: number
}

type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}

type ActionsType = FollowActionType | UnfollowActionType | SetUsersActionType;


let initialState = {
    users: [
    ] as Array<UserType>,
}

export type UsersPageType = typeof initialState;

export const usersReducer = (state = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export const followAC = (userId: number): FollowActionType => ({
    type: FOLLOW,
    userId: userId
})
export const unfollowAC = (userId: number): UnfollowActionType => ({
    type: UNFOLLOW,
    userId: userId
})


export const setUsersAC = (users: Array<UserType>): SetUsersActionType => ({
    type: SET_USERS,
    users: users
})