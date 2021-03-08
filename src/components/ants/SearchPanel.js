import React, { useState, useEffect } from "react"

import { useHistory } from 'react-router-dom';

import { Switch, Label, Example, Div, Br, Text, Container, Anchor, Input, Icon, Button, props, girl, rest, boy } from "atomize";
import axios from "axios";

import { useDispatch } from 'react-redux';
import { setUserLogout } from '../../redux/actions/user_action';

function SearchPanel() {
    const dispatch = useDispatch();
    let history = useHistory();

    let [search, searchChange] = useState("");
    let [countlist, countlistChange] = useState("");

    useEffect(() => {
    }, []);

    const onChange = e => {
        searchChange(e.target.value)
        console.log(e.target.value)
    }

    const onKeyPress = (e) => {
        if (e.key == 'Enter') {
            onClick();
        }
    }

    const onClick = () => {
        upsertKeyword()
        history.push("/SearchResult/" + search)
    };

    function upsertKeyword() {
        axios.get("http://localhost:8000/news/upsert", { params: { id: { search } } })
            .then(response => {
                console.log(response);

                console.log("??")
            })
            .catch(error => {
                console.log(error);
            });

    }

    function searchCount() {
        countlist = axios.get("http://localhost:8000/news/searchcount")
        console.log(countlist)
    }

    return (
        <Div
            tag="section"
            w="100vw"
            p={{ t: { xs: "6rem", md: "8rem" } }}
            overflow="hidden"
        >
            <Container>
                <Div
                    d="flex"
                    justify="center"
                    p={{ b: "2rem" }}
                >
                    <Input
                        placeholder="검색어를 입력해주세요."
                        w={{ xs: "80vw", md: "30rem" }}
                        h={{ xs: "4rem", md: "4rem" }}
                        onChange={onChange}
                        onKeyPress={onKeyPress}
                        pos="static"
                        textSize="title"
                        textWeight="500"
                        fontFamily="ko"
                        textColor="medium"
                        border="2px solid"
                        foucsBorderColor="black800"
                        focusTextColor="black800"
                        suffix={
                            <Icon
                                name="Search"
                                size="20px"
                                cursor="pointer"
                                pos="absolute"
                                top="50%"
                                right="1rem"
                                transform="translateY(-50%)"
                                onClick={onClick}
                            />
                        }
                    />
                </Div>
            </Container>
        </Div>
    )
}

export default SearchPanel;