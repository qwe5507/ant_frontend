import React, { useEffect, useState, useMemo } from "react";

import { Button, Container, Text, Div, Icon, Input, Anchor } from "atomize";
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import DataTable from 'react-data-table-component';
import StockApiService from "../../api/StockApi";
import MainPnlIndShimmer from "./MainPnlIndShimmer";
import { useHistory } from 'react-router-dom';
function StocksList() {

    let [tdList, tdListChange] = useState([]);
    let history = useHistory();
    const columns = [
        {
            name: '종목코드',
            selector: 'code',
            sortable: true
        },
        {
            name: '종목이름',
            selector: 'name',
            sortable: true
        },
        {
            name: '가격',
            selector: 'price',
            sortable: true
        },
        {
            name: '변동률(%)',
            selector: 'change',
            sortable: true
        },

    ]
    
    // const TextField = styled.input`
    //     height: 32px;
    //     width: 200px;
    //     border-radius: 3px;
    //     border-top-left-radius: 5px;
    //     border-bottom-left-radius: 5px;
    //     border-top-right-radius: 0;
    //     border-bottom-right-radius: 0;
    //     border: 1px solid #e5e5e5;
    //     padding: 0 32px 0 16px;

    //     &:hover {
    //         cursor: pointer;
    //     }    
    // `;

    // const ClearButton = styled(Button)`
    //     border-top-left-radius: 0;
    //     border-bottom-left-radius: 0;
    //     border-top-right-radius: 5px;
    //     border-bottom-right-radius: 5px;
    //     height: 34px;
    //     width: 32px;
    //     text-align: center;
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    // `;



    // const FilterComponent = ({ filterText,  onClear, onFilter }) => (
    //     <>
    //         <Input id="search" type="text" placeholder="Filter By Name" aria-label="Search Input" value={filterText} onChange={onFilter} />
    //         <ClearButton type="button" onClick={onClear}>X</ClearButton>
    //     </>
    // );

    // const [filterText, setFilterText] = useState('');
    // const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    // const filteredItems = tdList.filter(item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));

    // const subHeaderComponentMemo = useMemo(() => {
    //     const handleClear = () => {
    //         if (filterText) {
    //             setResetPaginationToggle(!resetPaginationToggle);
    //             setFilterText('');
    //         }
    //     };
    //     return <FilterComponent filterText={filterText} onFilter={ (e) => {setFilterText(e.target.value)}} onClear={handleClear}  />;
    // }, [filterText, resetPaginationToggle]);

    const click = (row) => {
        history.push("/Stocks/"+row.code)
    }

    const conditionalRowStyles = [
        {
          when: row => row.change < 0,
          style: {
            color: 'rgba(2, 132, 254, 1)',
            '&:hover': {
              cursor: 'pointer',
            },
          },
          
        },
        {
            when: row => row.change > 0,
            style: {
                color: "rgba(244, 84, 29, 1)",
                '&:hover': {
                cursor: 'pointer',
          },
        },
        },
        
      ];

    useEffect(() => {
        StockApiService.selectByAllStocks()
            .then(res => {
                var temp = res.data;
                var tempData = [];

                for (var i = 0; i < temp.length; i++) {

                
                    //   var dataSet = {
                    //     datasets: [
                    //       {
                    //         datasetStrokeWidth: 10,
                    //         type: "line",
                    //         borderCapStyle: "round",
                    //         borderColor: temp[i]['change'] > 0 ? "rgba(244, 84, 29, 1)" : "rgba(2, 132, 254, 1)",
                    //         borderWidth: 3,
                    //         backgroundColor: temp[i]['change'] > 0 ? "rgba(251, 207, 208, 1)" : "rgba(179, 218, 255, 1)",
                    //         pointHoverRadius: 0,
                    //         pointDot: false,
                    //         pointRadius: 0,
                    //         pointDotRadius: 0,
                    //       }
                    //     ]
                    //   }
                    var wholeData = {
                        code: temp[i]['code'],
                        name: temp[i]['name'],
                        price: temp[i]['price'],
                        change: temp[i]['change'],
                        // dataSet : dataSet
                    }
                    tempData.push(wholeData);
 
                }

                tdListChange(tempData)
                console.log(tempData)
            })
            .catch(err => {
                console.log('***********에러', err)
            })

    }, []);

    return (
        <Div
            w="100vw"
            p={{ t: { xs: "6rem", md: "8rem" } }}
            overflow="hidden"
        >
            <Container
                d="flex"
                flexDir="column"
                align="center"
            >
                <Div
                    d="flex"
                    justify="center"
                    p={{ b: "10.5rem", t: "3rem" }}
                    border={{ b: "1px solid" }}
                    borderColor="gray300"
                    w={{ xs: "100%", lg: "59rem" }}
                >
                    <Div
                        d="flex"
                        justify="center"
                        border="1px solid"
                        borderColor="gray200"
                        w={{ xs: "100%", md: "40rem" }}
                        maxW="100%"
                        pos={{ xs: "static", md: "relative" }}
                        m={{ xs: "1rem", md: "1rem" }}
                        top="0"
                        p={{
                            x: { xs: "2rem", sm: "1.5rem" },
                            b: { xs: "2rem", sm: "1.5rem" },
                            t: "1.5rem",
                        }}
                        h="100%"
                        bg="white"
                        shadow="4"
                        rounded="xl"
                    >



                        {/* 매매내역 */}
                        <Div

                            p="1rem"
                            bg="white"
                            shadow="2"
                            border="1px solid"
                            borderColor="gray200"
                            rounded="xl"
                            w={{ xs: "100%", sm: "100%" }}
                            m={{ b: "0.5rem" }}
                        >
                            <Text
                                m={{ t: "1rem", b: "0.5rem" }}
                                textSize="paragraph"
                                textAlign="center"
                                textWeight="800"
                                textSize="subheader"
                                fontFamily="ko"
                            >
                                [ 종목내역 ]
                        </Text>
                            {tdList
                                ?
                                <DataTable
                                    columns={columns}
                                    data={tdList}
                                    pagination
                                    // paginationResetDefaultPage={resetPaginationToggle}
                                    // subHeader
                                    // subHeaderComponent={subHeaderComponentMemo}
                                    persistTableHead
                                    onRowClicked={click}
                                    conditionalRowStyles={conditionalRowStyles}


                                    // onRowClicked={ () => stocksClick() }
                                />
                                :
                                <Div>

                                    <MainPnlIndShimmer />
                                    <MainPnlIndShimmer />
                                    <MainPnlIndShimmer />
                                    <MainPnlIndShimmer />
                                    <MainPnlIndShimmer />
                                    <MainPnlIndShimmer />
                                    <MainPnlIndShimmer />
                                    <MainPnlIndShimmer />
                                    <MainPnlIndShimmer />
                                    <MainPnlIndShimmer />


                                </Div>
                            }
                        </Div> {/* 매매내역 종료 */}
                    </Div>


                </Div>
            </Container>
        </Div>
    )
}

storiesOf('Filtering', module)
  .add('Example 1', () => <StocksList />);

export default StocksList;