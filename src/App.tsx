import React from 'react';
import './App.css';


function App() {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src="https://www.logogenie.net/download/preview/medium/9979471" alt="logo"/>
            </header>
            <nav className='nav'>
                <div><a href="#s">Profile</a></div>
                <div><a href="#s">Messages</a></div>
                <div><a href="#s">News</a></div>
                <div><a href="#s">Music</a></div>
                <div><a href="#s">Settings</a></div>
            </nav>
            <div className='content'>
                <div><img src="https://www.w3schools.com/howto/img_nature_wide.jpg"
                          alt=""/></div>
                <div>ava + description</div>
                <div>
                    My posts
                    <div>New post</div>
                    <div>
                        <div>Post 1</div>
                        <div>Post 2</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;
