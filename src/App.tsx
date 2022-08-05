import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar, {NavLinkType} from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {PostType} from "./components/Profile/MyPosts/Post/Post";
import {IconType} from "./components/Navbar/Icon/Icon";
import {DialogItemType} from "./components/Dialogs/DialogItem/DialogItem";
import {MessageType} from "./components/Dialogs/Message/Message";


type PropsType = {
    dialogs: Array<DialogItemType>
    messages: MessageType[]
    posts: Array<PostType>
    navLinks: NavLinkType[]
}


function App(props: PropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar links={props.navLinks}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={'/profile'} element={<Profile posts={props.posts}/>}/>
                        <Route path={'/dialogs/*'}
                               element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
