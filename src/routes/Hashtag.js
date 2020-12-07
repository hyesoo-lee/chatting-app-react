import React from 'react'

import './Hashtag.css'

function Hashtag() {
    return (
        <div>
            <header className="hashtag_header">
                <div className="header_top">
                    <div className="header_1">
                        <span>12</span>:<span>00</span>
                    </div>
                    <div className="header_2">
                        <i class="fas fa-signal"></i>
                        <i class="fas fa-wifi"></i>
                        <i class="fas fa-battery-three-quarters"></i>
                    </div>
                </div>
                <div className="headerbottom">
                    <div className="header03">
                        <div>
                            <h3>#COVID</h3>
                            <h3>#News</h3>
                            <h3>shopping</h3>
                            <h3>FUN</h3>
                            <h3>Music</h3>
                            <h3>Sport</h3>
                            <h3>Performance</h3>
                        </div>
                    </div>
                    <div className="header04">
                        <a href="#"><i class="fas fa-exchange-alt"></i></a>
                    </div>
                </div>
            </header>   
            <main className="hashtag_main">
                <div className="corona">
                    <i className="fas fa-hands-wash"></i>
                    <div className="news_top">
                        <p>The US just topped 1,100 coronavirus deaths a day.</p>
                        <ul>
                            <li><a href="#">Live updates <i class="fas fa-angle-right"></i></a></li>
                            <li><a href="#">Social-distance <i class="fas fa-angle-right"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="news1">
                    <ul>
                        <li><a href="#">Goldman Sachs unit pleads guilty in Malaysian bribery case</a></li>
                        <li><a href="#"><i className="far fa-play-circle"></i>Final 2020 presidential debate</a></li>
                        <li><a href="#">The number of older people getting coronavirus in Europe is rising again. </a></li>
                        <li><a href="#">Vatican extends secretive deal with China on appointing bishops</a></li>
                        <li><a href="#">Alexandria Ocasio-Cortez just played a video game on Twitch to encourage voting</a></li>
                    </ul>
                    <ul>
                        <li><a href="#"><span></span> <span>Adele and Rihanna, please save us from 2020 with new music.</span></a></li>
                        <li><a href="#"><span></span> <span>Nearly 50 people contracted coronavirus after fellowship...</span></a></li>
                    </ul>
                </div>
                <div className="Qr_check">
                    <h4><span>COVID-19</span> QR Check-in</h4>
                </div>
                <div className="weather">
                    <i class="fas fa-cloud-sun"></i>
                    <p><span>12</span>°</p>
                    <p>Partly Cloudy<br /> Feels like: 8°</p>
                </div>
            </main>
        </div>
    )
}

export default Hashtag;