const SET_USER_DATA = 'SET-USER-DATA ';


type SetUserDataActionType = {
    type: typeof SET_USER_DATA
    data: {
        id: number
        login: string
        email: string
    }
}


type ActionsType =
    SetUserDataActionType;


let initialState:AuthType = {
    id: null,
    login: null,
    email: null,
    isAuth: false

}

export type AuthType = {
    id: null | number
    login: null | string
    email: null | string
    isAuth: boolean

};

export const authReducer = (state = initialState, action: ActionsType): AuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true}
        default:
            return state;
    }
}

export const setAuthUserData = (userId: number, login: string, email: string): SetUserDataActionType => ({
    type: SET_USER_DATA,
    data: {id: userId, login, email}
})


