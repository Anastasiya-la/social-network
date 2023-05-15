const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE-FOLLOWING-PROGRESS'

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

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
type setTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalCount: number
}
type toggleIsFetchingACActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

type toggleFollowingProgressActionType = {
    type: typeof TOGGLE_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}

type ActionsType =
    FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | setTotalUsersCountActionType
    | toggleIsFetchingACActionType | toggleFollowingProgressActionType;


let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>
}

export type UsersPageType = typeof initialState;

export const usersReducer = (state = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE :
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT :
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING :
            return {...state, isFetching: action.isFetching}
        case TOGGLE_FOLLOWING_PROGRESS :
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : [state.followingInProgress.filter(id => id !== action.userId)]
            } as UsersPageType
        default:
            return state;
    }
}

export const follow = (userId: number): FollowActionType => ({
    type: FOLLOW,
    userId: userId
})
export const unfollow = (userId: number): UnfollowActionType => ({
    type: UNFOLLOW,
    userId: userId
})


export const setUsers = (users: Array<UserType>): SetUsersActionType => ({
    type: SET_USERS,
    users: users
})

export const setCurrentPage = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage
})

export const setTotalUsersCount = (totalCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount
})
export const toggleIsFetching = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})

export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_FOLLOWING_PROGRESS,
    isFetching,
    userId
})
