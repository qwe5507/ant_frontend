import React from 'react'
import UserPanel from './UserPanel';
import Favorited from './Favorited';
import ChatRooms from './ChatRooms';
import DirectMessages from './DirectMessages';
import { Text, Div } from "atomize";

function SidePanel(props) {
    return (
       
    <Div
        d="flex"
        flexDir="column"
         border="1px solid"
        borderColor="gray200"
        w={{ xs: "100%", md: "30%", lg: "30%"  }}
         maxW="100%"
        pos={{ xs: "static", md: "absolute" }}
        m={{ xs: "1rem", md: "-5rem" }}
        //right="0"
        left="0"
        top="0"
        rounded="xl"
        h={{ lg: "100%" }}
        bg="white"
        //shadow="4"
        border="0"
        p="1rem"
        >

            <UserPanel currentUser={props.currentUser} />

            <Favorited currentUser={props.currentUser} />

            <ChatRooms />

            <DirectMessages currentUser={props.currentUser} />

          </Div>
     
        
       
    )
}

export default SidePanel

