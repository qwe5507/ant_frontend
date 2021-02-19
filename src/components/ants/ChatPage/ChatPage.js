import React, { useState} from "react"
import SidePanel from './SidePanel/SidePanel';
import MainPanel from './MainPanel/MainPanel';

function ChatPage() {

        return (
        <div>
             <div style={{ display: 'flex' }}>
            <div style={{ width: '300px' }}>
                <SidePanel />
            </div>
            <div style={{ width: '100%' }}>
                <MainPanel />
            </div>
            </div>
        </div>
    )
}


export default ChatPage;