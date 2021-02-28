import React, { useState, useEffect } from "react"

import { Button, Container, Text, Div, Dropdown, Anchor, Input, Icon } from "atomize"

// import Notification from './uicomponents/Notification'
function BacktestCondition() {

    // 선택 조건 목록
    let [co, coChange] = useState([]);

    // 각 조건 드롭박스
    let [showcoFsvalue, showcoFsvalueChange] = useState(false);
    let [coFsvalueSel, coFsvalueSelChange] = useState('조건');

    let [showcoPeriod, showcoPeriodChange] = useState(false);
    let [coPeriodSel, coPeriodSelChange] = useState('기간');

    let [showcoSet, showcoSetChange] = useState(false);
    let [coSetSel, coSetSelChange] = useState('기준');

    let [showcoPrice, showcoPriceChange] = useState(false);
    let [coPriceSel, coPriceSelChange] = useState('조건');

    // 석택 조건 목록 추가 함수
    function addFsCo() {

        
        // 이미 Arr에 추가된 것인지 확인

        // 입력 값 가져오기

        // 입력 값 넣기
        var temp = {'category': '재무제표', 'condition':coFsvalueSel, 'period':coPeriodSel, 'base':coSetSel};

        coChange([...co,temp]);
    }

    function addPriceCo(){
        console.log(co);
    }

    // 재무제표 조건
    const coFsvalue = (
        <Div>
            {['매출액', '영업이익', '당기순이익', '영업이익률', '순이익률', 'ROE(%)', 'ROA(%)', '부채비율'].map((name, index) => (
                <Anchor
                    d="block"
                    p={{ y: "0.25rem", l: "0.75rem" }}
                    onClick={() => coFsvalueClicked(name)}
                >
                    {name}
                </Anchor>
            ))}
        </Div>
    );

    function coFsvalueClicked(name) {
        coFsvalueSelChange(name)
        showcoFsvalueChange(!showcoFsvalue)
    }

    // 기간
    const coPeriod = (
        <Div>
            {['분기', '연간'].map((name, index) => (
                <Anchor
                    d="block"
                    p={{ y: "0.25rem", l: "0.75rem" }}
                    onClick={() => coPeriodClicked(name)}
                >
                    {name}
                </Anchor>
            ))}
        </Div>
    );

    function coPeriodClicked(name) {
        coPeriodSelChange(name)
        showcoPeriodChange(!showcoPeriod)
    }

    // 기준
    const coSet = (
        <Div>
            {['수치', '성장률'].map((name, index) => (
                <Anchor
                    d="block"
                    p={{ y: "0.25rem", l: "0.75rem" }}
                    onClick={() => coSetClicked(name)}
                >
                    {name}
                </Anchor>
            ))}
        </Div>
    );

    function coSetClicked(name) {
        coSetSelChange(name)
        showcoSetChange(!showcoSet)
    }

    // 가격지표 조건 (복수선택)
    const coPrice = (
        <Div>
            {['PER', 'PBR', 'PCR', 'POR', 'PSR', 'PEG'].map((name, index) => (
                <Anchor
                    d="block"
                    p={{ y: "0.25rem", l: "0.75rem" }}
                    onClick={() => coPriceClicked(name)}
                >
                    {name}
                </Anchor>
            ))}
        </Div>
    );

    function coPriceClicked(name) {
        coPriceSelChange(name)
        showcoPriceChange(!showcoPrice)
    }

    useEffect(() => {
    });

    return (
        <>
            <Div
                tag="section"
                w="100vw"
                p={{ t: { xs: "6rem", md: "8rem" } }}
                overflow="hidden"
            >
                <Container
                    d="flex"
                    flexDir="column"
                    align="center">
                    <Text
                        tag="h1"
                        textWeight="800"
                        textAlign="center"
                        textSize="display2"
                        m={{ b: "1rem" }}
                        fontFamily='ko'
                    >
                        한국주식 백테스트
                        </Text>
                    <Text
                        tag="h2"
                        textWeight="400"
                        maxW="36rem"
                        textSize="subheader"
                        textAlign="center"
                        fontFamily="secondary"
                        textColor="medium"
                        m={{ b: "2.5rem" }}
                        fontFamily='ko'
                    >
                        설정한 조건대로 과거에 매매했다면 성과가 어땠을지 확인하고 공유해보세요.
                    </Text>

                    {/* 재무제표 조건 드롭다운 */}
                    <Div
                        d="flex"
                        justify="center"
                        flexDir="column"
                        align="center"
                        w="100%"
                    >
                        <Text
                            textSize="title"
                            m={{ b: "0.5rem" }}
                            textWeight="800"
                            textAlign="center"
                            fontFamily="ko"
                        >
                            1. 재무제표 조건
                        </Text>
                        <Text
                            textSize="subheader"
                            m={{ b: "0.5rem" }}
                            textWeight="500"
                            textAlign="center"
                            fontFamily="ko"
                        >
                            재무제표 조건 선택 후 값의 범위 또는 성장률 중 하나만 선택해 입력할 수 있습니다. 모든 조건은 중복선택이 가능합니다.
                        </Text>

                        <Div
                            d="flex"
                            w="100%"
                            justify="center"
                        >

                            <Dropdown
                                w={{ xs: "50%", sm: "11rem" }}
                                m={{ b: "1.5rem", r: "1rem" }}
                                isOpen={showcoFsvalue}
                                onClick={() =>
                                    showcoFsvalueChange(!showcoFsvalue)
                                }
                                menu={coFsvalue}
                            >
                                {coFsvalueSel}
                            </Dropdown>
                            <Dropdown
                                w={{ xs: "30%", sm: "8rem" }}
                                m={{ b: "1.5rem", r: "1rem" }}
                                isOpen={showcoPeriod}
                                onClick={() =>
                                    showcoPeriodChange(!showcoPeriod)
                                }
                                menu={coPeriod}
                            >
                                {coPeriodSel}
                            </Dropdown>
                            <Dropdown
                                w={{ xs: "30%", sm: "8rem" }}
                                m={{ b: "1.5rem", r: "1rem" }}
                                isOpen={showcoSet}
                                onClick={() =>
                                    showcoSetChange(!showcoSet)
                                }
                                menu={coSet}
                            >
                                {coSetSel}
                            </Dropdown>
                            <Input
                                w={{ xs: "100%", sm: "11rem" }}
                                m={{ b: "1.5rem", r: "1rem" }}
                                fontFamily='ko'
                                placeholder="값 입력"
                            />
                            <Icon
                                name="Add"
                                color="info700"
                                size="40px"
                                cursor="pointer"
                                onClick={() => { addFsCo() }}
                            />

                        </Div>

                    </Div> {/* 끝 : 재무제표 조건 드롭다운 */}

                    {/* 가격지표 조건 드롭다운 */}
                    <Div
                        d="flex"
                        justify="center"
                        flexDir="column"
                        align="center"
                        w="100%"
                    >
                        <Text
                            textSize="title"
                            m={{ b: "0.5rem" }}
                            textWeight="800"
                            textAlign="center"
                            fontFamily="ko"
                        >
                            2. 가격지표 조건 (중복선택)
                        </Text>
                        <Text
                            textSize="subheader"
                            m={{ b: "0.5rem" }}
                            textWeight="500"
                            textAlign="center"
                            fontFamily="ko"
                        >
                            재무제표 조건 선택 시 값의 범위 또는 성장률 중 하나만 선택할 수 있습니다.
                        </Text>
                    </Div>
                    <Div
                        d="flex"
                        w="100%"
                        justify="center"
                    >
                        <Dropdown
                            w={{ xs: "50%", sm: "11rem" }}
                            m={{ b: "1.5rem", r: "1rem" }}
                            isOpen={showcoPrice}
                            onClick={() =>
                                showcoPriceChange(!showcoPrice)
                            }
                            menu={coPrice}
                        >
                            {coPriceSel}
                        </Dropdown>

                        <Input
                            w={{ xs: "100%", sm: "11rem" }}
                            m={{ b: "1.5rem", r: "1rem" }}
                            fontFamily='ko'
                            placeholder="값 입력" />

                        <Icon
                            name="Add"
                            color="info700"
                            size="40px"
                            cursor="pointer"
                            onClick={() => { addPriceCo() }}
                        />

                    </Div> {/* 끝 : 가격지표 조건 드롭다운 */}
                </Container>

                {/* 선택조건 보여주기 */}
                <Container
                    d="flex"
                    flexDir="column"
                    align="center"
                >
                    {/* 선택조건 제목 */}
                    <Text
                        textSize="title"
                        m={{ b: "0.5rem" }}
                        textWeight="800"
                        textAlign="center"
                        fontFamily="ko"
                        >
                        선택조건
                    </Text>
                    {/* 선택조건 칼럼명 */}
                    <Div
                        p="1rem"
                        bg="white"
                        shadow="2"
                        rounded="xl"
                        w={{ xs: "100%", sm: "40rem" }}
                        m={{ b: "0.5rem" }}
                    >
                        <Div
                            d="flex"
                            align="center"
                            justify="space-between"
                            pos="relative"
                            flexDir="row"
                        >
                            <Text
                                textWeight="800"
                                fontFamily="ko"
                            >
                                분류
                            </Text>
                            <Text
                                textWeight="800"
                                fontFamily="ko"
                            >
                                조건
                            </Text>
                            <Text
                                textWeight="800"
                                fontFamily="ko"
                            >
                                기간
                            </Text>
                            <Text
                                textWeight="800"
                                fontFamily="ko"
                            >
                                값
                            </Text>
                            <Text
                                textWeight="800"
                                fontFamily="ko"
                            >
                                삭제
                            </Text>
                            {/* <Icon
                                name="CBIndetermine"
                                color="brand900"
                                size="20px"
                            /> */}
                        </Div>
                    </Div>
                    
                    

                    <Button
                        h="3rem"
                        w={{ xs: "50%", sm: "11rem" }}
                        bg="info700"
                        hoverBg="info600"
                        rounded="lg"
                        m={{ b: { xs: "1rem", sm: "0" } }}
                    >
                        <Text
                            textSize="subheader"
                            textWeight="800"
                            fontFamily='ko'
                        >백테스트
                        </Text>
                    </Button>
                </Container> {/* 끝 : 선택 조건 보여주기 */}

            </Div>
        </>
    )
}


export default BacktestCondition
