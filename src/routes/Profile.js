import React, { useEffect } from 'react';
import Profileimg from '../images/empty.jpg';
import { Link } from 'react-router-dom';

import './Profile.css';


function Profile(props) {
    const {location, history} = props;
    const redirect = () => {
        if(location.state === undefined){
            history.push('/');
        }
    }
    useEffect(redirect,[]);
    if(location.state){
        const {id, name, email, img, bg} = location.state;
    return (
        <div className="profile_page">
            <div className="background" style={{background: "url("+bg+") no-repeat 50% 50%" , backgroundSize: "cover"}}></div>
            <div className="profile_header">
                <div className="header_top">
                    <div className="header_1">
                        <span>00</span>:<span>00</span>
                    </div>
                    <div className="header_2">
                        <i className="fas fa-signal"></i>
                        <i className="fas fa-wifi"></i>
                        <i className="fas fa-battery-three-quarters"></i>
                    </div>
                </div>
            </div>
            <div className="profile_main">
                <div>
                    <span>
                        <Link to="/">
                            <i class="fas fa-times"></i>
                        </Link>
                    </span>
                    <ul>
                        <li><i className="fas fa-gift"></i></li>
                        <li><i class="fas fa-qrcode"></i></li>
                        <li><i class="fas fa-cog"></i></li>
                    </ul>
                </div>
                <section>
                    <img src={img}></img>
                    <p>{name}</p>
                </section>
                <ul>
                    <li><i class="fas fa-comment"></i><span>chatting <br />with me</span></li>
                    <li><i class="fas fa-user-edit"></i><span>profile edit</span></li>
                    <li><i class="fas fa-poo"></i><span>sns</span></li>
                </ul>
            </div>
        </div>
    )
}else return null;
}

export default Profile
