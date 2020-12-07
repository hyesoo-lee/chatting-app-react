import React from 'react'
import {Link} from 'react-router-dom';
import './MemberList.css'

function MemberList({id, name, email, img, text, bg}) {
    return (
        <div className="member">
            <div className="member_list">
                <img src={img} alt="" />
                <Link to={({
                pathname : '/profile',
                state : {id, name, email, img, bg}
                })}>{name}
                </Link>
            </div>     
            <span>{text}</span>         
        </div>
    )
} 

export default MemberList