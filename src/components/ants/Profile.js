import React, { useState } from "react";

import ProfileDetail1 from "./ProfileDetail1";
import ProfileDetail2 from "./ProfileDetail2";
import ProfileDetail3 from "./ProfileDetail3";

import { BrowserRouter as Router, Route, Link, useHistory } from "react-router-dom";
import { Switch, Label, Example, Div, Br, Text, Container, Anchor, Input, Icon, Button, props, girl, rest, boy } from "atomize";

function Profile() {

    let history = useHistory();
    let [editProfile, editProfileChange] = useState(false);

    return (
        <Div>
            <Div
                tag="section"
                w="100vw"
                p={{ t: { xs: "5rem", md: "12rem" } }}
                overflow="hidden"
            >
                <Container>
                    <Div
                        d="flex"
                        justify="center"
                        p={{ b: "10.5rem" }}
                        border={{ b: "1px solid" }}
                        borderColor="gray300"
                    >
                        <Div
                            minW={{ xs: "100%", md: "44rem", lg: "59rem" }}
                            d="flex"
                            align="center"
                            justify="center" 
                            flexDir={{ xs: "column", md: "row" }}
                            h={{ xs: "auto", md: "21rem", lg: "20rem" }}
                            pos="relative"
                        >

                            <ProfileDetail1 editProfile={editProfile} editProfileChange={editProfileChange} />
                            { editProfile
                                ?
                                <ProfileDetail2 />
                                : ''
                            }
                            <ProfileDetail3 />

                        </Div>
                    </Div>
                </Container>
            </Div>
        </Div>
    )
}

export default Profile;