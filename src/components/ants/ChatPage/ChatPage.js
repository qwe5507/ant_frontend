import React from 'react';
import SidePanel from './SidePanel/SidePanel';
import MainPanel from './MainPanel/MainPanel';
import { useSelector } from 'react-redux';

function ChatPage() {
    const currentUser = useSelector(state => state.user.currentUser)
    const currentChatRoom = useSelector(state => state.chatRoom.currentChatRoom)
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '300px' }}>
                <SidePanel
                    key={currentUser && currentUser.uid}
                    currentUser={currentUser}
                />
            </div>
            <div style={{ width: '100%' }}>
                <MainPanel
                    key={currentChatRoom && currentChatRoom.id} // 이게 없으면 MainPanel 에서  그냥 componentDidUMount 해서 메시지 데이터가 안가져와진다.
                />
            </div>
        </div >
    )
}


export default ChatPage;


