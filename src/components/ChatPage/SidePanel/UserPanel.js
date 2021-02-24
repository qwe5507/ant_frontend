/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import firebase from "../../../firebase";
import mime from "mime-types";
import { setPhotoURL } from '../../../redux/actions/user_action';

import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import { IoIosChatboxes } from 'react-icons/io';

function UserPanel() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.currentUser)

    const inputOpenImageRef = useRef()

    // const handleLogout = () => {
    //     firebase.auth().signOut()
    // }

    const handleOpenImageRef = () => {
        inputOpenImageRef.current.click()
    }

    const handleUploadImage = async (event) => {
        const file = event.target.files[0];

        if (!file) return;
        const metadata = { contentType: mime.lookup(file.name) };

        console.log('metadata', file.name)

        console.log('metadata', metadata)

        try {
            //스토리지에 파일 저장
            let uploadTaskSnapshot = await firebase.storage().ref()
                .child(`user_image/${user.uid}`)
                .put(file, metadata)

            let downloadURL = await uploadTaskSnapshot.ref.getDownloadURL()

            // 프로필 수정 
            await firebase.auth().currentUser.updateProfile({
                photoURL: downloadURL
            })

            // 바뀐 이미지로 보여주기
            dispatch(setPhotoURL(downloadURL))

            // 데이터베이스 수정 
            await firebase.database().ref("users")
                .child(user.uid)
                .update({ image: downloadURL })

        } catch (error) {
            alert(error)
        }

    }

    return (
        <div>
            {/* Logo */}
            <h3 style={{ color: 'white' }}>
                <IoIosChatboxes />
                {" "} Chat App
            </h3>
            <br />

            {/* User Dropdown */}
            <div style={{ display: 'flex', marginBottom: '1rem' }}>
                <Image
                    style={{ width: '30px', height: '30px', marginTop: '3px' }}
                    src={user && user.photoURL}
                    roundedCircle
                />
                <Dropdown>
                    <Dropdown.Toggle
                        style={{
                            background: 'transparent',
                            border: '0px'
                        }}
                        id="dropdown-basic"
                    >
                        {user && user.displayName}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={handleOpenImageRef}>
                            프로필 사진 변경
                        </Dropdown.Item>
                        {/* <Dropdown.Item onClick={handleLogout}>
                            로그아웃
                        </Dropdown.Item> */}
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <input
                type="file"
                accept="image/jpeg, image/png"
                ref={inputOpenImageRef}
                style={{ display: "none" }}
                onChange={handleUploadImage}
            />

        </div>
    )
}

export default UserPanel
