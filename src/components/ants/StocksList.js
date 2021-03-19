import React, { useEffect, useState } from "react";

import { Button, Container, Text, Div, Icon, Input, Anchor } from "atomize";

import { Line } from 'react-chartjs-2';
import DataTable from 'react-data-table-component';
import StockApiService from "../../api/StockApi";
import MainPnlIndShimmer from "./MainPnlIndShimmer";
import { useHistory } from 'react-router-dom';
function StocksList() {

    let [tdList, tdListChange] = useState();
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

    const items = []
    let itemsPerPage = 122;
    for (var i=1; i<=itemsPerPage; i++){
        var temp = { key : i, name : "Page "+ i }
        items.push(temp);
    }
    const [page, setPage] = useState(0);
    const from = page * itemsPerPage;
    const to = (page + 1) * itemsPerPage;

    const options = {
        filterType: "dropdown",
        responsive: "stacked",
        filter: false,
        download: false,
        print: false,
        selectableRows: true,
        search: false,
        onRowClick: (row,index)=>{
          alert(row)
        }
    }
    // function stocksClick(stocksId){
    //     history.push('/Stocks/' + stockId)
    // }
    
    useEffect(() => {
        StockApiService.selectByAllStocks()
            .then(res => {
                var temp = res.data;
                var tempData = [];

                for (var i = 0; i < temp.length; i++) {
                    var dataSet = {
                        datasets: [
                          {
                            datasetStrokeWidth: 10,
                            type: "line",
                            borderCapStyle: "round",
                            borderColor: temp[i]['change'] > 0 ? "rgba(244, 84, 29, 1)" : "rgba(2, 132, 254, 1)",
                            borderWidth: 3,
                            backgroundColor: temp[i]['change'] > 0 ? "rgba(251, 207, 208, 1)" : "rgba(179, 218, 255, 1)",
                            pointHoverRadius: 0,
                            pointDot: false,
                            pointRadius: 0,
                            pointDotRadius: 0
                          }
                        ]
                      }
                      var wholeData = {
                        code: temp[i]['code'],
                        name: temp[i]['name'],
                        price: temp[i]['price'],
                        change: temp[i]['change'],
                        dataSet: dataSet
                      }
                      tempData.push(wholeData);
                      console.log(tempData)

                }
                tdListChange(tempData)
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
                                options={options}
                                page={page}
                                numberOfPages={Math.floor(items.length / itemsPerPage)}
                                onPageChange={page => setPage(page)}
                                label={`${from + 1}-${to} of ${items.length}`}
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

export default StocksList;