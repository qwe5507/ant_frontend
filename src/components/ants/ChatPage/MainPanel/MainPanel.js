import React from "react"
import MessageHeader from './MessageHeader';
import Message from './Message';
import MessageForm from './MessageForm';

import { Button, Container, Text, Div, Dropdown, Anchor, Input, Icon } from "atomize"

function MainPanel() {
    return (
        <div>
            <div style={{ padding: '10rem 3rem 0 10rem' }}>
            <MessageHeader/>
            <div style={{
                    width: '100%',
                    height: '450px',
                    border: '.2rem solid #ececec',
                    borderRadius: '4px',
                 //   padding: '1rem',
                    marginBottom: '1rem',
                    overflowY: 'auto'
                }}>
            <Message />
            
            </div>
            <MessageForm />
            </div>


        </div>
    )
}

export default MainPanel;