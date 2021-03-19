import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import { Row, Col, Div, Text } from "atomize"
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { FaLockOpen } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSelector } from 'react-redux';

import { MdFavorite } from 'react-icons/md';
import { MdFavoriteBorder } from 'react-icons/md';
import firebase from "../../../firebase";

function MessageHeader({ handleSearchChange }) {
    const chatRoom = useSelector(state => state.chatRoom.currentChatRoom)
    const isPrivateChatRoom = useSelector(state => state.chatRoom.isPrivateChatRoom)
    const user = useSelector(state => state.user.currentUser)
    const usersRef = firebase.database().ref("users")
    const [isFavorited, setIsFavorited] = useState(false)
    const userPosts = useSelector(state => state.chatRoom.userPosts)

    useEffect(() => {
        if (chatRoom && user) {
            addFavoriteListener(chatRoom.id, user.uid)
        }
    })

    const addFavoriteListener = (chatRoomId, userId) => {
        usersRef
            .child(userId)
            .child("favorited")
            .once("value")
            .then(data => {
                if (data.val() !== null) {
                    const chatRoomIds = Object.keys(data.val());
                    const isAlreadyFavorited = chatRoomIds.includes(chatRoomId);
                    setIsFavorited(isAlreadyFavorited)
                }
            });
    };

    const handleFavorite = () => {
        if (isFavorited) {
            usersRef
                .child(`${user.uid}/favorited`)
                .child(chatRoom.id)
                .remove(err => {
                    if (err !== null) {
                        console.error(err);
                    }
                });
            setIsFavorited(prev => !prev)
        } else {
            usersRef
                .child(`${user.uid}/favorited`).update({
                    [chatRoom.id]: {
                        name: chatRoom.name,
                        description: chatRoom.description,
                        createdBy: {
                            name: chatRoom.createdBy.name,
                            image: chatRoom.createdBy.image
                        }
                    }
                });
            setIsFavorited(prev => !prev)
        }
    };
    return (
        <div style={{
            width: '95%',
            height: '120px',
            padding: '1rem',
            marginBottom: '1rem',
            marginTop: '-1rem'
        }}>
            <Container>
                <Row >
                    <Col>
                    <Div
                    d="flex"
                    flexDir="row">
                            <span>
                            {
                                isPrivateChatRoom ?
                                    <FaLock style={{ marginBottom: '10px' }} size="24"/>
                                    :
                                    <FaLockOpen style={{ marginBottom: '10px' }} size="24"/>
                            }
                            </span>
                            {!isPrivateChatRoom &&
                            
                            <span style={{ cursor: 'pointer'  }} onClick={handleFavorite}>
                            {
                            isFavorited ?
                            <MdFavorite style={{ borderBottom: '10px' }} size="24"/>
                            :
                            <MdFavoriteBorder style={{ borderBottom: '10px' }} size="24"/>
                             }
                            </span>
                            }
                            <span>
                            <Text
                             textAlign="left"
                            textSize={{xs:"subheader", md:"display1"}}
                            textWeight="800"
                            fontFamily="ko"
                            m={{ x: { xs: '0.5rem', md: '0.5rem' }, y: { xs: '0.5rem', md: '0.5rem' }}}
                            >
                            {" "}
                            {chatRoom && chatRoom.name}
                            </Text>
                            </span>
                            </Div>
                        
                    </Col>
                    <Col>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">
                                    <AiOutlineSearch />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                onChange={handleSearchChange}
                                size="lg" type="text"
                                placeholder="검색"
                                aria-label="Search"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Col>
                </Row>

                <Row >
                <Div
                h="2.5rem"
                p={{ x: "1rem" }}
                 shadow="new-shadow"
                rounded="lg"
                d="flex"
                align="center"
                justify="center"
                textColor="medium"
                >
                <Text
                    textAlign="left"
                    textSize="subheader"
                    textWeight="800"
                    fontFamily="ko"
                    background=""
                    m={{ b: "1rem" }}
                >
                {chatRoom && chatRoom.description}</Text>
                 </Div>
                
                </Row>
            </Container>
        </div>
    )
}

export default MessageHeader
