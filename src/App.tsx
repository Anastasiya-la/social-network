import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {stateType, storeType} from "./redux/state";
import Friends from "./components/Friends/Friends";


type PropsType = {
    state: stateType
    store: storeType
}


function App(props: PropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={'/profile'}
                               element={<Profile ProfilePage={props.state.profilePage}
                                                 dispatch={props.store.dispatch.bind(props.store)}/>}/>
                        <Route path={'/dialogs/*'}
                               element={<Dialogs state={props.state.dialogsPage}
                                                 dispatch={props.store.dispatch.bind(props.store)}/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                        <Route path={'/friends'} element={<Friends/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
