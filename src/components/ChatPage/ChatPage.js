import React from 'react';
import { Container, Div } from "atomize";
import SidePanel from './SidePanel/SidePanel';
import MainPanel from './MainPanel/MainPanel';
import { useSelector } from 'react-redux';

function ChatPage() {
    const currentUser = useSelector(state => state.user.currentUser)
    const currentChatRoom = useSelector(state => state.chatRoom.currentChatRoom)
    return (
        <Div>
        <Div
            tag="section"
            w="100%"
            p={{ t: { xs: "3rem", md: "9rem" } }}
            overflow="hidden"
        >
            <Container>
                <Div
                    d="flex"
                    justify="space-between" 
                    p={{ b: "100rem" }}
                    border={{ b: "1px solid" }}
                    borderColor="gray300"
                >
                    <Div
                        minW={{ xs: "100%", md: "100%", lg: "100%" }}
                        d="flex"
                        align="center"
                        justify="space-between" 
                        flexDir={{ xs: "column", md: "row" }}
                        h={{ xs: "auto", md: "auto", lg: "auto" }}
                        pos="relative"
                    >
                <SidePanel
                    key={currentUser && currentUser.uid}
                    currentUser={currentUser}
                />
           
                <MainPanel
                    key={currentChatRoom && currentChatRoom.id} // 이게 없으면 MainPanel 에서  그냥 componentDidUMount 해서 메시지 데이터가 안가져와진다.
                />
          </Div>
          </Div>
          </Container>
          </Div>
          </Div>
    )
}


export default ChatPage;


