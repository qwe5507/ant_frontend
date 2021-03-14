import React, { useState, useEffect } from "react"
import BacktestApi from "../../api/BacktestApi"
import BacktestResult from "./BacktestResult"

import { Button, Container, Text, Div, Dropdown, Anchor, Input, Icon, Notification } from "atomize"

// import Notification from './uicomponents/Notification'
function BacktestCondition() {

    // 선택 조건 목록
    let [co, coChange] = useState([]);

    // 각 조건 드롭박스

    let [testPeriodInputVal, testPeriodInputValChange] = useState();
    let [testPeriod, testPeriodChange] = useState();

    let [showcoFsvalue, showcoFsvalueChange] = useState(false);
    let [coFsvalueSel, coFsvalueSelChange] = useState('조건');

    let [showcoPeriod, showcoPeriodChange] = useState(false);
    let [coPeriodSel, coPeriodSelChange] = useState('기간');

    let [showcoSet, showcoSetChange] = useState(false);
    let [coSetSel, coSetSelChange] = useState('기준');

    let [coFsInputVal, coFsInputValChange] = useState('');

    let [showcoPrice, showcoPriceChange] = useState(false);
    let [coPriceSel, coPriceSelChange] = useState('조건');

    let [coPriceInputVal, coPriceInputValChange] = useState('');

    // 에러 메시지 Notification State
    let [coInputError, coInputErrorChange] = useState(false);   // 입력 값 없음
    let [periodInputError, periodInputErrorChange] = useState(false);   // 기간 에러
    let [coDuplicateError, coDuplicateErrorChange] = useState(false);   // 중복 옵션

    // 백테스트 결과 저장 State
    let [result, resultChange] = useState('');

    // 백테스트 수행 중 버튼 로딩
    const [isLoading, isLoadingChange] = useState(false)

    // 기간 버튼
    function addPeriod() {
        // 빈 값 확인
        if (testPeriodInputVal == null) {
            coInputErrorChange(true);
        }
        else {
            // 년도 유효성 확인
            if (parseInt(testPeriodInputVal) >= 2010 && parseInt(testPeriodInputVal) < 2021) {
                testPeriodChange(testPeriodInputVal);
            }
            else {
                periodInputErrorChange(true);
            }
        }
    }

    // 재무제표 선택 목록 추가 함수
    function addFsCo() {
        // 빈 값 확인
        if (coFsvalueSel == '조건' || coPeriodSel == '기간' || coSetSel == '기준' || coFsInputVal == '') {
            coInputErrorChange(true);
        }
        else {
            // 중복 확인
            var chk = coFsvalueSel + coPeriodSel + coSetSel;
            var duplicate = co.findIndex((a) => { return a.chk === chk })

            // 입력 값 숫자 확인
            var num_check = /^[0-9]*$/;
            if (!num_check.test(coFsInputVal)) {
                return; // 숫자가 아니면 addFsCo 함수 종료
            }

            // 중복 없으면 State에 옵션 저장
            if (duplicate < 0) {

                if (coSetSel === '수치') {
                    var unit;
                    switch (coFsvalueSel) {
                        case '매출액':
                        case '영업이익':
                        case '당기순이익':
                            unit = '0억원';
                            break;
                        case '영업이익률':
                        case '순이익률':
                        case 'ROE(%)':
                        case 'ROA(%)':
                        case '부채비율':
                            unit = '%';
                            break;
                    }
                }
                else {
                    unit = '%';
                }

                var temp = {
                    'category': '재무제표'
                    , 'condition': coFsvalueSel
                    , 'period': coPeriodSel
                    , 'base': coSetSel
                    , 'value': coFsInputVal
                    , 'unit': unit
                    , 'chk': coFsvalueSel + coPeriodSel + coSetSel
                };
                coChange([...co, temp]);
            }
            // 중복 있으면 에러 메시지 Notification
            else {
                coDuplicateErrorChange(true);
            }
        }
    }

    // 가격 선택 목록 추가 함수
    function addPriceCo() {
        // 빈 값 확인
        if (coPriceSel == '조건' || coPriceInputVal == '') {
            coInputErrorChange(true);
        }
        else {
            // 중복 확인
            var chk = coPriceSel;
            var duplicate = co.findIndex((a) => { return a.chk === chk })

            // 입력 값 숫자 확인
            var num_check = /^[0-9]*$/;
            if (!num_check.test(coPriceInputVal)) {
                return; // 숫자가 아니면 addFsCo 함수 종료
            }

            // 중복 없으면 State에 옵션 저장
            if (duplicate < 0) {
                var temp = {
                    'category': '가격지표'
                    , 'condition': coPriceSel
                    , 'value': coPriceInputVal
                    , 'unit': ''
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
        isLoadingChange(true); // 백테스트 수행 중 버튼 클릭 비활성화

        // co에 기간 저장
        var condition = [testPeriod, ...co];

        BacktestApi.request(condition)
            .then(res => {
                const temp = JSON.parse(res.data.data);
                console.log('==1==결과', temp);
                resultChange(temp);
                isLoadingChange(false); // 백테스트 수행 후 버튼 클릭 활성화
            })
            .catch(err => {
                console.log('executeBacktest 에러', err);
                isLoadingChange(false); // 백테스트 실패 시 버튼 재활성화
            })
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
                    align="center"
                >
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
                            1. 테스트 기간
                        </Text>
                        <Div
                            d="flex"
                            w="100%"
                            justify="center"
                        >
                            <Input
                                w={{ xs: "5rem", sm: "8rem" }}
                                m={{ b: "1.5rem" }}
                                fontFamily='ko'
                                placeholder="시작년도 입력"
                                onChange={(e) =>
                                    testPeriodInputValChange(e.target.value)
                                }
                            />
                            <Text
                                w={{ xs: "10rem", sm: "10rem" }}
                                p={{ t: "0.3rem" }}
                                m={{ l: "0.5rem" }}
                                textSize="subheader"
                                textWeight="500"
                                textAlign="left"
                                fontFamily="ko"
                            >
                                년 부터 2021년 까지
                            </Text>
                            <Icon
                                name="Add"
                                color="info700"
                                size="40px"
                                cursor="pointer"
                                m={{ b: "1.5rem", r: "1rem" }}
                                onClick={() => { addPeriod() }}
                            />
                        </Div>
                    </Div>

                    {/* 기간 설정 시 아래 조건 보임 */}
                    {/* 재무제표 조건 드롭다운 */}
                    {testPeriod ?
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
                                2. 재무제표 조건
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
                                    w={{ xs: "50%", sm: "10rem" }}
                                    m={{ b: "0.5rem", r: "1rem" }}
                                    isOpen={showcoFsvalue}
                                    onClick={() =>
                                        showcoFsvalueChange(!showcoFsvalue)
                                    }
                                    menu={coFsvalue}
                                >
                                    {coFsvalueSel}
                                </Dropdown>
                                <Dropdown
                                    w={{ xs: "50%", sm: "8rem" }}
                                    m={{ b: "0.5rem", r: "1rem" }}
                                    isOpen={showcoPeriod}
                                    onClick={() =>
                                        showcoPeriodChange(!showcoPeriod)
                                    }
                                    menu={coPeriod}
                                >
                                    {coPeriodSel}
                                </Dropdown>
                            </Div>
                            <Div
                                d="flex"
                                w="100%"
                                justify="center"
                            >
                                <Dropdown
                                    w={{ xs: "50%", sm: "8rem" }}
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
                                    w={{ xs: "100%", sm: "8rem" }}
                                    m={{ b: "1.5rem" }}
                                    fontFamily='ko'
                                    placeholder="값 입력"
                                    onChange={(e) =>
                                        coFsInputValChange(e.target.value)
                                    }
                                />
                                <Text
                                    w={{ xs: "20%", sm: "5rem" }}
                                    p={{ t: "0.3rem" }}
                                    textSize="subheader"
                                    textWeight="500"
                                    textAlign="center"
                                    fontFamily="ko"
                                >
                                    이상
                            </Text>
                                <Icon
                                    name="Add"
                                    color="info700"
                                    size="40px"
                                    cursor="pointer"
                                    m={{ b: "1.5rem", r: "1rem" }}
                                    onClick={() => { addFsCo() }}
                                />

                            </Div>

                        </Div>
                        : ""}{/* 끝 : 재무제표 조건 드롭다운 */}

                    {/* 가격지표 조건 드롭다운 */}
                    {testPeriod ?
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
                                3. 가격지표 조건
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

                            <Div
                                d="flex"
                                w="100%"
                                justify="center"
                            >
                                <Dropdown
                                    w={{ xs: "50%", sm: "8rem" }}
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
                                    w={{ xs: "100%", sm: "8rem" }}
                                    m={{ b: "1.5rem" }}
                                    fontFamily='ko'
                                    placeholder="값 입력"
                                    onChange={(e) =>
                                        coPriceInputValChange(e.target.value)
                                    }
                                />
                                <Text
                                    w={{ xs: "20%", sm: "5rem" }}
                                    p={{ t: "0.3rem" }}
                                    textSize="subheader"
                                    textWeight="500"
                                    textAlign="center"
                                    fontFamily="ko"
                                >
                                    이하
                        </Text>
                                <Icon
                                    name="Add"
                                    color="info700"
                                    size="40px"
                                    cursor="pointer"
                                    m={{ b: "1.5rem", r: "1rem" }}
                                    onClick={() => { addPriceCo() }}
                                />
                            </Div>
                        </Div>
                        : ""}{/* 끝 : 가격지표 조건 드롭다운 */}
                </Container>

                {/* 선택조건 보여주기 */}
                {testPeriod ?
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
                                    w="18%"
                                >
                                    기간
                            </Text>
                                <Text
                                    textWeight="800"
                                    fontFamily="ko"
                                    w="18%"
                                >
                                    기준
                            </Text>
                                <Text
                                    textWeight="800"
                                    fontFamily="ko"
                                    w="18%"
                                >
                                    값
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
                        <Div
                            p="1rem"
                            bg="white"
                            shadow="2"
                            rounded="xl"
                            w={{ xs: "100%", sm: "40rem" }}
                            m={{ b: "0.5rem" }}
                        >
                            <Text
                                textWeight="800"
                                fontFamily="ko"
                                w="100%"
                            >
                                백테스트 기간 : {testPeriod}년 부터 2021년 까지
                            </Text>
                        </Div>


                        {/* 선택조건 데이터 */}
                        {
                            co && co.map((a, i) => {
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
                                            <Text
                                                textWeight="800"
                                                fontFamily="ko"
                                                w="18%"
                                            >
                                                {a.period}
                                            </Text>
                                            <Text
                                                textWeight="800"
                                                fontFamily="ko"
                                                w="18%"
                                            >
                                                {a.base}
                                            </Text>
                                            <Text
                                                textWeight="800"
                                                fontFamily="ko"
                                                w="18%"
                                            >
                                                {a.value}{a.unit}
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
                    </Container>
                    : ""} {/* 끝 : 선택 조건 보여주기 */}

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
                        <BacktestResult result={result} />
                    </Container>
                }

                {/* 조건 입력 에러 Notification*/}
                <Notification
                    bg="warning700"
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
                    모든 조건을 입력 또는 선택 후 버튼을 누르세요.
                </Notification>

                {/* 기간 에러 Notification*/}
                <Notification
                    bg="warning700"
                    isOpen={periodInputError}
                    onClose={() => periodInputErrorChange(false)}
                    prefix={
                        <Icon
                            name="AlertSolid"
                            color="white"
                            size="18px"
                            m={{ r: "0.5rem" }}
                        />
                    }
                >
                    백테스트는 2010년 부터 2020년 까지 가능합니다. 다시 입력해주세요.
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


export default BacktestCondition
