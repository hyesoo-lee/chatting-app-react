import React from 'react';
import './More.css';

import Profile from '../images/empty.jpg';

function More() {
    return (
        <div>
            <header className="more_header">
                <div class="header_top">
                    <div class="header_1">
                        <span>12</span>:<span>00</span>
                    </div>
                    <div class="header_2">
                        <i class="fas fa-signal"></i>
                        <i class="fas fa-wifi"></i>
                        <i class="fas fa-battery-three-quarters"></i>
                    </div>
                </div>
                <div class="header_bottom">
                    <div class="header_03">
                        <h1>More</h1>
                    </div>
                    <div class="header_04">
                        <i class="fas fa-search"></i>
                        <i class="fas fa-qrcode"></i>
                        <i class="fas fa-music"></i>
                        <i class="fas fa-cog"></i>
                    </div>
                </div>
            </header>
            <main className="more_main">
                <div class="myProfile">
                    <div class="profile">
                        <img src="https://i.pinimg.com/236x/0d/d7/b6/0dd7b6b7ce0ff82834f7d0172717931e.jpg" alt="porfile" />
                        <p class="name">hyesoo Lee<br /><span class="email"> wonderland08@naver.com</span></p>
                    </div>
                    <div class="my">
                        <p>MY</p>
                        <p><i class="far fa-smile"> 10</i></p>
                    </div>
                </div>
                <div class="kakao_pay">
                    <p><i class="fas fa-comment"></i> <strong>pay</strong> $100</p>
                    <div>
                        <a href="#">send</a>
                        <a href="#">pay</a>
                        <a href="#">asset</a>
                    </div>
                </div>
                <div class="menu">
                    <ul>
                        <li><a href="#"><i class="far fa-envelope"></i><span>mail</span></a></li>
                        <li><a href="#"><i class="far fa-calendar-check"></i><span>calendar</span></a></li>
                        <li><a href="#"><i class="fas fa-archive"></i><span>drawer</span></a></li>
                        <li><a href="#"><i class="fas fa-gift"></i><span>gift</span></a></li>
                        <li><a href="#"><i class="fas fa-tshirt"></i><span>style</span></a></li>
                        <li><a href="#"><i class="fas fa-music"></i><span>music</span></a></li>
                        <li><a href="#"><i class="fas fa-utensils"></i><span>order</span></a></li>
                        <li><a href="#"><i class="far fa-file"></i><span>page</span></a></li>
                        <li><a href="#"><i class="far fa-grin-stars"></i><span>emoticon</span></a></li>
                        <li><a href="#"><i class="fas fa-store"></i><span>shopping</span></a></li>
                        <li><a href="#"><i class="fas fa-gamepad"></i><span>game</span></a></li>
                        <li><a href="#"><i class="fas fa-border-all"></i><span>all Menu</span></a></li>
                    </ul>
                </div>
    </main>
        </div>
    )
}

export default More;