import React from "react"
import UserPanel from './UserPanel';
import Favorited from './Favorited';
import ChatRooms from './ChatRooms';
import DirectMessages from './DirectMessages';


function SidePanel() {
    return (
        <div>
         <UserPanel /> 
         <Favorited />
         <ChatRooms />
         <DirectMessages  />
            
        </div>
    )
}

export default SidePanel;