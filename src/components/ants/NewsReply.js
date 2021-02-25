
function NewsReply(){

    return(

        <div>
             <Div
                            
                            h= {{ xs: "22rem", md: "auto" }}
                            w = {{ xs: "25rem", md: "47rem" }}
                            m = {{ l: '2rem' }}
                            // bg="black"
                            // rounded="md"
                            // border="1px solid"
                            // borderColor="gray200"
                            // m = {{
                            //     b : {xs : "2rem"}
                            // }}
                            border={{ b: "1px solid" }}
                            borderColor="gray400"
                            // p={{
                            //     b: { xs : '1rem' }
                            // }}
                            >
                                <Text
                                    // textAlign="left"
                                    textSize="title"
                                    textWeight="400"
                                    fontFamily="secondary"
                                    textAlign="justify"
                                    justify="flex-end"
                                    m={{ b: "1rem" }}
                                    
                                    p={{ t: "3rem", b : "2rem" }}
                                    w = {{xs: "auto", md: "40rem"}}
                                    textAlign="left"
                                    // border= "1px solid"
                                    // borderColor="gray400"
                                    >
                                    dasadsd
                                </Text>
                                    <Div d="flex" align="center"
                                        // border="1px solid"
                                        // borderColor="gray200"
                                        p = {{b : "20px"}}
                                        d = {{ xs : "none" ,md: "flex"}}
                                        h = "3rem"
                                    >
                                        <Icon
                                            transition
                                            name= "Heart"
                                            color= "black"
                                            size="23px"
                                            cursor="pointer"
                                            m={{r : "0.4rem"}}
                                        />
                                        <Text
                                        textAlign="left"
                                        textSize="subheader"
                                        textWeight="600"
                                        fontFamily="secondary"
                                        textColor = "black"
                                        m={{r : "1rem"}}
                                        
                                        >
                                        좋아요
                                        </Text>
                                        <Icon
                                            transition
                                            name= "Message"
                                            color= "black"
                                            size="23px"
                                            cursor="pointer"
                                            m={{r : "0.4rem"}}
                                        />
                                        <Text
                                        textAlign="left"
                                        textSize="subheader"
                                        textWeight="600"
                                        fontFamily="secondary"
                                        textColor = "black"
                                        m={{r : "1rem"}}
                                        >
                                        121
                                        </Text>
                                    </Div>
                        </Div>  
                        <Div
                        m={{t : "0.5rem"}}
                        h="10rem"
                        w="47rem"
                        // d = "flex"
                        d="inline-block" align="center"
                        // bg="black"
                        // rounded="md"
                        // border="1px solid"
                        // borderColor="gray200"
                        >
                            <Text
                            textAlign="left"
                            textSize="subheader"
                            textWeight="600"
                            fontFamily="secondary"
                            textColor = "black"
                            
                            m={{r : "1rem", l : "2rem"}}
                            >
                                댓글 21
                            </Text>
                            <Input
                                placeholder="User Name"
                                p={{ x: "2.5rem" }}
                                m={{t : "0.5rem", l : "2rem"}}
                                h = "5rem"
                                w = {{xs : "25rem", md : "500rem"}}
                                prefix={
                                    <Icon
                                    name="Camera"
                                    color="warning800"
                                    size="16px"
                                    cursor="pointer"
                                    pos="absolute"
                                    top="50%"
                                    left="0.75rem"
                                    transform="translateY(-50%)"
                                    />
                                }
                                />
                                {/* 댓글부분시작 */}
                               <Div
                                p={{ x: "2.5rem", t :"0.7rem"}}
                                m={{ t : "0.5rem"}}
                                h = "7rem"
                                w = {{xs : "25rem", md : "auto"}}
                                border= {{t : "1px solid", b :"1px solid"}}
                                borderColor="gray400"
                                d = "flex"
                                
                                >
                                    <Div
                                    // p={{ x: "2.5rem", t :"1rem"}}
                                    // m={{ t : "0.5rem"}}
                                    // h = "7rem"
                                    w = {{xs : "25rem", md : "auto"}}
                                    d = "inline-block"
                                    >
                                        <Div
                                            textWeight="300"
                                            textColor = "gray"
                                            >
                                            <Text>
                                            이진강
                                            </Text>
                                        </Div>
                                        <Div
                                        m={{ t : "0.3rem"}}
                                            >
                                            <Text
                                            textWeight="600"
                                            textSize="subheader"
                                            >
                                            css의 지옥
                                            </Text>
                                        </Div>

                                        <Div d="flex" align="center"
                                        m={{t : "0.4rem"}}
                                        >
                                            <Icon
                                                transition
                                                name= "Timestamp"
                                                color= "gray"
                                                size="15px"
                                                cursor="pointer"
                                                m={{r : "0.4rem"}}
                                            />
                                            <Text
                                            textAlign="left"
                                            textSize="Typography"
                                            textWeight="600"
                                            fontFamily="secondary"
                                            textColor = "gray"
                                            m={{r : "1rem"}}
                                            
                                            >
                                            14시간
                                            </Text>
                                            <Icon
                                                transition
                                                name= "Heart"
                                                color= "gray"
                                                size="15px"
                                                cursor="pointer"
                                                m={{r : "0.4rem"}}
                                            />
                                            <Text
                                            textAlign="left"
                                            textSize="Typography"
                                            textWeight="600"
                                            fontFamily="secondary"
                                            m={{r : "1rem"}}
                                            textColor = "gray"
                                            >
                                            3
                                            </Text>
                                            <Icon
                                                transition
                                                name= "Message"
                                                color= "gray"
                                                size="15px"
                                                cursor="pointer"
                                                m={{r : "0.4rem"}}
                                            />
                                            <Text
                                            textAlign="left"
                                            textSize="Typography"
                                            textWeight="600"
                                            fontFamily="secondary"
                                            textColor = "gray"
                                            m={{r : "1rem"}}
                                            >
                                            1
                                            </Text>
                                            <Div 
                                            // pos="relative"
                                            // top="0"
                                            // m={{l : "30rem"}}
                                            m={{
                                                l: { xs: '7rem', md: '30rem' }
                                            }}
                                            >
                                            <Icon name="Options" size="20px" />
                                            </Div>

                                        </Div>    
                                    </Div>
                                </Div>
                               
                                {/* 댓글 끝 */}
                        </Div>
        </div>
    )
   
    
}