import React from 'react'
import PropTypes from 'prop-types';

import './ChatItem.css'

import { Link } from 'react-router-dom';

export default function ChatItem( { id, username, comment, img }) {
    return (
        <div>
            <Link to={{pathname: '/chat2', state: { img, username, comment } }}>
                <li key={ id }>
                    <div className="chat_1">
                        <img src= { img } />
                        <p><span className="chat_name">{ username }</span><br /><span className="chat_txt">{ comment }</span></p>
                    </div>
                    <div>
                        <span className="chat_time">9:44</span>
                    </div>
                </li>
            </Link>
        </div>
    )
}

ChatItem.propTypes = {
    id : PropTypes.number.isRequired,
    name : PropTypes.string.isRequired,
    comment : PropTypes.string,
}
