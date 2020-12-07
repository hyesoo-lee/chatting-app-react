import React, { useEffect } from 'react';

import './Chat2.css'
import Profile from '../images/empty.jpg';

import { Link } from 'react-router-dom';

function Chat2(props) {
    const {location, history} = props;
    const redirect = () => {
        if(location.state === undefined){
            history.push('/');
        }
    }
    useEffect(redirect,[]);
    if(location.state){
        const { img, username, comment } = location.state;
    return (
        <div className="Chat2_body">
            <header className="Chat2_header">
                <div className="header_top">
                    <div className="header_1">
                        <span>12</span>:<span>00</span>
                    </div>
                    <div className="header_2">
                        <i className="fas fa-signal"></i>
                        <i className="fas fa-wifi"></i>
                        <i className="fas fa-battery-three-quarters"></i>
                    </div>
                </div>
                <div className="header_bottom">
                    <div class="header_03">
                        <Link to="/chat">
                            <i className="fas fa-chevron-left"></i>
                        </Link>
                    </div>
                    <div className="header_04">
                    <h1>{username}</h1>
                    </div>
                    <div className="header_05">
                        <i className="fas fa-search"></i>
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </header>
            <main className="Chat2_main">
                <p>Thursday, October 22, 2020</p>
                <div className="me">
                    <span className="time">10:10</span>
                    <div>
                        <span className="talk">Hi</span><br />
                        <span className="talk">How are you?</span>
                    </div>
                </div>
                <div className="you">
                    <span className="img"><img src={img} alt="porfile" /></span>
                    <div>
                        <span className="name">{username}</span><br />
                        <span className="talk">I'm fine thank you</span><br />
                        <span className="talk">How about you?</span><br />
                        <span className="talk">{comment}</span>
                    </div>
                    <span className="time">12:12</span>
                </div>
            </main>
            <nav className="Chat2_nav">
                <i class="far fa-plus-square"></i>
                <div>
                    <input type="text" />
                    <i class="far fa-smile"></i>
                    <i class="fas fa-hashtag"></i>
                </div>
            </nav>
        </div>
    )}else return null;
}

export default Chat2;
