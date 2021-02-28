import React, {useEffect, useRef} from 'react'
import moment from "moment";

import Media from 'react-bootstrap/Media';
import { Button, Container, Text, Div, Dropdown, Anchor, Input, Icon, Row, Col } from "atomize"

function MessageBody({ message, user }) {

    
    
    const isMessageMine = (message, user) => {
        return message.user.id === user.uid
    };

    const timeFromNow = timestamp => moment(timestamp).fromNow();

    const isImage = message => {
        return message.hasOwnProperty("image") && !message.hasOwnProperty("content");
    };

    return (
        
        <Media style={{ marginBottom:'3px'}}>
            
            <Media.Body style={{  padding:'0.2%', backgroundColor: isMessageMine(message, user) ? "#ECECEC" : "" }} >
            <span  style={{ display: 'inline' }}>
                
                <img
                style={{ borderRadius: '10px' , display: 'inline', verticalAlign:'middle'}}
                width={48}
                height={48}
                className="mr-3"
                src={message.user.image}
                alt={message.user.name}
                
                />  
                    <div style={{ display: 'inline' , padding:'1%' }} >
                    <div style={{ display: 'inline' , padding:'0.1%', verticalAlign:'middle'}} >
                        
                    <b>{message.user.name}{" "}</b>
                    </div>
                    <span style={{ fontSize: '10px', color: 'gray' }}>
                        {timeFromNow(message.timestamp)}
                    </span>
                        </div>
                        
                        {isImage(message) ?
                    <img style={{ maxWidth: '300px' }} alt="이미지" src={message.image} />
                    :
                    <span style={{ fontSize: '14px', color: 'black' }} id="move">{message.content}</span>
                        }
                   
                    </span>   
                    
            </Media.Body>
        </Media>
    )
}

export default MessageBody
