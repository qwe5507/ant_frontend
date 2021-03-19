import React, { Component } from 'react'
import firebase from "../../../firebase";
import { connect } from "react-redux";
import {
    setCurrentChatRoom,
    setPrivateChatRoom
} from '../../../redux/actions/chatRoom_action';
import Badge from 'react-bootstrap/Badge';
import { FaRegSmile } from 'react-icons/fa';
import { Div, Text, Container} from "atomize"
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
export class DirectMessages extends Component {

    state = {
        user: this.props.currentUser,

        usersRef: firebase.database().ref("users"),
        users: [],
        activeChatRoom: "",
        connectedRef: firebase.database().ref(".info/connected"),
        presenceRef: firebase.database().ref("presence")

    }

    componentDidMount() {
        if (this.state.user) {
            this.addUsersListeners(this.state.user.uid);
        }
    }

    componentWillUnmount() {
        this.state.usersRef.off();
        this.state.presenceRef.off();
        this.state.connectedRef.off();
    }

    addUsersListeners = currentUserUid => {
        let usersArray = [];
        const { usersRef } = this.state;
        usersRef.on("child_added", DataSnapshot => {
            if (currentUserUid !== DataSnapshot.key) {
                let user = DataSnapshot.val();
                user["uid"] = DataSnapshot.key;
                user["status"] = "offline";
                usersArray.push(user);
                this.setState({ users: usersArray });

            }
        })

        this.state.connectedRef.on("value", DataSnapshot => {
            console.log('DataSnapshot', DataSnapshot.val())
            if (DataSnapshot.val() === true) {
                const ref = this.state.presenceRef.child(currentUserUid);

                ref.onDisconnect().remove(err => {
                    if (err !== null) {
                        console.error(err);
                    }
                });
                ref.set(true);
            }
        });

        this.state.presenceRef.on("child_added", DataSnapshot => {
            if (currentUserUid !== DataSnapshot.key) {
                this.addStatusToUser(DataSnapshot.key);
            }
        });

        this.state.presenceRef.on("child_removed", DataSnapshot => {
            if (currentUserUid !== DataSnapshot.key) {
                this.addStatusToUser(DataSnapshot.key, false);
            }
        });
    }

    addStatusToUser = (userId, connected = true) => {
        const updatedUsers = this.state.users.reduce((acc, user) => {
            if (user.uid === userId) {
                user["status"] = `${connected ? "online" : "offline"}`;
            }
            return acc.concat(user);
        }, []);
        this.setState({ users: updatedUsers });
    };

    changeChatRoom = user => {
        const chatRoomId = this.getChatRoomId(user.uid);
        const chatRoomData = {
            id: chatRoomId,
            name: user.name
        };
        this.props.dispatch(setCurrentChatRoom(chatRoomData));
        this.props.dispatch(setPrivateChatRoom(true));
        this.setActiveChatRoom(user.uid);
    };

    setActiveChatRoom = userId => {
        this.setState({ activeChatRoom: userId });
    };

    getChatRoomId = userId => {
        const currentUserId = this.props.user.uid;
        //나와 다른 사람의 채팅방 ID가 유니크하면서 내가 대화를 할 때 그리고 상대방이 대화를 할 때  같게 만들어야 함 
        //그러기 위해서 나의 아이디와 상대방의 아이디를 이용해서 방 아이디를 생성하고 그 때 순서를 두명이 만들때 다 같게 만들기 위해서 
        //userId < currentUserId 와 같은 로직을 이용해서 방 아이디를 생성합니다. 
        return userId < currentUserId
            ? `${userId}/${currentUserId}`
            : `${currentUserId}/${userId}`;
    };

    isUserOnline = user => user.status === "online";


    renderDirectMessages = (users) => users.length > 0 &&
        users.map(user => (
            <li
                key={user.uid}
                onClick={() => this.changeChatRoom(user)}
                style={{
                    backgroundColor: user.uid === this.state.activeChatRoom && "#ffffff45"
                }}
            >
                # {user.name}
            </li >
        ));

    render() {
        const { users } = this.state;
        return (
            <>
           
         <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
             >
            < Typography>
             <span style={{ display: 'flex', alignItems: 'center' }}>
                    <FaRegSmile style={{ marginRight: '3px' }} />  
                    <Text m={{ xs: "0.2rem", md: "0.3rem" }}
                    textAlign="right"
                    textSize="subheader"
                    textWeight="800"
                    fontFamily="ko"
                    >
                    MESSAGES ({users.length})
            </Text>
            </span>
            </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                <ul style={{ listStyleType: 'none', padding: '0' }}>
                    <Text m={{ xs: "0.2rem", md: "0.3rem" }}
                    textAlign="left"
                    textSize="body"
                    textWeight="800"
                    fontFamily="ko"
                     >
                    {this.renderDirectMessages(users)}
                    </Text>
                </ul>
                </Typography>
                </AccordionDetails>
                </Accordion>
                
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.currentUser,
    };
};

export default connect(mapStateToProps)(DirectMessages);