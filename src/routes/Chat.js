import React, { Component } from 'react';
import axios from 'axios';

import ImgJson from '../data/ImgJson.json';

import ChatItem from '../components/ChatItem';
import './Chat.css';



export default class Chat extends Component {

    state = {
        isLoading: true,
        names: [],
        comments: [],
    }
    
    getChats = async () => {
        const {data: names} = await axios.get('https://jsonplaceholder.typicode.com/users');
        const {data: comments} = await axios.get('https://jsonplaceholder.typicode.com/comments');
   
        this.setState( { names, comments, isLoading: false } );
    }

    
    componentDidMount() {
        this.getChats();
    }

    render() {
        const { isLoading, names, comments } = this.state;
        console.log(comments);
        return (
            <div>
                <header className="chat_header">
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
                    <div className="header_bottom">
                        <div className="header_03">
                            <h1>Chatting</h1>
                        </div>
                        <div className="header_04">
                            <i className="fas fa-search"></i>
                            <i className="fas fa-comments"></i>
                            <i className="fas fa-music"></i>
                            <i className="fas fa-cog"></i>
                        </div>
                        <div className="srch"> 
                            <input type="search" placeholder="find friends" /><i className="fas fa-search"></i>
                        </div>
                    </div>
                </header>
                <main className="chat_main">
                    { isLoading ?
                        <div className='loader'><p className='loader_text'>Loading...</p></div> : 
                        <div>
                            <ul>
                                { names.map( ( name, index ) => (<ChatItem 
                                                                id = {name.id}
                                                                username = {name.username}
                                                                comment = {comments[index].name}
                                                                img = {ImgJson[index].img}
                                                            />)) }
                            </ul>
                        </div>
                        
                    }
                </main>
            </div> 
        )
    }
}