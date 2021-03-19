import React, {useEffect} from 'react';
import SidePanel from './SidePanel/SidePanel';
import MainPanel from './MainPanel/MainPanel';
import { useSelector } from 'react-redux';
import { Div, Container } from "atomize"
function ChatPage() {
    const currentUser = useSelector(state => state.user.currentUser)
    const currentChatRoom = useSelector(state => state.chatRoom.currentChatRoom)

    return (
        <Div>
        <Div
            tag="section"
            w="100vw"
            p={{ t: { xs: "0.5rem", md: "0.5rem", md: "0.5rem" } }}
            overflow="hidden"
        >
            <Container>
                <Div
                    d="flex"
                    justify="space-between"     
                    p={{ b: "280rem" }}
                   border={{ b: "1px solid" }}
                 borderColor="gray300"
                    w={{ b: "280rem"}}
                >
                    <Div
                        m={{ x: { xs: '0', md: '0', lg: '0' }, y: { xs: '0', md: '0', lg: '0' }}}
                        minW={{ xs: "100%", md: "100%", lg: "100%" }}
                        d="flex"
                        align="center"
                        justify="space-between" 
                        flexDir={{ xs: "column", md: "row" }}
                        h={{ xs: "auto", md: "auto", lg: "auto" }}
                        m={{xs: "0", md: "0", lg: "0" }}
                        pos="relative"
                    >
                <div style={{ width: '250px' }}>
                <SidePanel                  
                    key={currentUser && currentUser.uid}
                    currentUser={currentUser}
                />
                </div>
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


