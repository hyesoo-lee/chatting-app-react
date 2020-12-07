import React from 'react';

import { Link } from 'react-router-dom';

import './Home.css';
import Profile from '../images/empty.jpg';

import MemberList from '../components/MemberList';
import profiles from '../data/memberList.json';


function Home() {
    const myprofile = profiles[0];
    return (
        <div>
            <header className="home_header">
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
                    <div className="header_03">
                        <h1>friends</h1>
                    </div>
                    <div className="header_04">
                        <i className="fas fa-search"></i>
                        <i className="fas fa-user-plus"></i>
                        <i className="fas fa-music"></i>
                        <i className="fas fa-cog"></i>
                    </div>
                </div>
            </header>
            <main className="home_main">
                <div className="myProfile">
                <MemberList 
                                id = {myprofile.id}
                                name = {myprofile.name}
                                email = {myprofile.email}
                                img = {myprofile.profileimg}
                                text = {myprofile.profilemsg}
                                bg = {myprofile.backgroundimg}
                            />
                </div>
                <div className="Profile01">
                    <a href="#"><h2> Friend's Birthday</h2><span className="up"></span></a>
                    <div className="down">
                        <div className="friend gift_emo">
                            <img src={ Profile }/>
                            <span className="name">hyoshin Kim<i className="fas fa-birthday-cake"></i></span>
                            <a href="#" className="gift"><span>Gift Emoticons</span><i className="fas fa-gift"></i></a>
                        </div>
                        <div className="friend2">
                            <span className="birthday"><i className="fas fa-birthday-cake"></i></span>
                            <span className="name">checkout friend's Birthday</span>
                        </div>
                    </div>
                </div>
                <div className="Profile02">
                    <a href="#"><h2>Friends</h2><span className="up"></span></a>
                    <div className="down">
                        <div className="friend">
                            {profiles.map(profile =>{
                                if(profile.id != 0) {return(
                                <MemberList 
                                    id = {profile.id}
                                    name = {profile.name}
                                    email = {profile.email}
                                    img = {profile.profileimg}
                                    text = {profile.profilemsg}
                                    bg = {profile.backgroundimg}
                                />
                            )}})}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home;
