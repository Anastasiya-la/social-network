import {rerenderAllTree} from "../render";

type DialogType = {
    name: string
    id: number
}
type MessageType = {
    id: number
    message: string
}
type IconType = {
    version: string
    width: string
    height: string
    viewBox: string
    path: string
}
type PostType = {
    id: number
    message: string
    likeCount: number
}
type NavLinkType = {
    to: string
    name: string
    icon: IconType
}
export type profilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type dialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
export type sidebarType = {
    navLinks: Array<NavLinkType>
}

export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    sidebar: sidebarType
}

let state = {

    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likeCount: 2},
            {id: 2, message: "It's my first post", likeCount: 10},
            {id: 3, message: "Blalaal", likeCount: 11},
        ],
        newPostText: ''
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Angelina'},
            {id: 2, name: 'Vita'},
            {id: 3, name: 'Katya'},
            {id: 4, name: 'Veronika'},
            {id: 5, name: 'Noemi'},
            {id: 6, name: 'Diana'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How your it-incubator?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ],
        newMessageText: 'fgfgfgf'
    },

    sidebar: {
        navLinks: [
            {
                to: '/profile',
                name: 'Profile',
                icon: {
                    version: "1.1",
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    path: "M2.386 8.211c-0.236 0.184-0.386 0.469-0.386 0.789v11c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-11c-0.001-0.3-0.134-0.593-0.386-0.789l-9-7c-0.358-0.275-0.861-0.285-1.228 0zM16 21v-9c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v9h-3c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-10.511l8-6.222 8 6.222v10.511c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293zM10 21v-8h4v8z"
                }
            },
            {
                to: '/dialogs',
                name: 'Messages',
                icon: {
                    version: "1.1",
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    path: "M22 15v-10c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-14c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v16c0 0.256 0.098 0.512 0.293 0.707 0.391 0.391 1.024 0.391 1.414 0l3.707-3.707h11.586c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121zM20 15c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-12c-0.276 0-0.526 0.112-0.707 0.293l-2.293 2.293v-13.586c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h14c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707z"
                }
            },
            {
                to: '/news',
                name: 'News',
                icon: {
                    version: "1.1",
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    path: "M17.586 7h-2.586v-2.586zM20.707 7.293l-6-6c-0.092-0.092-0.202-0.166-0.324-0.217s-0.253-0.076-0.383-0.076h-8c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v16c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h12c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-12c0-0.276-0.112-0.526-0.293-0.707zM13 3v5c0 0.552 0.448 1 1 1h5v11c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-12c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-16c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM16 12h-8c-0.552 0-1 0.448-1 1s0.448 1 1 1h8c0.552 0 1-0.448 1-1s-0.448-1-1-1zM16 16h-8c-0.552 0-1 0.448-1 1s0.448 1 1 1h8c0.552 0 1-0.448 1-1s-0.448-1-1-1zM10 8h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1h2c0.552 0 1-0.448 1-1s-0.448-1-1-1z"
                }
            },
            {
                to: '/music',
                name: 'Music',
                icon: {
                    version: "1.1",
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    path: "M8 18c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414zM22 16v-13c0-0.050-0.004-0.107-0.014-0.164-0.091-0.545-0.606-0.913-1.151-0.822l-12 2c-0.476 0.081-0.835 0.492-0.835 0.986v9.535c-0.588-0.34-1.272-0.535-2-0.535-1.104 0-2.106 0.449-2.828 1.172s-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828v-12.153l10-1.667v8.355c-0.588-0.34-1.272-0.535-2-0.535-1.104 0-2.106 0.449-2.828 1.172s-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828zM20 16c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414z"
                }
            },
            {
                to: '/settings', name: 'Settings', icon: {
                    version: "1.1",
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    path: "M16 12c0-1.104-0.449-2.106-1.172-2.828s-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828zM14 12c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414zM20.315 15.404c0.046-0.105 0.112-0.191 0.192-0.257 0.112-0.092 0.251-0.146 0.403-0.147h0.090c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121-0.337-1.58-0.879-2.121-1.293-0.879-2.121-0.879h-0.159c-0.11-0.001-0.215-0.028-0.308-0.076-0.127-0.066-0.23-0.172-0.292-0.312-0.003-0.029-0.004-0.059-0.004-0.089-0.024-0.055-0.040-0.111-0.049-0.168 0.020-0.334 0.077-0.454 0.168-0.547l0.062-0.062c0.585-0.586 0.878-1.356 0.877-2.122s-0.294-1.536-0.881-2.122c-0.586-0.585-1.356-0.878-2.122-0.877s-1.536 0.294-2.12 0.879l-0.046 0.046c-0.083 0.080-0.183 0.136-0.288 0.166-0.14 0.039-0.291 0.032-0.438-0.033-0.101-0.044-0.187-0.11-0.253-0.19-0.092-0.112-0.146-0.251-0.147-0.403v-0.090c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879-1.58 0.337-2.121 0.879-0.879 1.293-0.879 2.121v0.159c-0.001 0.11-0.028 0.215-0.076 0.308-0.066 0.127-0.172 0.23-0.312 0.292-0.029 0.003-0.059 0.004-0.089 0.004-0.055 0.024-0.111 0.040-0.168 0.049-0.335-0.021-0.455-0.078-0.548-0.169l-0.062-0.062c-0.586-0.585-1.355-0.878-2.122-0.878s-1.535 0.294-2.122 0.882c-0.585 0.586-0.878 1.355-0.878 2.122s0.294 1.536 0.879 2.12l0.048 0.047c0.080 0.083 0.136 0.183 0.166 0.288 0.039 0.14 0.032 0.291-0.031 0.434-0.006 0.016-0.013 0.034-0.021 0.052-0.041 0.109-0.108 0.203-0.191 0.275-0.11 0.095-0.25 0.153-0.383 0.156h-0.090c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.294-0.879 2.122 0.337 1.58 0.879 2.121 1.293 0.879 2.121 0.879h0.159c0.11 0.001 0.215 0.028 0.308 0.076 0.128 0.067 0.233 0.174 0.296 0.321 0.024 0.055 0.040 0.111 0.049 0.168-0.020 0.334-0.077 0.454-0.168 0.547l-0.062 0.062c-0.585 0.586-0.878 1.356-0.877 2.122s0.294 1.536 0.881 2.122c0.586 0.585 1.356 0.878 2.122 0.877s1.536-0.294 2.12-0.879l0.047-0.048c0.083-0.080 0.183-0.136 0.288-0.166 0.14-0.039 0.291-0.032 0.434 0.031 0.016 0.006 0.034 0.013 0.052 0.021 0.109 0.041 0.203 0.108 0.275 0.191 0.095 0.11 0.153 0.25 0.156 0.383v0.092c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879 1.58-0.337 2.121-0.879 0.879-1.293 0.879-2.121v-0.159c0.001-0.11 0.028-0.215 0.076-0.308 0.067-0.128 0.174-0.233 0.321-0.296 0.055-0.024 0.111-0.040 0.168-0.049 0.334 0.020 0.454 0.077 0.547 0.168l0.062 0.062c0.586 0.585 1.356 0.878 2.122 0.877s1.536-0.294 2.122-0.881c0.585-0.586 0.878-1.356 0.877-2.122s-0.294-1.536-0.879-2.12l-0.048-0.047c-0.080-0.083-0.136-0.183-0.166-0.288-0.039-0.14-0.032-0.291 0.031-0.434zM18.396 9.302c-0.012-0.201-0.038-0.297-0.076-0.382v0.080c0 0.043 0.003 0.084 0.008 0.125 0.021 0.060 0.043 0.119 0.068 0.177 0.004 0.090 0.005 0.091 0.005 0.092 0.249 0.581 0.684 1.030 1.208 1.303 0.371 0.193 0.785 0.298 1.211 0.303h0.18c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707-0.111 0.525-0.293 0.707-0.431 0.293-0.707 0.293h-0.090c-0.637 0.003-1.22 0.228-1.675 0.603-0.323 0.266-0.581 0.607-0.75 0.993-0.257 0.582-0.288 1.21-0.127 1.782 0.119 0.423 0.341 0.814 0.652 1.136l0.072 0.073c0.196 0.196 0.294 0.45 0.294 0.707s-0.097 0.512-0.292 0.707c-0.197 0.197-0.451 0.295-0.709 0.295s-0.512-0.097-0.707-0.292l-0.061-0.061c-0.463-0.453-1.040-0.702-1.632-0.752-0.437-0.037-0.882 0.034-1.293 0.212-0.578 0.248-1.027 0.683-1.3 1.206-0.193 0.371-0.298 0.785-0.303 1.211v0.181c0 0.276-0.111 0.525-0.293 0.707s-0.43 0.292-0.706 0.292-0.525-0.111-0.707-0.293-0.293-0.431-0.293-0.707v-0.090c-0.015-0.66-0.255-1.242-0.644-1.692-0.284-0.328-0.646-0.585-1.058-0.744-0.575-0.247-1.193-0.274-1.756-0.116-0.423 0.119-0.814 0.341-1.136 0.652l-0.073 0.072c-0.196 0.196-0.45 0.294-0.707 0.294s-0.512-0.097-0.707-0.292c-0.197-0.197-0.295-0.451-0.295-0.709s0.097-0.512 0.292-0.707l0.061-0.061c0.453-0.463 0.702-1.040 0.752-1.632 0.037-0.437-0.034-0.882-0.212-1.293-0.248-0.578-0.683-1.027-1.206-1.3-0.371-0.193-0.785-0.298-1.211-0.303l-0.18 0.001c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707 0.111-0.525 0.293-0.707 0.431-0.293 0.707-0.293h0.090c0.66-0.015 1.242-0.255 1.692-0.644 0.328-0.284 0.585-0.646 0.744-1.058 0.247-0.575 0.274-1.193 0.116-1.756-0.119-0.423-0.341-0.814-0.652-1.136l-0.073-0.073c-0.196-0.196-0.294-0.45-0.294-0.707s0.097-0.512 0.292-0.707c0.197-0.197 0.451-0.295 0.709-0.295s0.512 0.097 0.707 0.292l0.061 0.061c0.463 0.453 1.040 0.702 1.632 0.752 0.37 0.032 0.745-0.014 1.101-0.137 0.096-0.012 0.186-0.036 0.266-0.072-0.031 0.001-0.061 0.003-0.089 0.004-0.201 0.012-0.297 0.038-0.382 0.076h0.080c0.043 0 0.084-0.003 0.125-0.008 0.060-0.021 0.119-0.043 0.177-0.068 0.090-0.004 0.091-0.005 0.092-0.005 0.581-0.249 1.030-0.684 1.303-1.208 0.193-0.37 0.298-0.785 0.303-1.21v-0.181c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293 0.525 0.111 0.707 0.293 0.293 0.431 0.293 0.707v0.090c0.003 0.637 0.228 1.22 0.603 1.675 0.266 0.323 0.607 0.581 0.996 0.751 0.578 0.255 1.206 0.286 1.778 0.125 0.423-0.119 0.814-0.341 1.136-0.652l0.073-0.072c0.196-0.196 0.45-0.294 0.707-0.294s0.512 0.097 0.707 0.292c0.197 0.197 0.295 0.451 0.295 0.709s-0.097 0.512-0.292 0.707l-0.061 0.061c-0.453 0.463-0.702 1.040-0.752 1.632-0.032 0.37 0.014 0.745 0.137 1.101 0.012 0.095 0.037 0.185 0.072 0.266-0.001-0.032-0.002-0.062-0.004-0.089z"
                }
            },

            {
                to: '/friends', name: 'Friends', icon: {
                    version: "1.1",
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    path: "M18 21v-2c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464h-8c-1.38 0-2.632 0.561-3.536 1.464s-1.464 2.156-1.464 3.536v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.829 0.335-1.577 0.879-2.121s1.292-0.879 2.121-0.879h8c0.829 0 1.577 0.335 2.121 0.879s0.879 1.292 0.879 2.121v2c0 0.552 0.448 1 1 1s1-0.448 1-1zM14 7c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464-2.632 0.561-3.536 1.464-1.464 2.156-1.464 3.536 0.561 2.632 1.464 3.536 2.156 1.464 3.536 1.464 2.632-0.561 3.536-1.464 1.464-2.156 1.464-3.536zM12 7c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121 0.335-1.577 0.879-2.121 1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121zM24 21v-2c-0.001-1.245-0.457-2.385-1.215-3.261-0.652-0.753-1.528-1.311-2.529-1.576-0.534-0.141-1.081 0.177-1.222 0.711s0.177 1.081 0.711 1.222c0.607 0.161 1.136 0.498 1.528 0.952 0.454 0.526 0.726 1.206 0.727 1.952v2c0 0.552 0.448 1 1 1s1-0.448 1-1zM15.752 4.099c0.803 0.206 1.445 0.715 1.837 1.377s0.531 1.47 0.325 2.273c-0.176 0.688-0.575 1.256-1.105 1.652-0.314 0.235-0.675 0.409-1.063 0.511-0.534 0.14-0.854 0.687-0.713 1.221s0.687 0.854 1.221 0.713c0.637-0.167 1.232-0.455 1.752-0.844 0.884-0.66 1.552-1.613 1.845-2.758 0.342-1.337 0.11-2.689-0.542-3.788s-1.725-1.953-3.062-2.296c-0.535-0.137-1.080 0.186-1.217 0.721s0.186 1.080 0.721 1.217z"
                }
            }

        ]
    }

}


export const addPost = () => {
    const newPost = {id: 4, message: state.profilePage.newPostText, likeCount: 0};
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderAllTree(state)

}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderAllTree(state);
}

export const addMessage = () => {
    const newMessage = {id: 5, message: state.dialogsPage.newMessageText}
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = '';
    rerenderAllTree(state);
}
export const updateNewMessageText = (newText: string) => {
    state.dialogsPage.newMessageText = newText;
    rerenderAllTree(state);
}

export default state;

