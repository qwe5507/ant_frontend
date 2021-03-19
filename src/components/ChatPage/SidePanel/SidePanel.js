import React, {useEffect} from 'react'
import UserPanel from './UserPanel';
import Favorited from './Favorited';
import ChatRooms from './ChatRooms';
import DirectMessages from './DirectMessages';

function SidePanel(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div style={{
            padding: '1.5rem 0rem',
            minHeight: '60vh',
            color: 'black',
            minWidth: '75px'
        }}>
            <UserPanel currentUser={props.currentUser} />

            <Favorited currentUser={props.currentUser} />

            <ChatRooms />

            <DirectMessages currentUser={props.currentUser} />
        </div>
    )
}

export default SidePanel

