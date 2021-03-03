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
        history.push("/NewsDetail/" + search)
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
            p={{ t: { xs: "6rem", md: "6rem" } }}
            overflow="hidden"
            d="flex"
            justify="center"
        >
            <Input
                placeholder="Search"
                // p={{ x: "30.5rem" }}
                w={{ xs: "38rem", md: "20rem" }}
                h={{ xs: "3rem", md: "3rem" }}
                onChange={onChange}
                onKeyPress={onKeyPress}

                pos="static"
                suffix={
                    <Icon

                        onClick={onClick}
                        name="Search"
                        size="20px"
                        cursor="pointer"
                        pos="absolute"

                        top="50%"
                        right="1rem"
                        transform="translateY(-50%)"
                    />
                }
            />
        </Div>
    )
}

export default SearchPanel;