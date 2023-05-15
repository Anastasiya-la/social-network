import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '9fd86adc-bb5c-4682-a108-96413caf4103'}
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    }
}
export const profileAPI = {
    getUserProfile(userId) {
        return instance.get('profile/' + userId)
            .then(response => response.data)
    }
}

export const authAPI = {
    getAuthUserData() {
        return instance.get('auth/me')
            .then(response => response.data)
    }
}

export const followAPI = {
    deleteSubscription(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    }
}

