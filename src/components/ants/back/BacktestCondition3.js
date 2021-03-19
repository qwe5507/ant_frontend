import React, { useState, useEffect } from "react"
import BacktestApi from "../../../api/BacktestApi2"
import BacktestResult3 from "./BacktestResult3"

import { Button, Container, Text, Div, Dropdown, Anchor, Input, Icon, Notification } from "atomize"

// import Notification from './uicomponents/Notification'
function BacktestCondition3() {

    // 선택 조건 목록
    let [co, coChange] = useState([]);

    // 각 조건 드롭박스
    let [showcoFsvalue, showcoFsvalueChange] = useState(false);
    let [coFsvalueSel, coFsvalueSelChange] = useState('조건');

    let [coSetSel, coSetSelChange] = useState('기준');

    let [showcoPrice, showcoPriceChange] = useState(false);
    let [coPriceSel, coPriceSelChange] = useState('조건');

    let [coPriceInputVal, coPriceInputValChange] = useState('');

    // 에러 메시지 Notification State
    let [zoInputError, zoInputErrorChange] = useState(false);   // 조건 모두 선택 안되었을 때
    let [coInputError, coInputErrorChange] = useState(false);   // 회사명-조건 모두 선택 안되었을 때
    let [coDuplicateError, coDuplicateErrorChange] = useState(false);   // 중복 옵션

    // 백테스트 결과 저장 State
    let [result, resultChange] = useState('');

    // 백테스트 수행 중 버튼 로딩
    const [isLoading, isLoadingChange] = useState(false)

    // 재무제표 선택 목록 추가 함수
    function addFsCo() {
        // 빈 값 확인
        if (coFsvalueSel == '조건' ) {
            zoInputErrorChange(true);
        }
        else {
            // 중복 확인
            var chk = coFsvalueSel
            var duplicate = co.findIndex((a) => { return a.category === '회사명' })

            // 중복 없으면 State에 옵션 저장
            if (duplicate < 0) {

                if (coSetSel === '수치') {
                    var unit;
                    switch (coFsvalueSel) {
                        case '애플(AAPL)':
                        case '월마트(WMT)':
                        case '머크(MRK)':
                    }
                }
                else {
                    unit = '%';
                }

                var temp = {
                    'category': '회사명'
                    , 'condition': coFsvalueSel
                    , 'unit': unit
                    , 'chk': coFsvalueSel
                };
                coChange([...co, temp]);
            }
            // 중복 있으면 에러 메시지 Notification
            else {
                coDuplicateErrorChange(true);
            }
        }
    }

    // 기간 선택 목록 추가 함수
    function addPriceCo() {
        // 빈 값 확인
        if (coPriceSel == '조건') {
            zoInputErrorChange(true);
        }
        else {
            // 중복 확인
            var chk = coPriceSel;
            var duplicate = co.findIndex((a) => { return  a.category === '기간' })

            // 입력 값 숫자 확인
            var num_check = /^[0-9]*$/;
            if (!num_check.test(coPriceInputVal)) {
                return; // 숫자가 아니면 addFsCo 함수 종료
            }

            // 중복 없으면 State에 옵션 저장
            if (duplicate < 0) {
                var temp = {
                    'category': '기간'
                    , 'condition': coPriceSel
                    , 'chk': coPriceSel
                };
                coChange([...co, temp]);
            }
            // 중복 있으면 에러 메시지 Notification
            else {
                coDuplicateErrorChange(true);
            }
        }
    }

    // 선택 목록 제거 함수
    function removeCo(chk) {
        var idx = co.findIndex((a) => { return a.chk === chk });
        var temp = [...co];
        temp.splice(idx, 1);
        coChange(temp);
    }

    // 백테스트 실행
    function executeBacktest() {
       // window.location.reload()
        if(co.length != 2)
        {
            coInputErrorChange(true);
        }else{
        isLoadingChange(true); // 백테스트 수행 중 버튼 클릭 비활성화
        BacktestApi.rsirequest(co)
            .then(res => {
            
                resultChange(res.data.data);
                isLoadingChange(false); // 백테스트 수행 후 버튼 클릭 활성화
            })
            .catch(err => {
                console.log('executeBacktest 에러', err);
                isLoadingChange(false); // 백테스트 실패 시 버튼 재활성화
            })
        }
        
    }

    // 재무제표 조건
    const coFsvalue = (
        <Div>
            {['애플(AAPL)', '월마트(WMT)', '머크(MRK)'].map((name, index) => (
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

    // 가격지표 조건 (복수선택)
    const coPrice = (
        <Div>
            {[ '2016-2018년(2016.01.01~2018.12.31)', 
            '2017-2019년(2017.01.01~2019.12.31)', '2018-2020년(2018.01.01~2020.12.31)'].map((name, index) => (
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
                p={{ t: { xs: "6rem", md: "6rem" } }}
                overflow="hidden"
            >
                <Container
                    d="flex"
                    flexDir="column"
                    align="center"
                >
                    <Text
                        tag="h1"
                        textWeight="800"
                        textAlign="center"
                        textSize="display2"
                        m={{ b: "1.5rem" }}
                        fontFamily='ko'
                    >
                        해외주식 RSI 전략 백테스트
                        </Text>

                    {/* 재무제표 조건 드롭다운 */}
                    <Div
                        d="flex"
                        justify="center"
                        flexDir="column"
                        align="center"
                        w="100%"
                        m={{ b: "0.5rem" }}
                    >
                        <Div
                        d="flex"
                        flexDir="row"                     
                    >
                        <Text
                            textSize="title"
                            m={{ b: "0.5rem" }}
                            textWeight="800"
                            textAlign="center"
                            fontFamily="ko"
                        >
                            1. 회사 선택
                        </Text>
                        <Text
                            textSize="subheader"
                            m={{ x: { xs: '0.5rem', md: '0.5rem' }, y: { xs: '0rem', md: '0rem' }}}
                            textWeight="500"
                            textAlign="center"
                            fontFamily="ko"
                        >
                            대상 회사를 선택해보세요
                        </Text>
                        </Div>
                        <Div
                            d="flex"
                            w="100%"
                            justify="center"
                        >
                            <Dropdown
                                w={{ xs: "50%", sm: "20rem" }}
                                m={{ b: "0.5rem", r: "1rem" }}
                                isOpen={showcoFsvalue}
                                onClick={() =>
                                    showcoFsvalueChange(!showcoFsvalue)
                                }
                                menu={coFsvalue}
                            >
                                {coFsvalueSel}
                            </Dropdown>
                            <Icon
                                name="Add"
                                color="info700"
                                size="40px"
                                cursor="pointer"
                                m={{ b: "1.5rem", r: "1rem" }}
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
                         <Div
                        d="flex"
                        flexDir="row"
                    >
                        <Text
                            textSize="title"
                            m={{ b: "0.5rem" }}
                            textWeight="800"
                            textAlign="center"
                            fontFamily="ko"
                        >
                            2. 기간 조건
                        </Text>
                        <Text
                            textSize="subheader"
                            m={{ x: { xs: '0.5rem', md: '0.5rem' }, y: { xs: '0rem', md: '0rem' }}}
                            textWeight="500"
                            textAlign="center"
                            fontFamily="ko"
                        >
                           백테스트가 적용될 기간을 선택해보세요
                        </Text>
                        </Div>
                    </Div>
                    <Div
                        d="flex"
                        w="100%"
                        justify="center"
                    >
                        <Dropdown
                            w={{ xs: "50%", sm: "20rem" }}
                            m={{ b: "1.5rem", r: "1rem" }}
                            isOpen={showcoPrice}
                            onClick={() =>
                                showcoPriceChange(!showcoPrice)
                            }
                            menu={coPrice}
                        >
                            {coPriceSel}
                        </Dropdown>
                        <Icon
                            name="Add"
                            color="info700"
                            size="40px"
                            cursor="pointer"
                            m={{ b: "1.5rem", r: "1rem" }}
                            onClick={() => { addPriceCo() }}
                        />

                    </Div> {/* 끝 : 가격지표 조건 드롭다운 */}
                </Container>

                {/* 선택조건 보여주기 */}
                <Container
                    d="flex"
                    flexDir="column"
                    align="center"
                    textAlign="center"
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
                                w="18%"
                            >
                                분류
                            </Text>
                            <Text
                                textWeight="800"
                                fontFamily="ko"
                                w="18%"
                            >
                                조건
                            </Text>
                           
                            <Text
                                textWeight="800"
                                fontFamily="ko"
                                w="6%"
                            >
                                삭제
                            </Text>
                        </Div>
                    </Div>

                    {/* 선택조건 데이터 */}
                    {
                        co.map((a, i) => {
                            return (
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
                                            w="18%"
                                        >
                                            {a.category}
                                        </Text>
                                        <Text
                                            textWeight="800"
                                            fontFamily="ko"
                                            w="18%"
                                        >
                                            {a.condition}
                                        </Text>

                                        <Icon
                                            name="CBIndetermine"
                                            color="brand900"
                                            size="20px"
                                            w="10%"
                                            cursor="pointer"
                                            onClick={() => { removeCo(a.chk) }}
                                        />
                                    </Div>
                                </Div>
                            )
                        })
                    }

                    <Button
                        h="3rem"
                        w={{ xs: "50%", sm: "11rem" }}
                        bg="info700"
                        hoverBg="info600"
                        rounded="lg"
                        m={{ b: { xs: "1rem", sm: "5rem" } }}
                        onClick={() => { executeBacktest() }}
                        prefix={
                            isLoading ?
                                <Icon
                                    name="Loading"
                                    pos="absolute"
                                    top="50%"
                                    left="1rem"
                                    transform="translateY(-50%)"
                                    size="18px"
                                    color="white"
                                    m={{ r: "0.5rem" }}
                                />
                                :
                                ""
                        }
                        disabled={isLoading}
                    >
                        <Text
                            textSize="subheader"
                            textWeight="800"
                            fontFamily='ko'
                        >백테스트
                        </Text>
                    </Button>
                </Container> {/* 끝 : 선택 조건 보여주기 */}

                {/* 백테스트 결과 화면 */}
                {result === ''
                    ?
                    ''
                    :
                    <Container
                        d="flex"
                        flexDir="column"
                        align="center"
                    >
                        <BacktestResult3 result={result} />
                    </Container>
                }

                {/* 회사명 기간 입력 에러 Notification*/}
                <Notification
                    bg="info700"
                    isOpen={coInputError}
                    onClose={() => coInputErrorChange(false)}
                    prefix={
                        <Icon
                            name="AlertSolid"
                            color="white"
                            size="18px"
                            m={{ r: "0.5rem" }}
                        />
                    }
                >
                   회사명과 기간을 모두 선택하세요
                </Notification>
                
                {/* 조건 입력 에러 Notification*/}
                <Notification
                    bg="info700"
                    isOpen={zoInputError}
                    onClose={() => zoInputErrorChange(false)}
                    prefix={
                        <Icon
                            name="AlertSolid"
                            color="white"
                            size="18px"
                            m={{ r: "0.5rem" }}
                        />
                    }
                >
                    조건을 선택해 주세요
                </Notification>

                {/* 중복 선택 에러 Notification*/}
                <Notification
                    bg="warning700"
                    isOpen={coDuplicateError}
                    onClose={() => coDuplicateErrorChange(false)}
                    prefix={
                        <Icon
                            name="AlertSolid"
                            color="white"
                            size="18px"
                            m={{ r: "0.5rem" }}
                        />
                    }
                >
                    이미 선택한 조건입니다. 값 변경을 원하면 선택 목록에서 삭제 후 다시 추가하세요.
                </Notification>

            </Div>
        </>
    )
}


export default BacktestCondition3
