import React, { Component } from 'react'
import firebase from "../../../firebase";
import { connect } from 'react-redux';
import { setCurrentChatRoom, setPrivateChatRoom } from '../../../redux/actions/chatRoom_action';
import { FaRegSmileBeam } from 'react-icons/fa';

export class Favorited extends Component {

    state = {
        favoritedChatRooms: [],
        usersRef: firebase.database().ref("users"),
        activeChatRoomId: ''
    }

    componentDidMount() {
        if (this.props.currentUser) {
            this.addListeners(this.props.currentUser.uid);
        }
    }

    componentWillUnmount() {
        if (this.props.currentUser) {
            this.removeListener();
        }
    }

    removeListener = () => {
        this.state.usersRef
            .child(`${this.props.currentUser.uid}/favorited`).off();
    };

    addListeners = userId => {

        const { usersRef } = this.state;

        usersRef
            .child(userId)
            .child("favorited")
            .on("child_added", DataSnapshot => {
                const favoritedChatRoom = { id: DataSnapshot.key, ...DataSnapshot.val() };
                this.setState({
                    favoritedChatRooms:
                        [...this.state.favoritedChatRooms, favoritedChatRoom]
                })
            });

        usersRef
            .child(userId)
            .child("favorited")
            .on("child_removed", DataSnapshot => {
                const chatRoomToRemove = { id: DataSnapshot.key, ...DataSnapshot.val() };
                const filteredChatRooms = this.state.favoritedChatRooms.filter(chatRoom => {
                    return chatRoom.id !== chatRoomToRemove.id;
                });
                this.setState({ favoritedChatRooms: filteredChatRooms })
            });
    }

    changeChatRoom = (chatRoom) => {
        this.props.dispatch(setCurrentChatRoom(chatRoom));
        this.setState({ activeChatRoomId: chatRoom.id })
        this.props.dispatch(setPrivateChatRoom(false));
    }

    renderFavoritedChatRooms = (favoritedChatRooms) =>
        favoritedChatRooms.length > 0 &&
        favoritedChatRooms.map(chatRoom => (
            <li
                key={chatRoom.id}
                onClick={() => this.changeChatRoom(chatRoom)}
                style={{
                    backgroundColor: chatRoom.id === this.state.activeChatRoomId && "#ffffff45"
                }}
            >
                # {chatRoom.name}
            </li >
        ));


    render() {
        const { favoritedChatRooms } = this.state
        return (
            <>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                    <FaRegSmileBeam style={{ marginRight: '3px' }} />
                    FAVORITED ({favoritedChatRooms.length})
                </span>
                <ul style={{ listStyleType: 'none', padding: '0' }}>
                    {this.renderFavoritedChatRooms(favoritedChatRooms)}
                </ul>
            </>
        )
    }
}



export default connect()(Favorited);
